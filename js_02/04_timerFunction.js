//타이머 함수
//setTimeout(함수, 시간): 일정 시간 후 함수 실행
//setInterval(함수, 시간): 시간 간격마다 함수 실행
//clearTimeout(): 설정된 Timeout 함수를 종료
//clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function() {
//   console.log('Git!');
// } ,3000) //1000ms는 1초

// setTimeout(() => { //화살표 함수
//   console.log('Git!');
// } ,3000) //1000ms는 1초

// const timer = setTimeout(() => {
//   console.log('Git!');
// },3000)

// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//   clearTimeout(timer)
// });

// const timer = setInterval(() => {
//   console.log('Git');
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })

