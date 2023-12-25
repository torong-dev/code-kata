// 배열의 평균값
function solution(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
