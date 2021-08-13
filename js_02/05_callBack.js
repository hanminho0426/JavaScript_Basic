// 콜백(Callback)
// 함수의 인수로 사용되는 함수


//setTimeout(함수, 시간)

// function timeout(cb) {
//   setTimeout(()=> {
//     console.log('Git!');
//     cb()
//   }, 3000);
// }

// timeout(()=> {
//   console.log('Done!')
// })

// 즉 인수로 사용되는 함수는 콜백이다.
// 콜백은 실행위치를 보장하는 용도로 많이 활용된다.