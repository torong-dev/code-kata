// 두 개 뽑아서 더하기
// 1. 두 수를 더해서 만들기
// 2. 중복 피하기
// 3. 오름차순 정렬

function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (!answer.includes(sum)) answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b);
}

// 다른 풀이
function solution(numbers) {
  const answer = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}
