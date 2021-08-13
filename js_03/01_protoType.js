//클래스

// const git = {
//   firstName: 'Hub', //property 객체/속성
//   lastName: 'Git',
//   getFullName: function() { // property 객체/속성 에 함수가 할당되어 있으면 "메소드"라고한다.
//     return `${this.firstName} ${this.lastName}`
//   } //이 모든 구성을 통틀어 "멤버"라고 한다.
// }
// console.log(git.getFullName());


// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName());


// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName());

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// //   인스턴스          생성자함수
// const git = new User('Git','Hub'); //생성자함수: 하나의 객체데이터가 생성됨
//                                    //생성자함수는 앞에 파스칼케이스 형식으로 만든다.   
// const amy = new User('Amy','Clarke'); //인스턴스: new키워드를 통해 생성된 결과를 반환해서 할당된 변수를 인스턴스라고 한다. 
// const nao = new User('Neo','Smith');

// console.log(git.getFullName())
// console.log(amy.getFullName())
// console.log(nao.getFullName())
