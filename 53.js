// 명예의 전당(1)
// 1. 최하위 점수 찾기
// 2. 명예의 전당 초기화
// 3. 기존 가수의 예전 점수 삭제, 새로운 가수 점수 추가
function solution(k, score) {
  let answer = [];

  return score.reduce((acc, cur) => {
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)]; // 최하위 점수 찾기
  }, []);
}
