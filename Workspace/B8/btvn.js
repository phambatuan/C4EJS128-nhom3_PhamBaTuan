let a = parseInt(prompt("mời nhấp số thứ nhất: "));
const operator = prompt(`mời nhập phép tính: `);
let b = parseInt(prompt("mời nhấp số thứ hai: "));
let result;
if (a || b === true) {
  switch (operator) {
    case "+":
      result = a + b;
      console.log(`${a} ${operator} ${b} = ${result}`);
      break;
    case "-":
      result = a - b;
      console.log(`${a} ${operator} ${b} = ${result}`);
      break;
    case "*" || "x":
      result = a * b;
      console.log(`${a} ${operator} ${b} = ${result}`);
      break;
    case "/":
      if (a != 0) {
        parseFloat((result = a / b));
        console.log(`${a} ${`:`} ${b} = ${result}`);
      } else {
        console.log(
          `${a} ${operator} ${b} 0 không chia được cho bất kỳ số nào "`
        );
      }
      break;
  }
} else {
  console.log("bạn cần nhập số");
}

// the end HW1

let num = parseInt(prompt("số cần check là: "));
isPrime = true;
switch (num) {
  case (num ==1):
    console.log("1 không phải là số nguyên tố:");
    break;
  case (num ==2):
    console.log("2 là số nguyên tố:");
    break;
  case (num > 2 && num % 2 !=0):
    console.log(`${num}không là số nguyên tố`);
    break;

  default:
    break;
}
// if(num == 1){
//   console.log("1 không phải là số nguyên tố:");
//   if(num==2){
//     console.log(isPrime);
//     if(num>2 && num%2==0){
//       console.log(!isPrime);
//     }
//   }
// }
// if (num == 1) {
//   if ((num == 2)) 
//   {
//     console.log(isPrime);
//     if (num % 2 == 0) {
//       console.log(!isPrime);
//     }
//   }
//   console.log("1 không phải là số nguyên tố:");
// }

//   case (num > 1):
//       if(num % 1== 0 & num% num == 0){
//       console.log("số bạn nhập là số nguyên tố");
//       }
//       else{
//         console.log("số bạn nhập k phải là số nguyên tố");
//       };
//     break;
//     case (num = 1):
//     console.log("1 chắc chắn là số nguyên tố");
//     break;
//   default:
//     console.log("bạn cần nhập số nguyên dương");
//     break;
