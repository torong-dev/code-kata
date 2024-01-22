// 문자열 다루기 기본
// 1. 문자열의 길이가 4 혹은 6이 아니면 false
// 2. 모두 숫자인지 확인
// 3. 두 조건을 만족하면 true
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      return false;
    }
  }

  return true;
}

// 다른 풀이 (삼항연산자)
function solution(s) {
  return s.length !== 4 && s.length !== 6
    ? false
    : Array.from(s).every((char) => !isNaN(parseInt(char)));
}

// 다른 풀이 (정규표현식)
function solution(s) {
  const regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
