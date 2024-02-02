// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  // 알아볼 수 없는 번호 개수
  const zero = lottos.filter((num) => num === 0).length;
  // 일치하는 번호 개수
  const match = lottos.filter((num) => win_nums.includes(num)).length;

  // 순위
  const highRank = Math.min(7 - (zero + match), 6);
  const lowRank = Math.min(7 - match, 6);

  return [highRank, lowRank];
}
