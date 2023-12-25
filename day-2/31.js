// 수박?
function solution(n) {
  return "수박".repeat(Math.ceil(n / 2)).slice(0, n);
}

// 다른 풀이
function waterMelon(n) {
  const answer =
    "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";
  return answer.substring(0, n);
}
