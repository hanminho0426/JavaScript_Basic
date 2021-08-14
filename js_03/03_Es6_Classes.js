//ES6 Classes

// const git = {
//   name: 'Git',
//   normal() { //:function 생략가능
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// git.normal()
// git.arrow()



// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }


// class User{
//   constructor(first, last) { //constructor:function 생략가능
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const git = new User('Git', 'Hub')
// const amy = new User('Amy', 'Clarke')
// const nao = new User('Nao', 'Smith')

// console.log(git)
// console.log(amy.getFullName())
// console.log(nao.getFullName())


//상속(확장)
// class Vehicle {
//   constructor(name,wheel){
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel) //super자리에서 Vehicle 실행된다
//   } 
// }
// const myBiycle = new Bicycle('삼천리',2)
// const daughterBicyle = new Bicycle('세발', 3)
// console.log(myBiycle)
// console.log(daughterBicyle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)

// console.log(myCar)
// console.log(daughtersCar)
// 다시보기