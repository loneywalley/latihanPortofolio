// for (var i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, "adalah angka yang habis dibagi 3 dan 5");
//     } else if (i % 5 == 0) {
//       console.log(i, "adalah angka yang habis dibagi 5");
//     } else if (i % 3 == 0) {
//         console.log(i, "adalah angka yang habis dibagi 3");
//     } else {
//       console.log(i);
//     }
//   }  


//   for (var i = 1; i <= 100; i++) {
//         hitung(i);
//   }  
//   function hitung(a){
//     if (a % 3 == 0 && a % 5 == 0) {
//         console.log(i, "adalah angka yang habis dibagi 3 dan 5");
//     } else if (a % 5 == 0) {
//       console.log(i, "adalah angka yang habis dibagi 5");
//     } else if (a % 3 == 0) {
//         console.log(i, "adalah angka yang habis dibagi 3");
//     } else {
//       console.log(i);
//     }
//   }

function calculate(operations){
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    switch(operations){
    case '+':
        result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        break;
    case '/':
        if(num2 > 0){
            result = num1 / num2
        }
        else{
            result = "can not divide by 0"
        }
        break;
    case '%':
        result = num1 % num2
        break;
    default:
        break;
    }
    document.getElementById('result').textContent = "Result " + result
}

