//산술 연산자(arithmetic operator)

// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);
// console.log(5 % 2);

//할당 연산자(assignment operator)

//const a = 2 // "="이 할당연산자 const는 재할당불가
// let a = 2
// a = a + 1 //아래와 동일
// a += 1 //더하기
// a -= 1 //빼기
// a *= 2 //곱하기
// a /= 2 //나누기
// console.log(a);


// //비교 연산자(comparison operator)
// const a = 1
// const b = 1

// console.log (a === b); //true 일치연산자:왼쪽과 오른쪽이 같은지 비교하는 연산자

// const c = 3

// console.log(a === c); //false 

// function isEqual(x, y){ //매개변수
//   return x === y //반환함수
// }

// console.log(isEqual(1,1));
// console.log(isEqual(2,'2'));

// console.log(a !== c); //true
// console.log(a !== b); //false

// console.log(a < b); //false
// console.log(a < c); //true
// console.log(a > c); //false

// console.log(a >= b); //true
// console.log(a <= b); //true

//논리 연산자(logical operator)

// const a = 1 === 1
// const b = 'AB' === 'AB'
// const c = true
// const d = false
// const e = 'AB' === 'AC'

// console.log(a); //true
// console.log(b); //true
// console.log(c); //true

// //and 연산자 그리고
// console.log(a && b && c); //true
// console.log('&&: ', a && b && c); // &&:  true
// console.log('&&: ', a && b && d); // &&:  false 하나라도 false가 나오면 false

// //or 연산자 또는
// console.log('||: ', a || b || c); //|| :  true
// console.log('||: ', a || b || d); //|| :  true true라는 값이 하나라도 있으면 true
// console.log('||: ', d || e ); //||:  false

// //부정(Not) 연산자
// console.log('!: ', !d) //!:  false  반대값 반환, d가 false이기 때문에 true반환

// 삼항연산자(ternary operator)

// const a = 1 < 2 //true

// if (a) {
//   console.log('참');
// } else {
//   console.log('거짓');
// }

// console.log(a ? '참' : '거짓');
