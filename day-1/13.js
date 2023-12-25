// 자릿수 더하기
function solution(n) {
  const arr = String(n).split("");
  const sum = arr.reduce((acc, arr) => acc + parseInt(arr), 0);

  return sum;
}
