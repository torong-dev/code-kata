// 두 정수 사이의 합
function solution(a, b) {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  let answer = 0;

  for (let i = minNum; i <= maxNum; i++) {
    answer += i;
  }

  return answer;
}
