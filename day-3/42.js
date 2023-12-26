// 삼총사
function solution(number) {
  let answer = 0;

  // 조합을 찾는 재귀 함수
  function findCombination(index, selected, sum) {
    // 선택된 3명의 정수 합이 0이면 answer 증가
    if (selected.length === 3 && sum === 0) {
      answer++;
      return;
    }

    // 모든 학생에 대해 조합 찾기
    for (let i = index; i < number.length; i++) {
      // 다음 학생을 선택하고 재귀 호출
      findCombination(i + 1, selected.concat(number[i]), sum + number[i]);
    }
  }

  // 초기 호출
  findCombination(0, [], 0);
  return answer;
}

// 다른 풀이
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (sum === 0) answer++;
      }
    }
  }
  return answer;
}
