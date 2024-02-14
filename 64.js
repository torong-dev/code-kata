// 체육복
function solution(n, lost, reserve) {
  // 여벌 체육복이 있는 학생이 도난당한 학생에게 빌려줌
  let gymSuitLost = lost.filter((student) => !reserve.includes(student));
  let gymSuitReserve = reserve.filter((student) => !lost.includes(student));

  // 정렬
  gymSuitLost.sort((a, b) => a - b);
  gymSuitReserve.sor((a, b) => a - b);

  // 여별 체육복이 있는 학생이 왼쪽 또는 오른쪽에 있는 도난당한 학생에게 빌려줌
  // 왼쪽 학생이 도난당했다면 체육복을 빌려주고 gymSuitLost 배열에서 제거
  if (gymSuitLost.includes(leftStudent)) {
    gymSuitLost = gymSuitLost.filter((student) => student !== leftStudent);
  }

  return answer;
}
