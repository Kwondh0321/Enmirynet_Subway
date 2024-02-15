let subway_line = {
  "1001": "1호선",
  "1002": "2호선",
  "1003": "3호선",
  "1004": "4호선",
  "1005": "5호선",
  "1006": "6호선",
  "1007": "7호선",
  "1008": "8호선",
  "1009": "9호선",
  "1061": "중앙선",
  "1063": "경의중앙선",
  "1065": "공항철도",
  "1067": "경춘선",
  "1075": "수인분당선",
  "1077": "신분당선",
  "1092": "우이신설선",
  "1093": "서해선"
};

let subwayArrivalInfo = {};

async function fetchSubwayData() {
  const search = document.getElementById("input_keyword").value;
  const tag = document.getElementById("chatting");
  const apiUrl = '/subway';

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      keyword: search
    })
  });

  const data = await res.json();

  // 데이터 초기화
  subwayArrivalInfo = {};

  // 정렬된 도착 정보
  const sortedArrivals = data.realtimeArrivalList.sort((a, b) => a.subwayId.localeCompare(b.subwayId));

  // 도착 정보를 노선별로 처리
  for (const arrival of sortedArrivals) {
    if (!subwayArrivalInfo[arrival.subwayId]) {
      subwayArrivalInfo[arrival.subwayId] = { 상행: [], 하행: [] };
    }

    const directionKey = arrival.updnLine === '상행' ? '상행' : '하행';

    subwayArrivalInfo[arrival.subwayId][directionKey].push([
      subway_line[arrival.subwayId], // 호선
      arrival.updnLine, // 상행/하행	
      arrival.trainLineNm, // 행선지
      arrival.btrainNo, // 전철번호
      arrival.arvlMsg2, // 현재 위치 (전역 도착)
      arrival.arvlMsg3 // 그 역이 어디있는지 (남영)
    ]);
  }

  // UI 업데이트 로직...
  updateUI();
}

// UI 업데이트 함수
function updateUI() {
  const tag = document.getElementById("chatting");
  tag.innerHTML = ""; // 엘리먼트 내용 초기화

  for (const lineId in subwayArrivalInfo) {
    const lineInfo = subwayArrivalInfo[lineId];
    for (const directionKey in lineInfo) {
      const arrivals = lineInfo[directionKey];
      if (arrivals.length >= 1) {
        tag.innerHTML += `
          <div class="search-list">
            <div class="subway-line">${subway_line[lineId]} ${directionKey}</div>
            <button class="expand-btn" aria-expanded="false" aria-controls="content_${lineId}_${directionKey}" onclick="toggleContent('${lineId}_${directionKey}')">+</button>
            <div class="expandable-content" id="content_${lineId}_${directionKey}" aria-hidden="true">
              ${getArrivalInfoHTML(arrivals)}
            </div>
          </div>
          <br>
        `;
      }
    }
  }
}


function getArrivalInfoHTML(arrivals) {
  let html = '<div class="arrival-info">';
  arrivals.forEach(arrival => {
    html += `
      <div class="arrival-item">
        <div><strong>노선: </strong> ${arrival[0]}</div>
        <div><strong>행선지: </strong> ${arrival[2]} (${arrival[1]})</div>
        <div><strong>전철번호: </strong> ${arrival[3]}</div>
        <div><strong>현재상황: </strong> ${arrival[4]}</div>
        <div><strong>현재위치: </strong> ${arrival[5]}역</div>
      </div>
    `;
  });
  html += '</div>';
  return html;
}

// 토글 함수
function toggleContent(contentId) {
  const content = document.getElementById(`content_${contentId}`);
  const button = document.querySelector(`[aria-controls="content_${contentId}"]`);

  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !expanded);
  content.style.display = expanded ? 'none' : 'block'; // 토글
}