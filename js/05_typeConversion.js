// 형변환(Type conversion)

// const a = 1
// const b = '1'


// console.log(a == b); //true 동등연산자를 쓰게되면 형 변환이 일어난다.
//                      //의도하지 않게 같은 값으로 인식할수 있기 때문에 되도록
//                      //동등연산자를 쓰지 않는 것이 좋다.                         
// console.log(a === b); //false 일치연산자는 일어나지 않는다.



// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, ''. null, undefined, 0, -0, NaN

// if (true) { //123
//   console.log(123);
// }

// if (false) { //아무것도 나타나지 않음
//   console.log(123);
// }

// if ('false') { //123 문자로 된 'false'는 true와 같은 값으로 형변환이 일어난다.
//   console.log(123);
// }

//NaN : 1+ undefined를 했을 때 NaN이 나온다 이는 어떠한 숫자 값에 숫자로 판단할 수 없는
//특정 값이 더 해지면, 숫자데이터이긴한데, 숫자 데이터가 아니라는 뜻으로 "Not a Numder"라고 한다. 