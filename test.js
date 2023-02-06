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


// let totalSpent = 2000;
// let paymant = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent <= 1000) {
//   console.log('bronze');
//   discount = 0.02;
// }
// else if (totalSpent > 1000 && totalSpent < 5000) {
//     console.log('gold');
//   discount = 0.05;
// }
// else if (totalSpent >= 5000) {
//     console.log('platinum');
//   discount = 0.1;
// }
// else {
//     console.log('else');

    
// }
// paymant -= paymant * discount
// console.log(`Оформляем заказ на сумму ${paymant} со скидкой ${discount * 100}%.`);

// totalSpent += paymant;
// console.log(`Общая сумма потраченного в магазине ${totalSpent}`);

// for ( i = 1; i < 10; i += 1){
//     console.log(i);
// }
// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }
// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);
// const target = 100;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");


// Используем цикл для вывода только нечетных чисел. Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию.

// for (i = 0; i <= 10; i += 1){
//     if (i % 2 === 0) {
//         continue
//     }

//         console.log(i);
    
// }



// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//     console.log(message);
//   return message;
// }
// checkPassword("jqueryismyjam")
// checkPassword("angul4r1sl1f3")
// checkPassword("r3actsux")




// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "professional": // Change this line
//       price = 0; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 20; // Change this line
//       break;

//     case "starter": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//     console.log(price);
//   return price;
// }

// getSubscriptionPrice("professional")
// getSubscriptionPrice("organization")
// getSubscriptionPrice("starter")


// function getShippingCost(country) {
//     let message;
//     let price;
//   // Change code below this line
// switch( country){
//     case 'China':
//         price = 100;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//     case 'Chile':
//         price = 250;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//     case 'Australia':
//         price = 170;
//    message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//     case 'Jamaica':
//         price = 120;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   default:
//     message = `Sorry, there is no delivery to your country`;
// }
//   // Change code above this line
//     console.log(message);
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");


// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//     console.log(message);
//   return message;
// }
// getNameLength("Poly")
// getNameLength("Harambe")
// getNameLength("Billy")
// getNameLength("Joe")


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);




// function getSubstring(string, length) {
//   const substring = string.slice(0,   length); // Change this line
// console.log( substring);
//   return substring;
// }
// getSubstring("Hello world", 3)
// getSubstring("Hello world", 6)
// getSubstring("Hello world", 8)
// getSubstring("Hello world", 11)
// getSubstring("Hello world", 0)


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if (message.length > maxLength) {
//         result = `${message.slice(0, maxLength)}...`
//     }
//     else {
//         result = message;
//     }
//   /// Change code above this line
//     console.log(result);
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);


// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
//     console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("Hello world")
// normalizeInput("This ISN'T SpaM")
// normalizeInput("Big SALE")


// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//     console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor")
// checkForName("Egor Kolbasov", "egor")
// checkForName("Egor Kolbasov", "egOr")
// checkForName("Egor Kolbasov", "Zhenya")
// checkForName("Vadim Nekrasov", "Vadim")
// checkForName("Vadim Nekrasov", "vadim")
// checkForName("Vadim Nekrasov", "Dima")

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');
//     console.log(result);

//   // Change code above this line
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");