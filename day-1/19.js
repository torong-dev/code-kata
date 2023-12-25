// 정수 제곱근 판별
// Math.sqrt() 함수는 숫자의 제곱근을 반환함
// Number.isInteger() 메서드는 주어진 값이 정수인지 판별함
// Math.pow() 함수는 Math.pow(a, b)일 때 a에 b를 제곱한 값을 반환함

function solution(n) {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}
