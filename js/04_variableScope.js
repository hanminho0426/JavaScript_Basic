// 변수 유효범위(Variable Scope)
// var, let, const

//var는 되도록 사용하지 않게 권장

// function scope() { //오류
//   console.log(a);
//   if (true) {
//     const a =123
//   }
// }

// function scope() { //오류
//   if (true) {
//     const a =123
//   }
//   console.log(a);
// }

// function scope() { //undefined
//   if (true) {
//     console.log(a);
//     const a =123
//   }
// }

// function scope() { //123 정상작동
//   if (true) {
//     const a =123
//     console.log(a);
//   }
// }

// scope();

//  블록레벨의 유효범위: 변수가 선언되어져 있는 범위의
//  {}"중괄호 부분"이 하나의 블록이고, 이 블록 안의 범위에만 
//  유효한 범위를 가지는 것을 말한다.
//  ***const와 let은 블록레벨의 범위를 가진다.


// function scope() { //undefined
//   console.log(a);
//   if (true) {
//     var a = 123
//   }
// }

// function scope() { //undefined
//   if (true) {
//     console.log(a);
//     var a = 123
//   }
// }

// function scope() { //123 정상작동
//   if (true) {
//     var a = 123
//     console.log(a);
//   }
// }

// function scope() { //123 정상작동
//   if (true) {
//     var a = 123
//   }
//   console.log(a);
// }

// scope();

//  함수레벨의 유효범위: var는 함수레벨의 {}"중괄호"까지의 큰 유효범위까지 가진다.
//  그렇기 때문에 변수가 의도하지 않은 범위에서 변수가 사용될 수 있고
//  그만큼 메모리를 차지하고 있기 때문에 개발자가 확인하지 못하는 메모리 누수로 발전할 수 있다.
//  때문에 일반적인 경우에는 되도록 const와 let을 사용하는 것이 관리하기에 효과적인다.

