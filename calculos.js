function suma(num1, num2) {
  return num1 + num2;
}
console.log(suma(5, 10));

function division(num1, num2) {
  return num1 / num2;
}
console.log(division(10, 5));

function mayorNum(arr) {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
    }
    return mayor;
  }

const miArray = [1, 4, 8, 2, 5, 10, 3];
console.log(mayorNum(miArray));

console.log(5+10)
console.log(20/2)

console.log(20/0)

console.log(Math.max(2,8,9,7,5,6))