// 대충 만든 자판
function solution(keymap, targets) {
  const answer = [];

  // targets 배열 순회 -> 문자열에 대한 키를 누르는 횟수 계산
  for (const target of targets) {
    let totalPressCount = 0;

    // 문자열 순회 -> 누른 키를 찾고 누른 횟수 계산
    for (const char of target) {
      let found = false;

      // 배열 순회 -> 현재 문자 찾기
      for (const key of keymap) {
      }
    }
  }
}
