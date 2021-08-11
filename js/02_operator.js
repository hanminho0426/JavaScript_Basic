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


//비교 연산자(comparison operator)
const a = 1
const b = 1

console.log (a === b); //true 일치연산자:왼쪽과 오른쪽이 같은지 비교하는 연산자

const c = 3

console.log(a === c); //false 

function isEqual(x, y){ //매개변수
  return x === y //반환함수
}

console.log(isEqual(1,1));
