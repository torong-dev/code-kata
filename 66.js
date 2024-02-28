// 대충 만든 자판
function solution(keymap, targets) {
  let answer = [];

  // targets 배열을 순회
  targets.forEach((target) => {
    // 현재 문자열의 최소 인덱스 합을 저장할 변수
    let targetSum = 0;

    // 현재 문자열을 한 글자씩 비교
    for (let i = 0; i < target.length; i++) {
      // 최소 인덱스 값을 무한대로 초기화
      let minIndex = Infinity;

      // keymap 배열을 순회하면서 현재 글자의 인덱스 찾기
      keymap.forEach((row) => {
        let columnIndex = row.indexOf(target[i]);

        // 현재 글자가 keymap에 있으면 최소값 갱신
        if (columnIndex > -1) {
          minIndex = Math.min(minIndex, columnIndex + 1);
        }
      });

      // 각 문자에 대한 최소 인덱스의 합을 누적
      targetSum += minIndex;
    }

    // 각 문자열에 대한 최소 인덱스의 합을 결과 배열에 저장
    answer.push(targetSum);
  });

  // Infinity를 -1로 변경
  answer = answer.map((sum) => (sum === Infinity ? -1 : sum));
  return answer;
}
