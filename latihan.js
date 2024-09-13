// for (var i = 0; i <= 100; i++) {
//     if (i % 3 == 0) {
//       console.log(i, "adalah angka yang habis dibagi 3");
//     } else if (i % 5 == 0) {
//       console.log(i, "adalah angka yang habis dibagi 5");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       console.log(i, "adalah angka yang habis dibagi 3 dan 5");
//     } else {
//       console.log(i);
//     }
//   }  

  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "adalah angka yang habis dibagi 3 dan 5");
    } else if (i % 5 == 0) {
      console.log(i, "adalah angka yang habis dibagi 5");
    } else if (i % 3 == 0) {
        console.log(i, "adalah angka yang habis dibagi 3");
    } else {
      console.log(i);
    }
  }  