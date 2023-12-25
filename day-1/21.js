// 하샤드 수
// 1. 각 자리의 숫자들을 더함
// 2. x를 더한 숫자로 나눈 나머지가 0이면 true, 아니면 false
function solution(x) {
  const answer = String(x)
    .split("")
    .reduce((acc, a) => acc + parseInt(a), 0);
  return x % answer === 0;
}
