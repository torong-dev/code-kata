// 덧칠하기
function solution(n, m, section) {
  let answer = 0;
  let position = 1; // 롤러 위치

  for (const target of section) {
    const distance = target - position - 1; // 목표 위치까지의 거리

    if (distance > 0) {
      answer += Math.ceil(distance / m); // 롤러 사용 횟수
    }

    position = target;
  }

  return answer;
}
