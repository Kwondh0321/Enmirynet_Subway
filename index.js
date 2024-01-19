// 기본 설정
const express = require("express");
const app = express();
const PORT = 3000;
const axios = require("axios");

// const { xml2json } = require("xml-js");
// const { decode } = require("iconv-lite");

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

/*

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define DIGITS 3

void generateRandomNumber(int* secretNumber) {
    srand(time(NULL));
    for (int i = 0; i < DIGITS; i++) {
        secretNumber[i] = rand() % 9 + 1;
        for (int j = 0; j < i; j++) {
            if (secretNumber[i] == secretNumber[j]) {
                i--;
                break;
            }
        }
    }
}

int countStrike(int* guess, int* secretNumber) {
    int strike = 0;
    for (int i = 0; i < DIGITS; i++) {
        if (guess[i] == secretNumber[i]) {
            strike++;
        }
    }
    return strike;
}

int countBall(int* guess, int* secretNumber) {
    int ball = 0;
    for (int i = 0; i < DIGITS; i++) {
        for (int j = 0; j < DIGITS; j++) {
            if (i != j && guess[i] == secretNumber[j]) {
                ball++;
            }
        }
    }
    return ball;
}

int main() {
    int secretNumber[DIGITS];
    int guess[DIGITS];
    int attempts = 0;

    generateRandomNumber(secretNumber);

    printf("숫자야구의 세계에 온 도전자여 환영한다!\n");
    printf("1부터 9사이에 숫자 3개를 입력하여 맞춰라\n");

    while (1) {
        attempts++;
        int strike = 0, ball = 0;

        printf("네 답은? : ");
        printf("\n%d%d%d", secretNumber[0], secretNumber[1], secretNumber[2]);
        scanf("%1d%1d%1d", &guess[0], &guess[1], &guess[2]);

        strike = countStrike(guess, secretNumber);
        ball = countBall(guess, secretNumber);

        printf("\n결과 : %d 스트라이크, %d 볼\n", strike, ball);

        if (strike == DIGITS) {
            printf("\n축하하오 %d번만에 맞췄다네.\n", attempts);
            if (attempts == 1) {
              printf("\n사진찍어서 언젠가 나 보면 진짜 음료수 한 개 사줌. \n 23학번 인지소 권도혁. 아아 7월 입대니까 그 전까지 오고~");
      } 
            break;
        }
    }

    return 0;
}

*/