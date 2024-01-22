// 내적
function solution(a, b) {
  const answer = a.reduce((acc, num, index) => acc + num * b[index], 0);
  return answer;
}

// 다른 풀이
function solution(a, b) {
  return a.reduce((acc, _, index) => (acc += a[index] * b[index]), 0);
}
