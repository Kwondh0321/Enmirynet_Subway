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

var subway_list = {
  "1호선": {
    "상행": [],
    "하행": []
  },
  "2호선": {
    "상행": [],
    "하행": []
  },
  "3호선": {
    "상행": [],
    "하행": []
  },
  "4호선": {
    "상행": [],
    "하행": []
  },
  "5호선": {
    "상행": [],
    "하행": []
  },
  "6호선": {
    "상행": [],
    "하행": []
  },
  "7호선": {
    "상행": [],
    "하행": []
  },
  "8호선": {
    "상행": [],
    "하행": []
  },
  "9호선": {
    "상행": [],
    "하행": []
  },
  "중앙선": {
    "상행": [],
    "하행": []
  },
  "경의중앙선": {
    "상행": [],
    "하행": []
  },
  "공항철도": {
    "상행": [],
    "하행": []
  },
  "경춘선": {
    "상행": [],
    "하행": []
  },
  "신분당선": {
    "상행": [],
    "하행": []
  },
  "수인분당선": {
    "상행": [],
    "하행": []
  },
  "우이신설선": {
    "상행": [],
    "하행": []
  },
  "서해선": {
    "상행": [],
    "하행": []
  }
};
let subway_id_pushlist = [];
let subway_outputlist = [];
let subway_count = 0;


