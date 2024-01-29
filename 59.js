// 덧칠하기

function solution(n, m, sections) {
  let answer = 0;
  let painted = 0; // 페인트로 칠한 부분의 끝 지점

  {
    /* 배열 순회 
    sectionis의 각 요소에 대해 반복
    현재 요소를 section에 할당하여 코드 블록 내에서 사용 가능
  */
  }
  for (let section of sections) {
    // 페인트칠한 부분의 끝 지점이 다시 칠해야 하는 구역보다 작으면
    if (painted < section) {
      answer++; // 증가
      painted = section + m - 1;
    }
  }

  return answer;
}
