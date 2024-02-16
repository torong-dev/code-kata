// 체육복
function solution(n, lost, reserve) {
  // 여벌 체육복이 있는 학생이 도난당한 학생에게 빌려줌
  let gymSuitLost = lost.filter((student) => !reserve.includes(student));
  let gymSuitReserve = reserve.filter((student) => !lost.includes(student));

  // 정렬
  gymSuitLost.sort((a, b) => a - b);
  gymSuitReserve.sort((a, b) => a - b);

  // 여벌 체육복이 있는 학생이 왼쪽 또는 오른쪽에 있는 도난당한 학생에게 빌려줌
  for (let i = 0; i < gymSuitReserve.length; i++) {
    const leftStudent = gymSuitLost.find(
      (student) => student === gymSuitReserve[i] - 1
    );
    const rightStudent = gymSuitLost.find(
      (student) => student === gymSuitReserve[i] + 1
    );

    // 왼쪽 학생이 도난당했다면 체육복을 빌려주고 gymSuitLost 배열에서 제거
    if (leftStudent !== undefined) {
      gymSuitLost = gymSuitLost.filter((student) => student !== leftStudent);
    }
    // 오른쪽 학생이 도난당했다면 체육복을 빌려주고 gymSuitLost 배열에서 제거
    else if (rightStudent !== undefined) {
      gymSuitLost = gymSuitLost.filter((student) => student !== rightStudent);
    }
  }

  // 남은 학생 수
  const answer = n - gymSuitLost.length;
  return answer;
}
