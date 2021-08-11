export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
//typeof와 다르게 object로 애매하게 나누어진 객체의 타입까지 나누어준다.