// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// double(); //함수에 위에 이렇게 올려버리면 아직 함수조건이 없기 때문에 오류가난다.

// const double = function () {
//   console.log(a * 2);
// }

// const a = 7

// double(); //하지만 선언식으로 하는 경우에는 오류가 나지 않고 읽혀지는 현상
//           //이를 호이스팅이라고 한다.

// function double() {
//   console.log(a * 2);
// }

