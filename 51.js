// 푸드 파이터 대회
// 1. 음식의 종류가 i일 때 먹는 순서 계산
// 2. 칼로리가 가장 작은 음식 찾기
// 3. 정렬

function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join("");
}

// 다른 풀이
function solution(food) {
  let player1 = [];
  let player2 = [];
  let answer = 0;
  for (let i = 1; i <= food.length; i++) {
    if (food[i] > 1) {
      answer = Math.floor(food[i] / 2);
      for (let j = 0; j < answer; j++) player1.push(i);
      for (let k = 0; k < answer; k++) player2.unshift(i);
    }
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join("");
}
