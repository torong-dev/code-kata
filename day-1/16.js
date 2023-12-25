// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

// 다른 풀이
function solution(x, n) {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}
