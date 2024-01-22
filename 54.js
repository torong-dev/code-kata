// 2016년
// 1월 1일은 금요일
// 1. 월, 일 배열
// 2. 날짜 계산
// 3. 누적된 날짜
// 4. 요일 계산

const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getDayOfYear(m, d) {
  let ds = 0;
  for (let i = 0; i < m - 1; i++) {
    ds += daysInMonth[i];
  }
  ds += d;
  return ds;
}

function solution(a, b) {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const totalDays = getDayOfYear(a, b);
  const dayOfWeek = (totalDays + 4) % 7;
  return daysOfWeek[dayOfWeek];
}

// 다른 풀이
function solution(a, b) {
  let tempDate = new Date(2016, a - 1, b); // 날짜 객체 생성

  return tempDate.toString().slice(0, 3).toUpperCase(); // 날짜를 문자열로 변환하고 요일과 대문자로 반환
}
