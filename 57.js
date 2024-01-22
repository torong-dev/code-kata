// 모의고사
function solution(answers) {
  const giveupmath = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0]; // 점수 저장
  const answer = [];

  // 정답 배열을 순회, 각 수포자들과 비교
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < giveupmath.length; j++) {
      if (answers[i] === giveupmath[j][i % giveupmath[j].length]) {
        scores[j]++;
      }
    }
  }

  // 가장 높은 점수
  const maxScore = Math.max(...scores);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      answer.push(i + 1);
    }
  }

  return answer;
}
