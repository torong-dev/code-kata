// 없는 숫자 더하기
function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const answer = arr
    .filter((num) => !numbers.includes(num))
    .reduce((acc, num) => acc + num, 0);

  return answer;
}

// 다른 풀이
function solution(numbers) {
  return 45 - numbers.reduce((acc, num) => acc + num, 0);
}
