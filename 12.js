// 평균 구하기
function solution(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