async function subway() {
  let search = document.getElementById("input_keyword").value;
  let tag = document.getElementById("search_index");
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
  let a = JSON.stringify(data, null, 4);

  console.log(a);

  // Sort the data.realtimeArrivalList based on subwayId
  data.realtimeArrivalList.sort((a, b) => a.subwayId.localeCompare(b.subwayId));

  let ltag = document.createElement("div");
  ltag.setAttribute("class", "search-list");
  tag.innerHTML = "";
  tag.appendChild(ltag);
  console.log(JSON.stringify(data, null, 4))
  for (let k of data.realtimeArrivalList) {
    if (k.subwayId == '1001') {
      if (k.updnLine == '상행') {
        subway_list["1호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["1호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1002') {
      if (k.updnLine == '상행') {
        subway_list["2호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["2호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1003') {
      if (k.updnLine == '상행') {
        subway_list["3호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["3호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1004') {
      if (k.updnLine == '상행') {
        subway_list["4호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["4호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1005') {
      if (k.updnLine == '상행') {
        subway_list["5호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["5호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1006') {
      if (k.updnLine == '상행') {
        subway_list["6호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["6호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1007') {
      if (k.updnLine == '상행') {
        subway_list["7호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["7호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1008') {
      if (k.updnLine == '상행') {
        subway_list["8호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["8호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1009') {
      if (k.updnLine == '상행') {
        subway_list["9호선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["9호선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1061') {
      if (k.updnLine == '상행') {
        subway_list["중앙선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["중앙선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1063') {
      if (k.updnLine == '상행') {
        subway_list["경의중앙선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["경의중앙선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1065') {
      if (k.updnLine == '상행') {
        subway_list["공항철도"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["공항철도"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1067') {
      if (k.updnLine == '상행') {
        subway_list["경춘선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["경춘선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1075') {
      if (k.updnLine == '상행') {
        subway_list["수인분당선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["수인분당선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1077') {
      if (k.updnLine == '상행') {
        subway_list["신분당선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["신분당선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1092') {
      if (k.updnLine == '상행') {
        subway_list["우이신설선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["우이신설선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }
    if (k.subwayId == '1093') {
      if (k.updnLine == '상행') {
        subway_list["서해선"]["상행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
      else {
        subway_list["서해선"]["하행"].push([k.subwayId, k.updnLine, k.trainLineNm, k.btrainNo, k.arvlMsg2, k.arvlMsg3]);
      }
    }


    // let ntag = document.createElement("a");
    // ntag.setAttribute("class", "search");
    // ntag.innerHTML = `
    // <div class="subway-line">
    //   ${subway_line[k.subwayId]}
    // </div>
    // 		<div class="subway-updnLine">
    // 			상하행 구분 : ${k.updnLine}
    // 		</div>
    // <div class="trainLineNm">
    //   열차 방면 : ${k.trainLineNm}
    // </div>
    // <div class="btrainNo">
    //   열차 종류 : ${k.btrainNo}
    // </div>
    // <div class="arvlMsg2">
    //   도착 안내 1 : ${k.arvlMsg2}
    // </div>
    // <div class="arvlMsg3">
    //   도착 안내 2 : ${k.arvlMsg3}
    // </div>
    // <br><br>
    // `;
    // ltag.appendChild(ntag);
    subway_count = 0;
  }

  if (subway_list["1호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("1호선 상행");
    subway_outputlist.push(subway_list["1호선"]["상행"])
  }
  if (subway_list["1호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("1호선 하행");
    subway_outputlist.push(subway_list["1호선"]["하행"])
  }
  if (subway_list["2호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("2호선 상행");
    subway_outputlist.push(subway_list["2호선"]["상행"])
  }
  if (subway_list["2호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("2호선 하행");
    subway_outputlist.push(subway_list["2호선"]["하행"])
  }
  if (subway_list["3호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("3호선 상행");
    subway_outputlist.push(subway_list["3호선"]["상행"])
  }
  if (subway_list["3호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("3호선 하행");
    subway_outputlist.push(subway_list["3호선"]["하행"])
  }
  if (subway_list["4호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("4호선 상행");
    subway_outputlist.push(subway_list["4호선"]["상행"])
  }
  if (subway_list["4호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("4호선 하행");
    subway_outputlist.push(subway_list["4호선"]["하행"])
  }
  if (subway_list["5호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("5호선 상행");
    subway_outputlist.push(subway_list["5호선"]["상행"])
  }
  if (subway_list["5호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("5호선 하행");
    subway_outputlist.push(subway_list["5호선"]["하행"])
  }
  if (subway_list["6호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("6호선 상행");
    subway_outputlist.push(subway_list["6호선"]["상행"])
  }
  if (subway_list["6호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("6호선 하행");
    subway_outputlist.push(subway_list["6호선"]["하행"])
  }
  if (subway_list["7호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("7호선 상행");
    subway_outputlist.push(subway_list["7호선"]["상행"])
  }
  if (subway_list["7호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("7호선 하행");
    subway_outputlist.push(subway_list["7호선"]["하행"])
  }
  if (subway_list["8호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("8호선 상행");
    subway_outputlist.push(subway_list["8호선"]["상행"])
  }
  if (subway_list["8호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("8호선 하행");
    subway_outputlist.push(subway_list["8호선"]["하행"])
  }
  if (subway_list["9호선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("9호선 상행");
    subway_outputlist.push(subway_list["9호선"]["상행"])
  }
  if (subway_list["9호선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("9호선 하행");
    subway_outputlist.push(subway_list["9호선"]["하행"])
  }
  if (subway_list["중앙선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("중앙선 상행");
    subway_outputlist.push(subway_list["중앙선"]["상행"])
  }
  if (subway_list["중앙선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("중앙선 하행");
    subway_outputlist.push(subway_list["중앙선"]["하행"])
  }
  if (subway_list["경의중앙선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("경의중앙선 상행");
    subway_outputlist.push(subway_list["경의중앙선"]["상행"])
  }
  if (subway_list["경의중앙선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("경의중앙선 하행");
    subway_outputlist.push(subway_list["경의중앙선"]["하행"])
  }
  if (subway_list["공항철도"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("공항철도 상행");
    subway_outputlist.push(subway_list["공항철도"]["상행"])
  }
  if (subway_list["공항철도"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("공항철도 하행");
    subway_outputlist.push(subway_list["공항철도"]["하행"])
  }
  if (subway_list["경춘선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("경춘선 상행");
    subway_outputlist.push(subway_list["경춘선"]["상행"])
  }
  if (subway_list["경춘선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("경춘선 상행");
    subway_outputlist.push(subway_list["경춘선"]["하행"])
  }
  if (subway_list["수인분당선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("수인분당선 상행");
    subway_outputlist.push(subway_list["수인분당선"]["상행"])
  }
  if (subway_list["수인분당선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("수인분당선 하행");
    subway_outputlist.push(subway_list["수인분당선"]["하행"])
  }
  if (subway_list["신분당선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("신분당선 상행");
    subway_outputlist.push(subway_list["신분당선"]["상행"])
  }
  if (subway_list["신분당선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("신분당선 하행");
    subway_outputlist.push(subway_list["신분당선"]["하행"])
  }
  if (subway_list["우이신설선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("우이신설선 상행");
    subway_outputlist.push(subway_list["우이신설선"]["상행"])
  }
  if (subway_list["우이신설선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("우이신설선 하행");
    subway_outputlist.push(subway_list["우이신설선"]["하행"])
  }
  if (subway_list["서해선"]["상행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("서해선 상행");
    subway_outputlist.push(subway_list["서해선"]["상행"])
  }
  if (subway_list["서해선"]["하행"].length >= 1) {
    subway_count += 1;
    subway_id_pushlist.push("서해선 하행");
    subway_outputlist.push(subway_list["서해선"]["하행"])
  }

  for (j = 0; j < subway_count; j++) {
    let ntag = document.createElement("a");
    ntag.setAttribute("class", "search");
    ntag.innerHTML = `
            <div class="subway-line>${subway_id_pushlist}</div>
            <button class="expand-btn" aria-expanded="false" aria-controls="content1">+</button>
            <div class="expandable-content" id="content1" aria-hidden="true">
            <div class="Additional_Info" id="Additional_Info_id">${subway_outputlist[j]}</div>
            </div>
            <br>
            `;
    ltag.appendChild(ntag);
  }
}



async function myFunction() {
  i += 1;
  let tag = document.getElementById("search_index");
  let search = document.getElementById("input_keyword").value;

  let ltag = document.createElement("div");
  ltag.setAttribute("class", "search-list");
  tag.innerHTML = "";
  tag.appendChild(ltag);

  i = 0;

}
