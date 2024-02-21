// 문자열 나누기
function solution(s) {
  let answer = []; // 분해된 문자열 저장
  let start = 0; // 문자열 읽기
  let count = 0; // 분해된 문자열의 개수
  let value = 0; // 현재 읽은 글자와 같은 글자
  let otherValue = 0; // 현재 읽은 글자와 다른 글자

  for (let i = 0; i < s.length; i++) {
    // 현재 글자와 시작 글자가 같으면 value 증가
    if (s[start] === s[i]) {
      value += 1;
    } else {
      // 다르면 otherValue 증가
      otherValue += 1;
    }

    // 현재 읽은 글자의 수가 같을 때 분해
    if (value === otherValue) {
      // 분해된 문자열을 배열에 추가
      answer.push(s.slice(start, i + 1));
      // 다음 문자열 시작 인덱스 업뎃 후 변수 초기화
      start = i + 1;
      count = 0;
      value = 0;
      otherValue = 0;
    }
  }
  // 남은 문자열이 있고 value와 otherValue가 다르면 분해
  if (start < s.length && value !== otherValue) {
    answer.push(s.slice(start));
  }

  return answer.length;
}
