// 함수 복습

// function sum(x, y) { //인수의 값을 받아 줄 수 있는 함수 선언부에 선언된 값을 '매개변수' 
//   console.log(x + y);
// }

// sum(1, 3); // 함수에 들어가는 특정한 값 '인수'
// sum(4, 12);


// function sum(x, y) { 
//   return x + y //x와 y가 더 한 값이 return으로 반환되고 그 값이 함수 밖으로 내보내진다.
// }

// sum(1, 3); //return을 사용 할 경우 나타나지 않음

// const a = sum(1, 3);
// const b = sum(4, 12);

// console.log(a); //4
// console.log(b); //16
// console.log(a+b); //20

// console.log(sum(1, 3)); //4
// console.log(sum(4, 12)); //16
// console.log(sum(1, 3)+sum(4, 12)); //20


//*** 함수의 선언방식

// function sum(x, y) {  //함수의 이름을 지정하는 "선언방식" 기명함수
//   return x + y
// }
// sum(1,3);

//----------------------------------------------------------

// const sum = function(x, y) { //이름이 없는 함수를 변수에 담아 사용하는 "표현방식" 익명함수
//   return x + y
// }
// sum(1,3);


//return 키워드의 주의할 점

// function sum(x, y) {
//   return x + y //return 선언이 된 곳에서부터 종료된다.
//   console.log(X); //이 코드는 return뒤에 있기때문에 실행되지 않는다.
// }
// sum( 1,3);


//return키워드 뒤에 코드를 사용하려면?

// function sum(x, y) {
//   if(x < 5) { //조건을 만들어 해당될 때 위에 값으로 아닐 때 밑의 값이 사용되도록 만들면 된다.
//     return 
//   }
//   return x + y
// }
// console.log(sum( 1 ,3));


//