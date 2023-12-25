// 문자열 내림차순으로 배치하기
// 1. 문자열을 배열로 변환
// 2. 대소문자 비교
// 3. 배열을 다시 문자열로 변환
function solution(s) {
  const str = s.split("").sort((a, b) => {
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return str.join("");
}

// 다른 풀이
function solution(s) {
  return s.split("").sort().reverse().join("");
}
