// 성격 유형 검사하기
function solution(survey, choices) {
  let answer = "";

  // choices점수를 비교할 score 객체
  let score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  // 성격 유형 점수를 담을 mbti 객
  let mbti = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  // survey[i][0] 을 비교해서 이름순서에 따른 mbti 점수 부여
  for (let i = 0; i < survey.length; i++) {
    // RCJA가 나오면 RCJA가 1부터 시작
    if (
      survey[i][0] === "R" ||
      survey[i][0] === "C" ||
      survey[i][0] === "J" ||
      survey[i][0] === "A"
    ) {
      // AN일 경우 5를 넣으면 네오형에 1점 부여
      if (choices[i] > 4) {
        mbti[survey[i][1]] += score[choices[i]];
      } else {
        mbti[survey[i][0]] += score[choices[i]];
      }
    }
    // TFMN이 나오면 TFMN이 1부터 시작
    else {
      // NA일 경우 5를 넣으면 어피치형에 1점 부여
      if (choices[i] < 4) {
        mbti[survey[i][0]] += score[choices[i]];
      } else {
        mbti[survey[i][1]] += score[choices[i]];
      }
    }
  }

  // 객체에 담겨 있는 mbti 이름 각각 비교

  return answer;
}
