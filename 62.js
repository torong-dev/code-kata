// 옹알이 (2)
function solution(babbling) {
  let answer = 0;
  let word = ["aya", "ye", "woo", "ma"];

  // 배열 순회
  for (let i = 0; i < babbling.length; i++) {
    // 연속된 문자를 가지고 있는지 확인
    for (let j = 0; j < word.length; j++) {
      // 연속된 문자 제외
      if (babbling[i].includes(word[j].repeat(2))) {
        break;
      }
      // 발음할 수 있는 문자 찾기
      babbling[i] = babbling[i].split(word[j]).join("!");
    }
  }

  // 정규식으로 특정 문자가 연속으로 나오는 경우, 그 개수를 반환
  answer = babbling.filter((e) => {
    // ^ 문자열의 시작
    // $ 문자열의 끝
    // !가 최소 한 번 이상 연속으로 나오는지 확인
    return /^!+$/.test(e);
  }).length;

  return answer;
}
