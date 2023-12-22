// 나머지가 1이 되는 수 찾기
function solution(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

function solution(n) {
  for (let x = 2; x < n; x++) if (n % x === 1) return x;
}
