// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
//     console.log(passed);
//     // Change code above this line
//     return passed;
//   }
//   isAdult(20);
 




// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password === SAVED_PASSWORD;
//     console.log(isMatch);
//     // Change code above this line
//     return isMatch;
//   }
//   isValidPassword("mangodab3st");
//   isValidPassword("kiwirul3z");
//   isValidPassword("jqueryismyjam");





// function checkAge(age) {
//     let message;
  
//     if (age >= 18) { // Change this line

//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
//     console.log(message);
//     return message;
//   }
//   checkAge(20);
//   checkAge(8);
//   checkAge(14);
//   checkAge(38);



// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (available < ordered){
//     message = "Order is processed, our manager will contact you."
//   }
//   else{
//     message = "Not enough goods in stock!"
//   }
//     // Change code above this line
//     console.log(message);
//     return message;
//   }
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150);
//   checkStorage(150, 180);




// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrise = pricePerDroid * orderedQuantity;
//   if (totalPrise > customerCredits){
//     message = 'Insufficient funds!' ;
//   }
//   else{
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrise} credits left`;
//   }
//     // Change code above this line
//     console.log(message)
//     return message;
//   }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);


// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
//   console.log(message);
//     return message;
//   }
//   checkPassword("mangohackzor");
//   checkPassword(null);
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");





// Change code below this line
// const pricePerDroid = 800;
// const orderedQauntity = 6;
// const deliveryFree = 50;
// let totalPrice = pricePerDroid * orderedQauntity + deliveryFree;
// console.log(totalPrice);
// let message = `You order droids worth ${totalPrice} credits. Delivery ( ${deliveryFree} credits) is included in total price.`;
// console.log(message);


// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   console.log(message);
//   return message;
// };

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);
// console.log(makeMessage);


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered === 0){
//   message = "There are no products in the order!";
// }
//   else if(available < ordered){
//         message="Your order is too large, there are not enough items in stock!";
//   }
//   else{
//           message="The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//     console.log(message)
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// function isNumberInRange(start, end, number) {
//   let isInRange; // Change this line
//   if (number > start && number < end) {
//     isInRange = true;
//   }
//   else {
//     isInRange = false;
//   }
//   console.log(isInRange)
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);


// const isInRange = number > start && number < end;


// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   if (isInRange === true) {
//    console.log(true)
//   }
//   else {
//     console.log(false)
//   }
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);




// function checkStorage(available, ordered) {
//   let message;
//   // if (ordered > available) {
//   //   message = "n";
//   // } else {
//   //   message = "t";
//   // }
//   const message = ordered >= available ? "n" : "t";
//   console.log(message)
//   return message;
// }

// checkStorage(3, 1);
// checkStorage(5, 5);
// checkStorage(5, 6);




// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
  
//   } else if(totalSpent >= 20000 && totalSpent < 50000){
//   discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000 && totalSpent < 20000){
// discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount)
//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// let balance = 1000;
// const paymant = 2000;

// let message;
// console.log(`Общая стоимость заказа ${paymant} кредитов. Проверяем кол-во доступных средств на счету.`);

// if (paymant <= balance) {
//     message = 'Все хорошо, снимаем деньги... Спасибо за покупку!';
//   message = `На счету осталось ${balance - paymant} кредитов`;
// }
// else {
//   message = `На счету недостаточно средств для проведения операции!`;
// }
// console.log(message);
// console.log('Операция завершена');


// const totalSpent = 55550;
// let paymant = 500;
// let discount;

// if (totalSpent >= 100 && totalSpent <= 1000) {
//   discount = 2;
// }
// else if (totalSpent  > 1000 && totalSpent <= 5000) {
//   discount = 5;
// }
// else if (totalSpent > 5000) {
//   discount = 10;
// }
// else {
//   discount = 0;
// }

// console.log(`Оформляем заказ на сумму ${paymant} со скидкой ${discount}%.`);

// for ( i = 1; i < 10; i += 1){
//     console.log(i);
// }