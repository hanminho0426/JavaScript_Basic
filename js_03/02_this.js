// this
// 일반(Normal) 함수는 **호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 **함수 범위에서 this 정의!

const git = {
  name: 'Git',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}
git.normal() //()소괄호로 닫는 것을 "호출"이라고 한다.
git.arrow() //객체(git)를 가지고 와 실행하는 것을 "메소드"라고 한다.

const amy = {
  name: 'Amy',
  normal: git.normal,
  arrow: git.arrow
}

amy.normal()
amy.arrow()