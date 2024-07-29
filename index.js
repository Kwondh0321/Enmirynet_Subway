// 기본 설정
const express = require("express");
const app = express();
const PORT = 3000;
const axios = require("axios");

app.use(express.json());
app.use(express.static(__dirname));

// 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/subway", async (req, res) => {
  if (!req.body.keyword) {
    return res.json({ message: "요청 body에 키워드가 존재하지 않습니다." });
  }
  let keyword = req.body.keyword;
  if (keyword.endsWith("역")) {
    keyword = keyword.slice(0, -1);
  }
  const url = `http://swopenapi.seoul.go.kr/api/subway/5546696d6a6568673438764c6f6469/json/realtimeStationArrival/0/100/${encodeURI(keyword)}`;
  try {
    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "데이터를 가져오는 중에 오류가 발생했습니다." });
  }
});


// 서버 실행
app.listen(PORT, () => {
  console.log(`${PORT} Port에서 subway가 실행 중입니다.`);
});