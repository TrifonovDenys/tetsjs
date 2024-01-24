// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
//     console.log(passed);
//     // Change code above this line
//     return passed;
//   }
//   isAdult(20);
// const isAdult = age => age >= 18;
//   console.log(isAdult(20));

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

// const massiv = ['1', '2', '3', '4','1'];

// for (const xyi of massiv) {
//   console.log(xyi);
// }

// function squareSum(numbers){

//   let sum = 0;
//   for (i = 0; i < numbers.length; i += 1){
//     sum += Math.pow(numbers[i], 2);
//   }
//   console.log(sum);

//  }

// squareSum([1, 2, 2])
// squareSum([0, 3, 4, 5])
// squareSum([])

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//     console.log(message)
//    return message;
//   }
// message = available > ordered  ? "The order is accepted, our manager will contact you":"Your order is too large, not enough goods in stock!";
//   console.log(message)
//   return message
// }
// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(70, 0)
// checkStorage(200, 20)
// checkStorage(200, 250)
// checkStorage(150, 0)

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// fruits[0];
// fruits[1];
// fruits[fruits.length - 1]
// console.log(fruits[fruits.length - 1]);

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);
// // Write your code under this line

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line
// console.log(fruitsArrayLength);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[lastElementIndex]

// console.log(lastElementIndex);
// console.log(lastElement);

// function getExtremeElements(array) {
//   const newarray = [array[0], array[array.length - 1]]
//   console.log(newarray);
//   return newarray;
// }
// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);
//   // Change code below this line
//   console.log(words);
//   // Change code above this line
//   return words;
// }
// splitMessage("Mango hurries to the train", " ")
// splitMessage("Mango", "")
// splitMessage("best_for_week", "_")

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let price = (message.split(' ').length * pricePerWord)

// return price
//    // Change code above this line

// }
// calculateEngravingPrice("JavaScript is in my blood", 10)
// calculateEngravingPrice("JavaScript is in my blood", 20)
// calculateEngravingPrice("Web-development is creative work", 40)
// calculateEngravingPrice("Web-development is creative work", 20)

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   console.log(string);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// makeStringFromArray(["M", "a", "n", "g", "o"], "")
// makeStringFromArray(["top", "picks", "for", "you"], "_")

// function slugify(title) {
//   let govno;
//   let slug;
//   slug = title.split(' ')
//   for (i = 0; i < slug.length; i += 1){
//     slug[i] = slug[i].toLowerCase()
//     govno = slug.join('-')
//   }
//   console.log(govno);
//   return govno
// }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// function slugify(title) {
//   let slug;
//   slug = title.split(' ')
//   for (i = 0; i < slug.length; i += 1){
//     slug[i] = slug[i].toLowerCase()
//   }
//   slug = slug.join('-')
//   console.log(slug);
//   return slug
// }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase()
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');
//   slug = slug.replace(' ', '-');

//   console.log(slug);
//   return slug
// }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// function slugify(title) {
// let slug
//   // let slug = [title.toLowerCase()]
//   slug = title.split(' ')
//   // slug = slug.toLowerCase()
//   slug = slug.join('-')
//   // slug = title.split(' ')
//   // for (i = 0; i < slug.length; i += 1){
//   //   slug[i] = slug[i].toLowerCase()
//   // }
//   // slug = slug.join('-')
//   console.log(slug);
//   return slug
// }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// function slugify(title) {
//   let slug;
//   slug = title.split(' ').join('-').toLowerCase()
//   // slug = slug.join('-')
//   // slug = slug.toLowerCase()
//   console.log(slug);
//   return slug
// }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let concatArray = firstArray.concat(secondArray);
//   concatArray = concatArray.slice(0, maxLength)

//   console.log(concatArray);
//   return concatArray
//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// function calculateTotal(number) {
//   let sum = 0;
//   if(number > 0){
//   for (i = 1; i <= number; i += 1){
//     sum += i;
//     }
//     console.log(sum);
//     return number
//   } else if (number < 0) {
//   for (i = -1; i >= number; i -= 1){
//     sum -= i;
//     }
//     console.log(-sum);
//     return number
//   } else {
//     console.log(sum);
//     return number
//   }
//     // return number * (number + 1)/2;
// }
// calculateTotal(1)
// calculateTotal(3)
// calculateTotal(7)
// calculateTotal(18)
// calculateTotal(24)
// calculateTotal(-2)
// calculateTotal(-20)
// calculateTotal(0)

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1){
//   // console.log(order[i]);
//   total += order[i]
// }
//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([13, 12, 123, 123])

// function findLongestWord(string) {
//   let arrayWord = string.split(' ')
//   let longesrWord = arrayWord.sort((a, b) => b.length - a.length)
//   console.log(longesrWord[0]);
//   return longesrWord[0]
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be withqqqweqweqweqwe you")

// function findLongestWord(string) {
//   let words = string.split(' ');
//   let longestWord = words[0];
//   console.log(longestWord.length);
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
// 			longestWord = words[i];
// 		}
//   }
// 	return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be withqqqweqweqweqwe you")

// function countBy(x, n) {
//   let z = [];
//   for (i = x; i <= n * x; i += x){
//     z.push(i)
//   }
//   console.log(z);
//   return z;
// }
// countBy(1, 10)
// countBy(2,5)

// function filterArray(numbers, value) {
//    // Change code below this line
//   let newArr = [];
// for (i=0; i< numbers.length; i+=1){
//   if(numbers[i] >= value){
//     newArr.push(numbers[i])
//   }
//   }
//   console.log(newArr);
// return newArr

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)

// function maxOfArr(numbers) {
//   let max = numbers[0];
//   for (i = 0; i < numbers.length; i += 1){
//   if(max < numbers[i]){
//     max = numbers[i]
//     }
//   }
//   console.log(max);
//   return max
// }
// maxOfArr([1, 2, 3, 4, 5])
// maxOfArr([12, 24, 8, 41, 76])
// maxOfArr([ 6,
// 7,
// 8,
// 9,
// 10,
// 11,
// 12,
// 13,
// 14,
// 15,
// 16,
// 17,
// 18,
// 19,
// 20,
// 21,
// 22,
// 23,
// 24,
// 25,
// 26,
// 27,
// 28,
// 29,
// 30,
// 31,
// 32,
// 33,
// 34,
// 35,
// 36,
// 37,
// 38,
// 39,
// 40,
// 41,
// 42,
// 43,
// 44,
// 45, 100 ])

// function minOfArr(numbers) {
//   let min = numbers[0];
//   for (i = 0; i < numbers.length; i += 1){
//   if(min > numbers[i]){
//     min = numbers[i]
//     }
//   }
//   console.log(min);
//   return min
// }
// minOfArr([1, 2, 3, 4, 5])
// minOfArr([12, 24, 8, 41, 76])
// minOfArr([ 6,
// 7,
// 8,
// 9,
// 10,
// 11,
// 12,
// 13,
// 14,
// 15,
// 16,
// 17,
// 18,
// 19,
// 20,
// 21,
// 22,
// 23,
// 24,
// 25,
// 26,
// 27,
// 28,
// 29,
// 30,
// 31,
// 32,
// 33,
// 34,
// 35,
// 36,
// 37,
// 38,
// 39,
// 40,
// 41,
// 42,
// 43,
// 44,
//   45, -3])

// function loop(x) {
//   if (x >= 100000000)
//     // "x >= 10" is the exit condition
//     return;
//   // do stuff

//   loop(x + 1); // the recursive call
// }
// loop(0);

// function includes(array, value) {
//   for (i = 0; i < array.length; i += 1){
//      if(value === array[i]){
//        return true
//      }
//    }
//   return false
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > threshold) {
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
//   }
// }

// var time = performance.now();
// // некий кодconst
// const numbers = [ 6,
// 7,
// 8,
// 9,
// 10,
// 11,
// 12,
// 13,
// 14,
// 15,
// 16,
// 17,
// 18,
// 19,
// 20,
// 21,
// 22,
// 23,
// 24,
// 25,
// 26,
// 27,
// 28,
// 29,
// 30,
// 31,
// 32,
// 33,
// 34,
// 35,
// 36,
// 37,
// 38,
// 39,
// 40,
// 41,
// 42,
// 43,
// 44,
//   45, -3]
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// time = performance.now() - time;
// console.log('Время выполнения = ', time);

// var time = performance.now();
// // некий код
// const numbers = [ 6,
// 7,
// 8,
// 9,
// 10,
// 11,
// 12,
// 13,
// 14,
// 15,
// 16,
// 17,
// 18,
// 19,
// 20,
// 21,
// 22,
// 23,
// 24,
// 25,
// 26,
// 27,
// 28,
// 29,
// 30,
// 31,
// 32,
// 33,
// 34,
// 35,
// 36,
// 37,
// 38,
// 39,
// 40,
// 41,
// 42,
// 43,
// 44,
//   45, -3]
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > threshold) {
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
//   }
// }
// time = performance.now() - time;
// console.log('Время выполнения = ', time);

// function XO(str) {
//   let sl = str.toLowerCase()
//   keek = []
//   lool = []
//   for (let i of sl) {
//     if (i === 'x') {
//       keek.push(i.includes('x'))

//     }
//     else if (i === 'o') {
//       lool.push(i.includes('o'))

//     }
//     else { continue }

//   }
//   // console.log(keek);
//   // console.log(lool);
//   let n
//   n = (keek.length === lool.length ? true : false)
//   console.log(n);
//   return (keek.length === lool.length ? true : false)

// }
// // XO('Xoxoxoox')
// // XO("Xxxm")
// XO('Xoxomxoo')

// function nbYear(p0, percent, aug, p) {
//   let per = percent / 100
//   let y = 0
//   let x = []
//   for ( i = p0; i < p; i += y ){
//     y = Math.floor(i * per + aug)
//     p0 += y
//     console.log(p0);
//     x.push(Math.floor(p0))
//   }
//   console.log(x.length);
//   return x.length
// }
// nbYear(1500, 5, 100, 5000)
// nbYear(1500000, 2.5, 10000, 2000000)
// nbYear(1500000, 0, 10000, 2000000)
// nbYear(1500000, 0, 10000, 1999999)
// nbYear(1000, 2, 50, 1214)

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let sum = 0
// for (const i of numbers) {
//   if (i % 2 === 0) {
//     console.log(i);
//     sum += i
//   }

// }
//  console.log(sum);

// const logins = ['111', '222', '333', '444']
// const loginToFind = '333'
// let message = ''
// for (i = 0; i < logins.length; i += 1){
//   if (logins[i] === loginToFind) {
//     console.log(logins[i]);

//   }
// }

// for (const i of logins) {
//   if (loginToFind !== i) {
//     continue
//   }
//   console.log('find login', i);
// }

// for (const i of logins) {
//   if (i === loginToFind){
//     message = 'you find login';
//     break
//   }
// message = 'you not find login';
// }
// console.log(message);

// console.log(logins.includes(loginToFind) ? 'you find login' : 'you not find login');

// const numbers = [51, 18, 13, 24, 7, 85, 19];
//  let min = numbers[0]
// for (const i of numbers) {
//    if (min > i) {
//     min = i
//   }

//  }
// console.log(min);

// const fruits = ['1', '2', '3', '4']
// let str = ''
// // for (const i of fruits) {
// //   str +=  `, ${i}`
// // }
// // console.log(str.slice(2));

// console.log(fruits.join(', '));

// const str = 'JavaScript'
// let newmas = []
// for (const i of str) {
//   if (i === i.toLowerCase()){
//     newmas.push(i.toUpperCase())
//   }
// else{newmas.push(i.toLowerCase())}

//  }

//   console.log(newmas);
//   let newstr = newmas.join('')
//   console.log(newstr);

// const letters = str.split('')
// let invers = ''

// for (const letter of letters) {

// invers += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()

// }
// console.log(invers);

// const title = 'Q 2 3 4 5'
// let url = title.toLowerCase().split(' ').join('-')
// console.log(url);

// function findMin(numbers) {
//   let min = numbers[0]
//   for (const i of numbers) {
//     if (min > i) {
//       min = i
//     }
//   }
//   console.log(min);
//   return min
// }
// findMin( [3, 4, 5, 6, 7, 1, 8])

// function changeReg(str) {
//   let changeRegStr = '';
//   for (const i of str) {
//     changeRegStr += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
//   }
//   console.log(changeRegStr);
//   return changeRegStr
// }
// changeReg('StRqQQQq')

// const slugufy = function (string) {
//  let slug = string.toLowerCase().split(' ').join('-')
//   console.log(slug);
//   return slug
// }
// slugufy('This is Slug LINK')

// function createArray(...argum) {
//   let total = 0
//   for (const i of argum) {
//     total += i
//   }
//   console.log(total);
//   return total
// }
// createArray(1, 2, 3, 4, 5, 6, 78, 9, 0, 5, 23);
// createArray(1, 2, 3, 4, 5);
// createArray(1, 2, 3);

// function filterNumbers(array, ...arg) {
//   let sameNumber = []

//   for (const i of array) {

//     if (arg.includes(i)) {
//       sameNumber.push(i)
//     }

//   }
//   console.log(sameNumber);
// }
// filterNumbers([1, 2, 3, 4, 5], 10, 11, 2, 2,  3, 8);
// filterNumbers([10,15,25,30], 23,30 ,18, 15);

// function getSum(a, b) {
//   let total = 0;

//   if (b < a) {
//     for (i = b; i <= a; i += 1){
//     total += i
//   }
//   }
//   for (i = a; i <= b; i += 1){
//     total += i
//   }

//   return total
// }

//   getSum(0, -1)
//   getSum(0, 1)
//   getSum(2, 2)

// function fakeBin(x){
//   binArray = [];
//   for (let number of x.split('')){
//     if (number <= 5){
//       number = 0;
//       binArray.push(number)
//       // console.log(binArray);
//     }
//     else{
//       number = 1
//       binArray.push(number)
//     }
//     // console.log(binArray);
//   }
//   console.log(binArray.join(''));
//   return binArray.join('')
// }
// fakeBin('45385593107843568')



// function likes(names) {
//   if ( names.length === 1){
//    return `${names[0]} likes this`
//   }
//   if(names.length === 2){
//     return `${names[0]} and ${names[1]} likes this`
//   }if (names.length === 3){
//     return `${names[0]}, ${names[1]} and ${names[2]} likes this`
//   }
//   if  (names.length >= 4){
//     return `${names[0]}, ${names[1]} and ${names.length - 2} likes this`
//   }
//   return `no one likes this`
// }
// likes(['Alex', 'Jacob', 'Mark', 'Max']


// function filter_list(l) {
//   const newarr = []
//   for(let i of l ){
//     if (typeof(i) != 'string'){
//       newarr.push(i)
//     }
//   }
//   return newarr
// }

// filter_list([1,2,'aasf','1','123',123])


// function getGrade (s1, s2, s3) {
//   // Code here
//   const avg = (s1 + s2 + s3) / 3
//   console.log(avg)
//   if (avg >= 90 && avg <= 100) {
//     console.log('A');
//     return 'A'
//   }
//   if (avg >= 80 && avg < 90) {
//     console.log('B');
//     return 'B'
//   }
//   if (avg >= 70 && avg < 80) {
//     console.log('C');
//     return 'C'
//   }
//   if (avg >= 60 && avg < 70) {
//     console.log('C');
//     return 'D'
//   }
//   if (avg >= 0 && avg < 60) {
//     console.log('F');
//     return 'F'
//   }
  
// }

// getGrade(100, 85, 96)

// getGrade(84, 79, 85)

// getGrade(75,70,79)

// function bmi(weight, height) {
//   const bmiIndex = weight / (height * height)
// // console.log(bmi);
//   console.log(bmiIndex);


//   if (bmiIndex <= 18.5) {
//     return "Underweight"
//   }
//   if (bmiIndex <= 25.0) {
//     return "Normal"
//   }
//   if (bmiIndex <= 30.0) {
//     return "Overweight"
//   }
//   if (bmiIndex > 30) {
//     return "Obese"
//   }
  
  
// }

// bmi(50, 1.8)

// const reverseSeq = n => {
//   const newarr = []
//   for (i = 1; i <= n; i += 1){
//     newarr.push(i)
//   }
//   console.log(newarr.reverse());
//   return newarr.reverse();
// }
// console.log(reverseSeq(5))

// https://rule34video.com/videos/3094667/free-for-all-2-anime-hmv-pmv/

// https://rule34video.com/videos/3098521/buttons-d-art-pmv/
// https://rule34video.com/videos/3089873/hmv-i-just-wanna/
// https://rule34video.com/search/D--art/


// function isValidWalk(walk) {
//   let startPlace = 0
//   for ( i = 0; i < walk.length; i += 1){
//     if(walk.length < 10 || walk.length > 10 ){
//       return false
//     }
//     if(walk[i] === 'n'){
//       startPlace += 1
//     }
//     if(walk[i] === 's'){
//       startPlace -= 1
//     }
//     if(walk[i] === 'e'){
//       startPlace += 2
//     }
//     if(walk[i] === 'w'){
//       startPlace -= 2
//     }
//   }
//   console.log(startPlace !== 0 ? false : true);
//   return startPlace !== 0 ?  false : true
// }
// isValidWalk(['n','s','n','s','n','s','n','s','n','s'])


// function findNextSquare(sq) {
//   let sqrtNumber = Math.sqrt(sq)
//   console.log(sqrtNumber);
//   if (Number.isInteger(sqrtNumber)){
//     return Math.pow(sqrtNumber + 1, 2);
//   }
//   return -1
// }
// console.log(findNextSquare(121));
// console.log(findNextSquare(155));
// console.log(findNextSquare(342786627));
// console.log(findNextSquare(567535329));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (let product of products){
  
    
//       const keys = Object.keys(product)
//       for (let key of keys) {
//         if (product[key] === productName) {
//           console.log(product.price);
//         }
//         // if (product[key] !== productName) {
//         //   console.log(null);
//         // }
//       }
  
//   // return null
// }
  
//   // Change code above this line
// }
// getProductPrice("Radar")
// getProductPrice("Grip")
// getProductPrice("Scanner")


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const val = []

//   for (let product of products) {
//     const keys = Object.keys(product)
//     const values = Object.values(product)
//     for(let key of keys){
//     if (propName === key) {
//       val.push(product[key])
//       }
//     }
//   }

// console.log(val);
//   // Change code above this line
// }
// getAllPropValues("name")
// getAllPropValues("quantity")
// getAllPropValues("price")
// getAllPropValues("category")


// const books =[
// {
//   title: {t1: 'title'},
//   author: 'Bernard',
//   genres: ['history', 'new'],
// },
// {
//   title: {t1: 'title'},
//   author: 'Bernard',
//   genres: ['history', 'new'],
// },
// {
//   title: {t1: 'title'},
//   author: 'Bernard',
//   genres: ['history', 'new'],
// }
// ]

// // console.log(book.title);
// // const { title, author, genres } = book
// // console.log(title);

// for (const { title: {t1}, author, genres,  } of books) {
//   console.log(title);
//  console.log(t1);
// }

// Change code below this line
// function findMatches(firstm, ...secondm) {
//   const matches = []; // Don't change this line
//   console.log(firstm);
//   console.log(secondm);
//   // Change code above this line
//   for (let arg of firstm) {
//     if (secondm.includes(arg)) {
//       matches.push(arg)
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//    return this.books.splice(this.books.indexOf(oldName),1, newName);


//     // Change code above this line
//   },
// };


// bookShelf.updateBook("Haze", "Dungeon chronicles")


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getpotions(potion) {
//     const potion = this.potions
//     console.log(potion);
//   return potion
// },
//   // Change code above this line
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

  
//   // getPotions() {
//   //   return this.potions;
//   // },



//   // addPotion(newPotion) {
//   //   for (let potion of atTheOldToad.potions) {
//   //     if (potion.name === newPotion.name) {
//   //       // console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//   //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   //     }
//   //   }
//   //   // console.log(atTheOldToad.potions);
//   //  return this.potions.push(newPotion);
//   // },



//   removePotion(potionName) {
    
//     // const [potion] = atTheOldToad.potions
//     // const { name, cost } = potions
//     for (let potion of atTheOldToad.potions) {
//       // console.log(potion.name === potionName);
//       let potionIndex = this.potions.indexOf(potion);
//       console.log(potionIndex);
//       if (potion.name === potionName) {
//         //  console.log(this.potions.splice((potionIndex),1));
        
//         // return `Potion ${potionName} is not in inventory!`;
//         console.log(this.potions.splice((potionIndex), 1));
//       }
//       if (potion.name !== potionName) {
//         potionIndex = -1
//         if(potionIndex === -1){
//         return `Potion ${potionName} is not in inventory!`;}
//       }
    
    
//     }
    
//     console.log(atTheOldToad.potions);
//   },




//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// // const [potion] = atTheOldToad.potions

// // atTheOldToad.getPotions()
// // atTheOldToad.addPotion({ name: "Stone ski", price: 520 })
// // atTheOldToad.removePotion("Dragon breath")
// console.log('and');
// // atTheOldToad.removePotion("Speed potion")
// atTheOldToad.removePotion("Speed ")


// const atTheOldToad = {
// potions: [
// { name: "Speed potion", price: 460 },
// { name: "Dragon breath", price: 780 },
// { name: "Stone skin", price: 520 },
// ],
// // Change code below this line
// getPotions() {
// return this.potions;
// },
// addPotion(newPotion) {
//   for(const potion of this.potions){
//  if(potion.name === newPotion.name){
//    return `Error! Potion ${newPotion.name} is already in your inventory!`
//  }
    
//   }
//   this.potions.push(newPotion)
// },

// removePotion(potionName) {


// },

// updatePotionName(oldName, newName) {
// for(const potion of this.potions){
//   if (potion.name === oldName){
//     potion.name = newName
//   }
//   console.log(this.potions);
// }

// }
// }
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));\


// function deleteNth(arr, n) {
//   const count = {};
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (count[item] === undefined) {
//       console.log(count[item]);
//       count[item] = 1;
//       result.push(item);
//     } else if (count[item] < n) {
//       count[item]++;
//       result.push(item);
//     }
//   }
//   return result;
// }

// deleteNth([20,37,20,21], 1)

// function strCount(str, letter) {
//   console.log(str.split(letter));
//   return str.split(letter).length-1
// }
// strCount("Hello", 'l');

// const a = function (name, number) {
//   console.log(name,':', number );
//   b(25)

// }

// const b = function (age) {
//     return age
// }

// a('Denys', b)

// function processCall(recipient, avail, notAvail) {
//   const isRecipientAvailable = Math.random() > 0.5;
// console.log(isRecipientAvailable);
//   if (!isRecipientAvailable) {
//     notAvail(recipient)
//     return
//   }
//   avail(recipient)
// }

// function callbackAvail(name) {
//   console.log(`${name} true Avail`)
// }
// function calbackNotAvail(name) {
//   console.log(`${name} false NotAvail`)
// }

// processCall('Mark', callbackAvail, calbackNotAvail )

//   function repeat(n, action) {
//     for (i = 0; i < n; i += 1){
//       action(i)
//     }
//   }

//   function printValue(value) {
//     console.log(value);
//   }
//   function printText(value) {
//     console.log(`${value} n times`);
//   }


//   repeat(5, printValue)
//   repeat(5, printText)

// const numbers = [5, 10, 15, 20, 25];
  
// for (i = 0; i < numbers.length; i += 1){
//   console.log(i, numbers[i]);
// }

// numbers.forEach(  function (number, index, array) {
//   console.log(number, index, array);
// })

// function first(y) {
//   console.log(1);
//   y()
// }

// function second(a, b) {
//   console.log(a*b);
// }

// first(function () { second(3,3) })

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   console.log(pizzaName);
// console.log(callback())
//   return callback();
// }
// makeMessage("Royal Grand", makePizza)

// function problem(x){
//   //your code here
//   console.log(typeof x === 'string');
//   if (typeof x === 'string') {
//     return 'Error'
//   }
//   return x*50+6
// }
// problem("hello")
// problem(1)

// const number = busStops => {
//   // Good Luck!
//   let curentPeople = 0
//   for (i = 0; i < busStops.length; i += 1){
//     curentPeople += busStops[i][0] - busStops[i][1]
//   }
//   return curentPeople
// }
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])

// function expandedForm(num) {
//   const str = num.toString()
//   let newstr = ''
//   for (i = 0; i < str.length; i += 1){
//     // console.log(str[i]);
//     console.log(Number(str[i]) + '0'.repeat(str.length - (i+1)))


//     if (Number(str[i]) > 0) {
//       newstr += String(Number(str[i]) + '0'.repeat(str.length - (i+1))) + ' + '
//     }


//   }
//   console.log(newstr.slice(0, newstr.length-3));
//   return newstr.slice(0, newstr.length-3)
// }

// expandedForm(70304)
//   '70000 + 300 + 4'


// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const newarr = []
//  usersArray = users.filter(user => {
//   //  console.log(user.eyeColor);
//    if(color === user.eyeColor){
//     newarr.push(user.name)
//    }
//  })
//   console.log(newarr);
// return newarr
// };

// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const newarr= []
//  usersArray = users.filter(user => {
//    if(color === user.eyeColor){
//    newarr.push(user)
//    }
//  })
//   return newarr
//     console.log(newarr)
// };

// const getUsersWithFriend = (users, friendName) => {
//   const a = users.filter(user => user.friends.includes(friendName))
//   console.log(a);
// };

// const getFriends = (users) => {
//   // const a = users.flatMap((user, index, array) => array.indexOf(user) === index)
//   const a = users.flatMap(user => user.friends)
//   // console.log(a);
//   // return users.flatMap(user => user.frends)
//   return a.flatMap((friend, index, array) => { if (array.indexOf(friend) === index){friend.frends}})
// };


// const calculateTotalBalance = users => {
//    return users.reduce((previosValue, user) => {
//      return previosValue + user.balance
//    },0)
// };


// getFriends ([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ])


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(user => user.rating >= MIN_BOOK_RATING).map(user => user.author).sort((a, b) => a.localeCompare(b))
// console.log(names);



// Change code below this line
// const getSortedFriends = users => {
//   console.log([...users].flatMap((element, index, arr) => {
  
//     if (arr.indexOf(element) === index) {
//       return element.friends}
//   }).sort((a, b) => a.localeCompare(b)));
// };



// getSortedFriends([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ])


// function findOdd(A) {
//   const b = []
//   // A.forEach((number, index, array) => b.push(array.indexOf(number)))
//   //  console.log(b);
//   // b.find(number => )


//   // const b = A.filter((number, index, array) => array.indexOf(number) === index)
//   // const b = A.some(number => A.indexOf(number) === A.lastIndexOf(number))
//   console.log(b);
//   // console.log(A.join('').split('1'))
//   // return A.find(number => A.join(' ').split(number).length % 2 === 0 || A.join(' ').split(number).length === 2)
//   A.reduce((pv, el, i, arr) => {
//     console.log(el.length);
//   },0)
// }

// findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])


// function calculateYears(principal, interest, tax, desired) {
//   let i
//   if(principal >= desired){
//     return 0
//   }
//   for (i = 0; principal < desired; i++)
//   {
//     principal += (principal * interest) - ((principal * interest) * tax)
//   }
//   console.log(i);
//   return i
// }
// calculateYears(1000, 0.05, 0.18, 1100)


// const a = (a, b) => a + b

// console.log(a(1,4));


// const cards = [
//   { table: 'Apples', price: 100, quantity: 2 },
//   { table: 'Bananas', price: 120, quantity: 3 },
//   { table: 'Lemons', price: 70, quantity: 4}
// ]
// const totalAmount = cards.reduce((pv, {price, quantity }) => pv + quantity * price, 0)
// console.log(totalAmount);


// class Storage {
//   constructor(items){
//    this.items = items
//   }
//   getItems(){
//     return this.items
//   }
//   addItem(newItems){
//   this.items.push(newItems)
//     return this.items
//   }
//   removeItem(itemToRemove){
//     const removedArr = this.items.map((item, index, arr) => {
//       if(item === itemToRemove){
// this.items.splice(index, 1)}
//     } )
//   }
// }


// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue){
//     this.value = initialValue
//   }
//   getValue(){
//     return this.value
//   }
//   padEnd(str){
//    return this.value = str + this.value
    
//   }
//   padStart(str){
//     return this.value += str
//   }
//   padBoth(str) {
//     return this.value = str + this.value + str
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand(){
//   return this.#brand
// }
//   changeBrand(newBrand){
//     this.#brand = newBrand
// }
//   // Change code above this line
// }


// function removeUrlAnchor(url){
//   const str = url.split('#')
//   return str[0]
// }
// removeUrlAnchor('www.codewars.com#about')


// const uniqueInOrder = iterable => {
//   // const arr = iterable.split('')
//   for (i = 0; i < iterable.length; i = + 1){
//     arr.push(iterable[i])
//   }
//   const retard = []
//   const newarr = arr.reduce((pv, leter) => {
//     if (pv != leter) {
//       retard.push(leter)
//     }
//     return pv = leter
//   }, 0)
//   return retard
// }

// const uniqueInOrder = iterable => {
//   const arr = []
//   for (i = 0; i < iterable.length; i += 1){
//     arr.push(iterable[i])
//   }
//   const retard = []
//   const newarr = arr.reduce((pv, leter) => {
//     if (pv != leter) {
//       retard.push(leter)
//     }
//     return pv = leter
//   }, 0)
//   return retard
// }

// uniqueInOrder('AAAABBBCCDAABBB')

// const arr = [1, 2, 3]
// const newarr = [...arr]
// arr.push(2)
// console.log(arr);
// console.log(newarr);


// function queueTime(customers, n) {
//   console.log(customers)
//   const sumTime = customers.reduce((pv, time) =>
//   {
//     return pv + time
//   }, 0)
//   if (customers.length === 0) {
//     return 0
//   }
//   if(customers.length <= n){
//     return Math.max(...customers)
//   }
//   else {
//     let arrche = []
//     for (i = 0; i < n; i += 1){
//       arrche.push(customers.shift())
      
//     }
//     let res = 0
//     let curMi = 0
//    while( customers.length > 0){
     
     
//      for (i = 0; i < arrche.length; i++){
//        arrche[i] -= curMi
//        if (arrche[i] === 0) {
//          arrche[i] = customers.shift()
//        }
       
//      }
// curMi = Math.min(...arrche)
//        res += curMi
     
//     }
//     return res
//   }
  
// }
// function queueTime(customers, registers) {
//   let arr = [];

//   for(let i = 0; i < registers; i++)
//     arr[i] = 0;

//   for(let i = 0; i < customers.length; i++) {
//     arr[0] += customers[i];
//     arr.sort((a, b) => a - b);
//   }

//   return arr[arr.length - 1];
// }
// queueTime([ 2, 2, 3, 3, 4, 4 ], 2)


// complete the function
// const solution = string => {
//   return string.split('').map(element => {
//     if(element === element.toUpperCase()){
//       element = ' ' + element
//     }
//     return element
//   }).join('')
// }


// function twoSum(numbers, target) {
//   for(i = 0; i < numbers.length; i += 1){
//     for (j = 1; j < numbers.length; j += 1){
//       if (numbers[i] + numbers[j] === target) {
//         console.log([numbers.indexOf(numbers[i]), numbers.indexOf(numbers[j])]);
//         return [numbers.indexOf(numbers[i]), numbers.indexOf(numbers[j])]
//       }
//     }
//   }
// }
// twoSum([1234,5678,9012], 14690)

// const User = function ({ email, password } = {}) {
//   this.email = email
//   this.password = password
// }
// User.prototype.changeEmail = function (newEmail){
//   this.email = newEmail
// }

// const mango = new User({ email: 'mango@gmail.com', password: 1111, })
// console.log(mango);

// const counter = () => {
//   let cont = 0
//   const subcount = () => {
//     console.log(cont);
//     return cont += 1
//   }
//   console.log(cont);
//   return subcount
// }

// const increse = counter()
// const c1 = increse()
// const c2 = increse()
// const c3 = increse()
// console.log(c1, c2, c3);

// function longest(s1, s2) {
// console.log([...new Set(s1)]);
// //   const array = (s1 + s2)
// //   console.log(array);
// //   const sortedArr = [...new Set(array)].sort()
// //   console.log(sortedArr);
// //   return sortedArr.join('')
// }

// longest("aretheyhere", "yestheyarehere")
// longest(["aretheyhere", "yestheyarehere"], [1, 1, 1])


// const lessons = [
//   { couurse: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], fname: 'kek1', },
//   { couurse: [11, 21, [31, 41, [51, 61, [71, 81, [91, 101]]]]], fname: 'kek2', },
//   { couurse: [12, 22, [32, 42, [52, 62, [72, 82, [92, 102]]]]], fn2ame: 'kek3', },
// ]

// const flaterMap = lessons.flatMap(({ couurse }) => couurse.flat(Infinity))
// const flaterMap1 = lessons.map(({ couurse }) => couurse.flat(Infinity))
// console.log(flaterMap);
// console.log(flaterMap1);



// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // const usersLikes = tweets.reduce((pv, { likes }) => pv + likes ,0)

// const usersLikes = twe => twe.reduce((pv, { likes }) => pv + likes ,0)
// console.log('likes:', usersLikes(tweets));

// const allTags = tweets => tweets.reduce((pv, { tags }) => {
//   pv.push(...tags)
//   return pv
// }, [])
// console.log(allTags(tweets));

// const countTags = tweets => tweets.reduce((pv, el) => {
//   if (!pv.hasOwnProperty(el)) {
//     pv[el] = 0
//   }
//   pv[el] += 1
//   return pv
// }, {})
// console.log(countTags(allTags(tweets)));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]



// Change code below this line
// const getTotalBalanceByGender = (users, sex) => users.filter(({gender}) => gender === sex).reduce((pv, {balance}) => pv + balance ,0)
// // Change code above this line
// console.log(getTotalBalanceByGender([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ], "male"));



// const us = {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
// }
// const su = Object.create(us)
// su.rule = '0'
// // console.log(su);
// for (key in su) {
//   console.log(su.hasOwnProperty(key));
//   if (su.hasOwnProperty(key)) {
//     console.log(su[key]);
//   }
// }

// console.log(Object.keys(us));
// console.log(Object.values(us));
// console.log(Object.entries(us));
// console.log(Object.keys(su));


// const books = [
//   {
//     title: 'Pt',
//     author: '123',
//     rating: 12,
//   },
//   {
//     title: 'YUF',
//     author: '234',
//     rating: 2,
//   },
//   {
//     title: 'SDsa',
//     author: '345',
//     rating: 3,
//   }
// ]

// const newObj = {}
// const keys = Object.keys(books[0])
// // for (const key of keys) {
// //   newObj[key] = []
// // }
// // for (const key in newObj) {
// //   for (let book of books) {
// //     newObj[key].push(book[key])
// //   }
// // }


// for (const key of keys) {
//   newObj[key] = books.map(book => book[key])
// }
// console.log(newObj);


// function isPrime(num) {
//   if(num > 0){
//     for( i = 1; i < num; i += 1 ){
//     if(num % i !== 0){
//       return false
//     }
//       if(num % i === 0){
//         return false
//       }
//       else return true
//   }
//   }
//   return false
// }

// const newA = (...first) => {
//   console.log(first);
//   first.length = 0
//   console.log(first);
  
// }

// newA(1,2,3,4,5,6,7,8)
    

// function persistence(num) {
//   let strNum = String(num);
//   const arrNum = []
//   let count = 0
//   do{
//     const arrNum = strNum.split('')
//     if(arrNum.length === 1) return count
//     const num = arrNum.reduce((pv, el) => pv * el)
//     strNum = String(num)
//     count++
//   }
//   while (strNum.length > 1)
// return count
// }

// persistence(39)

// const a = (q, w, e) => eval(`console.log('я тут'); ${w} ${q} ${e}`)

// console.log(a('+', 4, 5));

// const count = s => [...s].reduce((pv, el) => {
//   if(!pv.hasOwnProperty(el)){
//     pv[el] = 0
//   }
//   pv[el] += 1
//   return pv
// }, {})

// console.log(count('a'));


// const countPositivesSumNegatives = i => {
//   if(i !== null){
// const countPositiveNumber = i.filter(el => el > 0).length
// const negativeNumber = i.filter(el => el < 0).reduce((pv, el) => pv += el)
// return [countPositiveNumber, negativeNumber]}
// }

// console.log(countPositivesSumNegatives([]));

// function rowWeights(array){
//   return array.length === 1 ? [array[0], 0] : [array.reduce((pv, el, index) => {
//     if (index % 2 === 0) {
//       pv += el
//     }
//     return pv
//   }, 0),
//     array.reduce((pv, el, index) => {
//       if (index % 2 !== 0) {
//         pv+=el
//       }
//       return pv
//   }, 0) ]
// }

// console.log(rowWeights([50,60,70,80]));


// function getLength(arr){
//   //return length of arr
//   return arr.length
// }
// function getFirst(arr){
//   //return the first element of arr
//   return arr[0]
// }
// function getLast(arr){
//   //return the last element of arr
//   return arr[arr.length -1]
// }
// function pushElement(arr){
//   var el = 1;
//   //push el to arr
//   arr.push(el)
//   return arr
// }
// function popElement(arr){
//   //pop an element from arr
//   arr.pop()
//   return arr.length
// }

// console.log(pushElement([1, 2, 3]));
// console.log(popElement([1,2,3]));


// const name = prompt('Как тебя зовут')
// alert(`Тебя зовут ${name}`)
// const arr = [1, 2, 3, 4, 5, 6, 677]

// const a = arr.reduce((pv, el) => pv + el, 0)
// const b = Math.max(...arr)
// console.log(b);


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


// message = login == 'Сотрудник' ? 'Привет' :
//   login == 'Директор' ? 'Здравствуйте' :
//     login == '' ? 'Нет логина' :
//       '';

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   console.log(Date.parse(currentDate) );
//   console.log(Date.parse(expirationDate));
// }
// checkCoupon('123','123','5 September, 2014','Oct 1, 2014')


// function multiTable(number) {
//   let string = ''
//   for (i = 1; i <= 10; i++) {
//     string += `${i} * ${number} = ${i * number}\n`
//   }

  
//   console.log(string.slice(0, -1));
//   return string.slice(0, -1)

// }

// multiTable(5)


// function alphabetPosition(text) {
//   alph = ' abcdefghijklmnopqrstuvwxyz'
//   const a = text.split('').reduce((pv, el) => {
//     if (alph.includes(el.toLowerCase())) {
//       console.log(pv + alph.indexOf(el.toLowerCase()));
//       pv + alph.indexOf(el.toLowerCase())
//     }
//     return pv
//   }, [])
//   return a
// }

// alphabetPosition("The sunset sets at twelve o' clock.")

// function digPow(n, p){
//   const strn = String(n)
//   const d = strn.split('').reduce((pv, el) => {
//     pv += (Number(el) ** p)
//     p++
//     return pv
//   }, 0)
//   return d / n < 0 ? -1 : d / n
// }

// digPow(46288, 3)


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// const ask = (question, yes, no) => confirm(question) ? yes() : no()

// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );


// let a = 5 
// console.log(!a);


// const toCsvText = (array) => array.join("/n")

// toCsvText([
//   [ 0, 1, 2, 3, 4 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
// ] )


// const factorial = (n) => {
//   let res = 1
//   if (n < 0 || n > 12) {
//     throw new RangeError("Параметр должен быть между " + MIN + " и " + MAX);
//   }
//     for(i=1; i<=n; i+=1){
//       res *= i
//     }
    
//     return BigInt(res)
// }
// console.log(factorial(55));

// const students = [{name: "nic", age: 12, sity: 'Kyiv'},{name: "qwe", age: 22, sity: 'Kyiv'},{name: "nxcv", age: 13, sity: 'Kyiv'}]

// const findMin = (arr) => {
//   return arr.reduce((min, current) => (current.age < min.age ? current : min), arr[0]);
// };

// const sortedStudents = [];
// while (students.length > 0) {
//   const minStudent = findMin(students);
//   sortedStudents.push(minStudent);
//   students.splice(students.indexOf(minStudent), 1);
// }
// const diamond = (n) => {
//   let str = ''
//   if(n % 2 === 0 || n <= 0) null
//   for (i = 1; i <= n; i++){
//     if (i % 2 !== 0) {
//       str += ' '.repeat(((n - 1 ) / 2) - (i - 1) / 2) + `${"*".repeat(i)}\n`
//     }  
//   }
//   for (j = n - 2; j > 0; j--){
//     if (j % 2 !== 0) {
//       str += ' '.repeat(((n - 1 ) / 2) - (j - 1) / 2) + `${"*".repeat(j)}\n`
//     }  
//   }
//   return str
// }


// console.log(diamond(1));

// const diamondNum = (n) => {
//   let str = ''
//   if(n % 2 === 0 || n <= 0) null
  
//   for (let i = 0; i < n; i++){
//     let rep = Math.abs((n - 2*i - 1)/2)
//     str += ' '.repeat(rep) 
//     str += `${'*'.repeat(rep)}\n` 

//   }
//   return str
// }

// console.log(diamondNum(5));


// const diamond = (n) => {
//   let str = ''
//   if(n % 2 === 0 || n <= 0) null
//   for (i = 1; i <= n; i++){
//     if (i % 2 !== 0) {
//       str += ' '.repeat(((n - 1 ) / 2) - (i - 1) / 2) + `${"*".repeat(i)}\n`
//     }
//   }
//   for (j = n ; j > 0; j--){
//     if (j % 2 !== 0) {
//       str += ' '.repeat(((n - 1 ) / 2) - (j - 1) / 2) + `${"*".repeat(j)}\n`
//     }
//   }
//   return str
// }

// console.log(diamond(11));

// function sum (numbers) {

//   let total = 0
//     for(const number of numbers){
//       total +=number
//     }
//   return total
// };

// function descendingOrder(n){
//   const array = []
//   const numbers = n.toString().split('');
//   for(const number of numbers){
//     array.push(Number(number));
//   }
//   let newarr = array.sort((a, b)=> b-a);
//   const m = newarr.join('')

//   return Number(m)
// }

// descendingOrder(123456789)
// descendingOrder(145263)
// descendingOrder(0)

// function getISSLocation() {
//   fetch('https://api.wheretheiss.at/v1/satellites/25544')
//     .then(response => response.json())
//     .then(data => {
//       const latitude = data.latitude.toFixed(2);
//       const longitude = data.longitude.toFixed(2);
//       const timestamp = new Date(data.timestamp * 1000).toLocaleString();
//       console.log(`The ISS is currently at (${latitude}, ${longitude}) as of ${timestamp}`);
//     })
//     .catch(error => console.error('Error fetching ISS location:', error));
// }

// setInterval(getISSLocation, 5000); // Обновление каждые 5 секунд

// function DNAStrand(dna){
//   let DNArev = ''
//   for (let i of dna){
//     if(i === 'A'){
//       DNArev += 'T'
//     }
//     if (i === 'T'){
//       DNArev += 'A'
//     }
//     if(i === 'G'){
//       DNArev += 'C'
//     }
//   if (i === 'C'){
//       DNArev += 'G'
//     }

// switch(i){
//     case 'A':
//     DNArev += 'T'
//     break

//     case 'T':
//     DNArev += 'A'
//     break

//     case 'G':
//     DNArev += 'C'
//     break

//     case 'C':
//     DNArev += 'G'
//     break

//     default:
//     console.log("Invalid subscription type");
// }
//   }
//   console.log(DNArev);
//   return DNArev
// }
// DNAStrand("AAAA")
// DNAStrand("ATTGC")

// function rowSumOddNumbers(n) {
//     console.log(n);
//     let sum = 0
//     let firstNumArr = (n * n) - n + 1
//     console.log(firstNumArr);
//     for(i = 0; i <= n; i += 1){
//         sum += firstNumArr
//     }
//     console.log(sum - 1);
//     return sum - 1
// }
// rowSumOddNumbers(5)

// function sumOfOddNumbersInNthRow(n) {
//     let firstNumber = 2 * (n - 1) + 1; // First odd number in the nth row
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//       sum += firstNumber + (2 * i); // Add each odd number in the row
//     }
//     console.log(sum);
//     return sum;
//   }
//   sumOfOddNumbersInNthRow(3)

// function rowSumOddNumbers(n) {
//     let sum = 0
//     for (i = 1 ; i <= n; i += 1){
//         sum += Math.pow(i , 3)
//     }
//     return sum
// }
// rowSumOddNumbers(5)

// function sortArray(array) {
//     const newarr = [];
//     const mass = [...array]
//     // console.log(mass);
//      for ( let i of mass){
//         if ( i % 2 !== 0){
//             newarr.push(i)
//             newarr.sort()
//         }
//         else{newarr.push(i)
//         }
//      }
// console.log(newarr);
//   }
//   sortArray([5, 3, 2, 8, 1, 4])
// //   sortArray([5, 3, 1, 8, 0])

// function countPositivesSumNegatives(input) {
//     let result = 0
//     const mass = []
//     for(i = 0; i < input.length ; i += 1){
//       if (input[i] > 0){
//         mass.push(input[i])
//       }
//       else {
//         result += input[i]
//       }
//     }
//     const fin = [mass.length, result]
//     return fin
//   }

//   countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

// function findShort(s){
//  const m = s.split(' ')
//    m.sort((a, b) => a.length - b.length)
//    return m[0]
//   }
//   findShort("Let's travel abroad shall we")
//   findShort("turns out random test cases are easier than writing out basic ones")
//   findShort("bitcoin take over the world maybe who knows perhaps")

// function findShort(n){
//   const arr = []
//   const m = n * (n + 1) / 2
// for( i = 1; i<=n; i+=1){
//   arr.push(i)
// }
// console.log(arr);
// }
// findShort(1000000)

// var number=function(array){
//   const arr = [...array]
//   const newarr = []
//   for(let i = 0; i < arr.length; i+=1){
//     newarr.push(`${i + 1}: ${arr[i]}`)
//   }
//   console.log(newarr);
// }
// number(["a", "b", "c"])

// function getDivisorsCnt(n){
//   let sumDivisors = []
//   for(i = 1; i<=n; i+=1){
//     if(n % i === 0){
//       sumDivisors.push(i)
//     }
//   }
//   console.log(sumDivisors.length);
//   return sumDivisors.length
// }
// getDivisorsCnt(10)

// function removeEveryOther(arr){
//   const newarr = []
//   if(arr.length >= 2){
//     for(i = 0; i < arr.length; i += 1){
//       if(i % 2 === 0){
//         newarr.push(arr[i])
//       }
//     }
//     console.log(newarr);
//     return newarr
//   }
//   if (arr.length < 2){
//     console.log(arr);
//     return arr
//   }

// }
// // removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// // removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
// removeEveryOther([[1, 2]])

// function correct(string)
// {
// 	let str = string.split('')
//   const newarr = []
//   for( let i of str){
//     console.log(i);
//     if( i ==='5'){
//       i = 'S'
//       newarr.push(i)
//     }
//     else if( i === '1'){
//       i = 'I'
//       newarr.push(i)
//     }
//     else if( i ==='0'){
//       i = 'O'
//       newarr.push(i)
//     }
//     else{
//       newarr.push(i)
//     }
//   }
//   console.log(newarr);
//   return newarr.join('')
// }
// correct("501D0N")

// function stray(numbers) {
//   let firstNum = numbers[0]
//   let lastNum = numbers[numbers.length - 1]
//   for(let i = 0 ; i < numbers.length; i += 1){
//     if(firstNum == numbers[i]){
//       return  numbers[i]
//     }
//     if(firstNum !== numbers[1] && firstNum !== numbers[2] ){
//       return  numbers[i]
//     }
//     if(lastNum !== numbers[i]){
//       return lastNum
//     }

//   }

//   console.log(numbers.sort((a, b) => a - b));
//   return numbers[0] !== numbers[1] ? numbers[0] : numbers[numbers.length - 1]

// }
// console.log(stray([1,3,1]));
// console.log(stray([17, 17, 18, 17, 17, 17, 17]));

// function squareDigits(num){
// let str = `${num}`
// const strSplit = str.split('')
// let newstr = ''
// for( let i of strSplit){
//   newstr += Math.pow(Number(i), 2)
// }
// return Number(newstr);
// }
// squareDigits(3212)

// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a,b) => a - b)
//   return numbers[0] + numbers[1]
// }
// sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])

// function toAlternatingCase(line) {
//   // Define your method here :)
//   const arr = []
//   console.log(arr);
//   for(let i of line.split('')){
//     i === i.toLowerCase() ? arr.push(i.toUpperCase()) : arr.push(i.toLowerCase() )
//   }
//   console.log(arr);
//   return arr.join('')
// }
// toAlternatingCase("HELLO WORLD")

// function switchItUp (n) {
// return [1,2,3,4,5,6,7,8,9,11,12,31,14,324,3453,5345,345,35,34,53,5,345,345,345,345,345,34,534,5,345,34,5,345,34,5,34534,5,35,3,45,35,34,534,5,345,34,534,534,5,345,34,5][n]
// }
// console.log(switchItUp (15));

// function removeSmallest(numbers) {
//     const newarr = []
//     for(i = 0; i < numbers.length; i += 1){
//       if (i !== numbers.indexOf(Math.min(...numbers))){
//         newarr.push(numbers[i])
//       }
//     }
//     return newarr;
//   }
// //   removeSmallest([1, 2, 3, 4, 5])
//   removeSmallest([1, 2, 3, 4, 1, 5])

// function nbDig(n, d) {
//     const arr = []
//     let total = 0
//     for( i = 0; i <= n; i += 1){
//         let n = i * i
//         if(n.toString().includes(d)){
//             arr.push(n)
//         }
//     }
//     for(const number of arr.join('').split('')){
//         if(Number(number) === d){
//             total += 1
//         }
//     }
// return total;
// }
// nbDig(5750, 0)

// function get(array){
//     console.log(array.splice(1, array.length - 2));
//     console.log(array);
//     return array
//     // const b = []
//     // b.push(array[0], array[array.length - 1])
//     // console.log(b);
//     // return b
// }
// get([1,2,3,4,5,6])

// function finalGrade (exam, projects) {
//     if (exam > 90 || projects > 10){
//         return 100
//     }
//     if (exam > 75 && projects >= 5){
//         return 90
//     }
//     if (exam > 50 && projects >= 2){
//         return 75
//     }
//     return 0 // final grade
//   }

// function repeatStr (n, s) {
//     console.log(s.repeat(n));
//     return s.repeat(n);
//   }
//   repeatStr(3, "*")

// function isPalindrome(x) {
//     const y = x.toLowerCase()
//     console.log(y);
//     let xe = ''
//     for(i = y.length - 1; i >= 0; i -= 1){
//        xe += y[i]
//     }
//     return y === xe ? true : false
//   }
//   isPalindrome("Abba")

// var isSquare = function(n){
//     const ns = Math.sqrt(n)
//         return Math.floor(ns) === ns ? true : false

//    }
//    isSquare(-1)
//    isSquare(0)
//    isSquare(33)

// function solve(arr){
//     const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     let count = 0
//     const newarr = []
//     for(const word of arr){
//         let wordl = word.toLowerCase()
//         for(i = 0; i < wordl.length; i += 1){
//             if(wordl[i] === alphabet[i]){
//                count += 1
//             }

//         }
//         newarr.push(count)
//         count = 0
//     }
//     return newarr

//   }
//   solve(["abode","ABc","xyzD"])

// function duplicateEncode(word){
//     let encword = ''
//     const wordl = word.toLowerCase()
//     for(let l of wordl){
//         if(wordl.split(l).length-1 > 1){
//             l = ')'
//         }
//         else{
//             l = '('
//         }
//         encword += l
//     }
// return encword
// }

// function getCount(str) {
//     const arrstr = str.split('')
//     let count = 0;
//     for(i=0; i<arrstr.length; i += 1){
// if(arrstr[i] === 'a'){
//    count += 1
// }
//  else if(arrstr[i] === 'e'){
//     count += 1
//  }
//  else if(arrstr[i] === 'i'){
//     count += 1
//  }
//  else if(arrstr[i] === 'o'){
//     count += 1
//  }
//  else if(arrstr[i] === 'u'){
//     count += 1
//  }
//        if(arrstr[i] === 'a'|| arrstr[i] === 'e'|| arrstr[i] === 'i'|| arrstr[i] === 'o'|| arrstr[i] === 'u'){
//           count += 1
//        }
//   }
//   console.log(count);
//   return count;
// }
// getCount("abracadabra")\

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess();
//     }
//     onError(pizzaName);
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   console.log(`Error! ${error}`);
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//   function changeEven(numbers, value) {
//   // Change code below this line
//   const newarr = []
//   numbers.forEach(number =>{
//     number % 2 === 0 ? newarr.push(number + value) : newarr.push(number)
//   })
//   return newarr
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10)

// Change code below this line
// const getUserNames = users => {
//   const userName = users.map(user => `${user.name}, ${user.email}, ${user.gender}, ${user.age}`)

// console.log(userName);
// }
//   // Change code above this line

//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const newarr = []
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => {if(array.indexOf(genres) === index){
//   newarr.push(genres)
// }
//   }
// );
// console.log(newarr);
// const alphabet = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 23,
//   x: 24,
//   y: 25,
//   z: 26,
// }

// function high(x){
//   const arr = x.split(' ')
//   const a = []
//   for(const mass of arr){
//     a.push(mass.split(''))
//   }
//   const arrn =[]
// for(const m of a){
//   const nnnn = m.reduce((pv, leter) =>{
//     leter = alphabet[leter]
//     return pv += leter
//   }, 0)
//   arrn.push(nnnn)

// }
// console.log(arr[4]);
//  return arr[arrn.indexOf(Math.max(...arrn))]
// }

// high('man i need a taxi up to ubud')

// const numbers = (y) =>{
//   a = y.reduce((pv, number) => {
//    return pv += number
//   }, 0)
//   console.log(a);
// }
// numbers([1,2,3,4,5])

// const quarterOf = month => {
//   if(month <= 3){
//     return 1
//   }
//   if(month <= 6 && month >= 3){
//     return 2
//   }
//   if(month <= 9 && month >= 6){
//     return 3
//   }
//   if(month <= 12 && month >= 9){
//     return 4
//   }
// }
// quarterOf(3)

// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {

//        return arr.push(i)

//     }
// }

// function arrayDiff(a, b) {
//   const newarr = a.filter(element => !b.includes(element))
//   return newarr
// }
// arrayDiff([1,2,2], [1])

// function minMax(arr){
//   const newarr = arr.sort((a, b) => a - b)
//   return [newarr[0], newarr[newarr.length-1]]; // fix me!
// }
// minMax([1, 2, 3, 4, 5])

// function getDivisorsCnt(n){
//   let count = 0
//   for(i = 0; i<=n ; i+=1){
//     if(n%2 ===0){
//       count++
//     }
//   }
//   return count
// }
// getDivisorsCnt(10)

// function bouncingBall(h,  bounce,  window) {
//   if(bounce <= 0 || bounce >= 1 && window >= h){
//     return -1
//   }
//  let temp
//   let i = 0

//   do{
//     h = h * bounce
//     i++
//     console.log(h);
//   }
//   while(h > window)

// return i *2 -1
//   console.log(i);
// }
// bouncingBall(30.0, 0.66, 1.5)

// const sortArray = array => {
//     const oddArr = array.filter(number => number % 2 !== 0).sort((a, b) => a - b)
//     console.log(oddArr);
//     console.log(array.map(number => number % 2 === 0 ? number : oddArr.shift()));
//     return array.map(number => number % 2 === 0 ? number : oddArr.shift())
// }
// sortArray([5, 3, 2, 8, 1, 4])

// const sortArray = array => {
//   console.log(array.shift());
//   console.log(array.push());
//   console.log(array.shift());
//   console.log(array.push());
//   console.log(array.shift());
//   console.log(array.push());
//   console.log(array.shift());
//   console.log(array.push());
// }
// sortArray([5, 3, 2, 8, 1, 4])

// function digitize(n) {
//   const newstr = `${n}`
//   const newarr = []
// for( i=newstr.length - 1; i>=0; i-=1){
//   newarr.push(Number(newstr[i]))
// }
// return newarr
// }
// const digitize = n => n.toString().split('').map(number => Number(number)).reverse()

// digitize(35231)

// const arr = [[2, 2, 2],[4,2] ,[6,2]]
// const result = arr.flatMap(el => el + 2)
// console.log(result);

// function feast(beast, dish) {
//   console.log(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]);
// return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
//   }
//   feast("great blue heron", "garlic naan")

// const binaryArrayToNumber = arr => {
//   console.log(parseInt(arr.join(""), 2))
//   return Number(Number(arr.join("")).toString(10))
// };
// binaryArrayToNumber([0,1,1,0])

// function isPangram(string){
//   const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','t','s','t','u','v','w','x','y','z']
//   const newstrarr = string.toLowerCase().split('')
//   for(const l of alphabet){
//     if(!newstrarr.includes(l)){
//       return false
//     }
//   }
//         return true
// }
// isPangram("The quick brown fox jumps over the lazy dog.")

// const openOrSenior = data => data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open')
// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

// console.log([5,3,6,'1','qwe','2','2.1'].sort());

// const newColor = document.getAttribute('data-mec-cell')

// const Car = function ({brand, model, price} = {}) {
// //  const {brand, model, price} = config
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

// }

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello");
// }

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice
// }

// const myCar = new Car(
//   {
//     brand: "Audi",
//     model: "Q3",
//     price: 3500,
//   })
// console.log(myCar);

// myCar.sayHi()
// myCar.changePrice(1)
// console.log(myCar);

// const myCar2 = new Car(
//   {
//     brand: '{eq',
//     model: ';jgf',
//     price: 0
//   }
// )
// console.log(myCar2);

// const Object = 10
// console.log(Object);

// const stringToNumber = str => isNaN(str) ? parseFloat(str) : Number(str)
// console.log(stringToNumber('123.1sdfsa'));
// console.log(stringToNumber('123'));

// function hexToDec(hexString) {
//   return parseInt(hexString, 2)
// }
// console.log(hexToDec("1"));

// const sumMix = x => x.reduce((pv, el) => pv + +el)
// console.log(sumMix([9, 3, '7', '3']));

// const solution = nums => Array.isArray(nums) ? nums.sort((a, b) => a - b) : []
// console.log(solution(null));

// function capitalize(s) {
//   const sArr = s.split('')
//   const sOne = sArr.reduce((pv, el, index) => {
//     if (index % 2 === 0) {
//     return pv + el.toUpperCase()
//     }
//     return pv + el
//   }, '')
//   const sTwo = sArr.reduce((pv, el, index) => {
//     if (index % 2 !== 0) {
//     return pv + el.toUpperCase()
//     }
//     return pv + el
//   }, '')
//   return [sOne, sTwo]
// };
// console.log(capitalize("abcdef"));

// function dirReduc(arr) {
//   const str = arr.join('').toLowerCase()
//   console.log(str);
//   let l = str.replaceAll('northsouth', '')
//   l = str.replaceAll('southnorth', '')
//   l = str.replaceAll('eastwest', '')
//   l = str.replaceAll('westeast', '')
//   console.log(l);
//   // const a = arr.reduce((pv, el, index, array) => {

//   // },[])
// }

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

// const t = n => {
//   let b = 4
//   let res = 1
//   for (i = 1; i < n; i++){
//  console.log(res);
//     res += 1 / b
//     b += 3
//   }
//   return res.toFixed(2)
// }
// console.log(t(4));

// function roundToNext5(n){
//   for (i = 0; i < 5; i += 1){
//     if (n % 5 === 0) {
//       return n
//     }
//     n += 1
//   }
//   return n
// }

// const toBinary = n => Number(n.toString(2))

// console.log(toBinary(3));
// const sumOfMinimums = ([[...a], [...b], [...c]]) => Math.min(...a) + Math.min(...b) + Math.min(...c);

// sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const listEl = document.querySelector('.gallery')
// listEl.style.display = "flex"
// listEl.style.listStyle = 'none'

// const v = images.map(({url: src, alt}) => {
//   listEl.insertAdjacentHTML("beforeend", `<li><img src='${src}' alt='${alt}' width='100%'></li>`)
// })

// const wave = str => {
//   const b = []
//   for (i = 0; i < str.length; i += 1){
//     let a = str.split('')
//     a.splice(i, 1, a[i].toUpperCase())
//     b.push(a.join(''))
//   }
//   console.log(b);
//   return b
// }

// wave('hello')
// ['Two words', 'tWo words', 'twO words', 'two words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
// ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']

// function positiveSum(arr) {
//   let res=0;
//   for(i=0;i<arr.length; i += 1) {
// console.log(arr[i]);
//     if(arr[i]>0){
//      res +=arr[i];
//     }

//   }
//   console.log(res);
//   return res
// }

// positiveSum([1,2,3,4,5])

// function SeriesSum(n)
// {
//   let sum = 1
//   let a = 0
//   let m = 0
//  for(let i = 0; i < n; i++){
//    sum += m
//    m = 1/(4+a)
//    a += 3

//  }
//   console.log(sum);
//   return sum.toFixed(2)
// }

// SeriesSum(3)

// function tribonacci(s,n){

//   const newarrn = [...s] // тут хранится результирующий массив
//   const newarr3 = [...s] // промежуточный массив
//   if (n === 0) return []
//   if (n === 1) return s[0]
//   if (n === 1) return [s[0], s[1]]

//   for (let i = 3; i < n; i++){
//     let newd = newarr3.reduce((pv, el) => pv + el, 0)
//     newarrn.push(newd)
//     newarr3.push(newd)
//     newarr3.shift()
//   }
//   console.log(newarrn);
//   return newarrn
// }

// tribonacci([1,1,1], 10)

// const listEl = document.querySelector('.sub-menu > .menu-item > .sub-menu')
// listEl.style.display = 'none'
// listEl.parentElement.addEventListener('focus', function (e) {
//   listEl.style.display = 'block'
// } )

// function cockroachSpeed(s) {
//   let a = s * 100000 / 3600
//   console.log(Math.floor(a));
// }
// cockroachSpeed(1.08)

// function betterThanAverage(classPoints, yourPoints) {
//   const s = classPoints.reduce((pv, el) => pv + el, 0)
//   console.log(yourPoints > s);
//   return yourPoints > s / classPoints.length
// }
// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)

// const a = BigInt(2**1023)
// console.log(String(a).length);

// function isSortedAndHow(array) {
//   let massage = ''
//   const m = array.join('')
//   const c = array.sort((a, b) => a - b)
//   if (c.join('') === m) {
//     massage = 'yes, ascending'
//   }
//    else if(c.reverse().join('') === m){
//     massage = 'yes, descending'
//   }
//   else {massage = 'no'}
//   return massage
// }
// isSortedAndHow([1, 2])
// isSortedAndHow([15, 7, 3, -8])
// isSortedAndHow([4, 2, 30])

// const snail = arr => {
// let nnn
//   if(arr.length % 2 !== 0){
//    nnn = arr.length - 3
//     if (nnn === 0) nnn = 1
//   }
//   if(arr.length % 2 === 0){
//    nnn = arr.length - 3
//     if (nnn === 0) nnn = 0
//   }

//   let m = 0
//   const newarr = []
//   for (y = 0; y < nnn ; y++){
//     for (i = 0; i <= m; i++){
//       console.log(arr[i].length);
//     for (j = 0; j < arr[i].length; j++){
//       newarr.push(arr[i][j])
//     }
//     arr.shift()
//   }

//   for (i = 0; i < arr.length; i++){
//     for (j = (arr[i].length -1); j < arr[i].length; j++){
//       newarr.push(arr[i][j])
//     }
//     arr[i].pop()
//   }

//   for (i = (arr.length - 1); i >= ((arr.length - 1)); i--){
//     for (j = ((arr[i].length - 1) ?? 0); j >= 0; j--){
//       newarr.push(arr[i][j])
//     }
//   }
//   arr.pop()
// // if(arr.length % 2 !== 0){
//    for (i = (arr.length - 1); i >= 0; i--){
//     for (j = 0; j >= m; j--){
//       newarr.push(arr[i][j])
//     }
//     arr[i].shift()
//     }
//   // }

//   }
//   if (arr.length % 2 !== 0) {
//     newarr.push(...arr[0])
//   }

//   console.log(newarr);

//   return newarr

// }
// snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
// snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// snail([[]])
// snail([[1]])
// snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
// snail([
//   [1, 2, 3, 4, 5, 6],
//   [20, 21, 22, 23, 24, 7],
//   [19, 32, 33, 34, 25, 8],
//   [18, 31, 36, 35, 26, 9],
//   [17, 30, 29, 28, 27, 10],
//   [16, 15, 14, 13, 12, 11]])
// snail([
//   [1, 2, 3, 4, 5, 6 , 0],
//   [20, 21, 22, 23, 24, 7, 0],
//   [19, 32, 33, 34, 25, 8, 0],
//   [18, 31, 36, 35, 26, 9, 0],
//   [17, 30, 29, 28, 27, 10, 0],
//   [16, 15, 14, 13, 12, 11, 0],
// [16, 15, 14, 13, 12, 11, 0]])
// console.log("1 2 3 4 5");

// function reverseWords(str) {
//   const a = str
//     .split(" ")
//     .map((el) => el.split("").reverse().join(""))
//     .join(" ");
//   console.log(a);
// }

// reverseWords("The quick brown fox jumps over the lazy dog.");

// const elem = document.querySelector(".div");
// elem.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// class People {
//   constructor({ a }) {
//     this.a = a;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const kek = new People({a: 2});

// console.log(kek);

// class Mage extends People {

//     super()

// }
// var requestURL =
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
// const request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   var superHeroes = request.response;
//   console.log(superHeroes);
// };

// const sumDigits = (number) => {
//   if (number < 0) {
//     number = -number;
//   }
//   return String(number)
//     .split("")
//     .reduce((acc, el) => acc + +el, 0);
// };

// console.log(sumDigits(-124));

// const mango = (q, p) => Math.floor(q / 3) * 2 * p;

// console.log(mango(10, 4));

// const solve = (s) =>
//   s
//     .replace(/a|e|i|o|u/gi, " ")
//     .split(" ")
//     .filter((el) => el)
//     .map((el) =>
//       el.split("").reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0)
//     )
//     .sort((a, b) => b - a)[0];

// console.log(solve("mischtschenkoana"));

// function comp(array1, array2) {
//   if (array1 === null || array2 === null) return false;
//   array2 = array2.map((el) => Math.sqrt(el));
//   const a1 = new Set(array1);
//   const a2 = new Set(array2);
//   console.log(array1);
//   console.log(array2);
//   console.log(a1);
//   console.log(a2);
//   // if (a1.size !== a2.size) return false;
//   return array1.every((el) => {
//     // console.log(array2.indexOf(el));
//     if (array2.includes(el)) {
//       array2.splice(array2.indexOf(el), 1);
//       console.log(array2);
//       return true;
//     }
//     // return array2.includes(el).splice(array2.indexOf(el), 1);
//   });
// }

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );

// multiplicationTable = function (size) {
//   const mainArr = [];
//   let p = 0;
//   for (let j = 0; j < size; j++) {
//     p++;
//     mainArr.push([]);
//     for (i = 1; i <= size; i += 1) {
//       mainArr[j].push(i * p);
//     }
//   }
//   console.log(mainArr);
//   return mainArr;
// };
// multiplicationTable(5);

// function _if(bool, func1, func2) {
//   return bool ? Boolean(func1) : Boolean(func2);
// }

// const student = [
//   { name: "a", age: 32 },
//   { name: "b", age: 31 },
//   { name: "v", age: 28 },
//   { name: "q", age: 13 },
//   { name: "r", age: 1 },
//   { name: "h", age: 100 },
// ];

// const sortedStudent = student.reduce((acc, el) => {
//   console.log(acc);
//   const indexToInsert = acc.findIndex((item) => {
//     return item.age > el.age;
//   });

//   if (indexToInsert === -1) {
//     acc.push(el); // Додаємо на кінець, якщо вік найбільший
//   } else {
//     acc.splice(indexToInsert, 0, el); // Вставляємо в відповідне місце
//   }
//   return acc;
// }, []);

// console.log(sortedStudent);
// const sum = (a, b) => {
//   if (a === +a && b === +b) return a + b;
//   return `a or b NaN`;
// };

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// const btn = document.querySelector(".div");
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const changeColor = () => {
//   btn.firstElementChild.style.backgroundColor = getRandomHexColor();
// };
// btn.addEventListener("click", changeColor);

// const getFetch = async () => {
//   try {
//     const fetchApi = await axios(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(fetchApi);
//   } catch {
//     throw Error;
//   }
// };

// const list = document.querySelector(".list");

// const getUsers = async () => {
//   try {
//     const users = await axios("https://jsonplaceholder.typicode.com/users");
//     return users;
//   } catch {
//     throw Error;
//   }
// };

// const listUser = getUsers().map((el) => `<li><p>${el.name}</p></li>`);

// list.append(listUser);

function race(v1, v2, g) {
  if (v1 >= v2) return null
  const spd = v2 - v1
  const timeToCachUp = g / spd 
  const h = Math.floor(timeToCachUp)
  const m = Math.floor((timeToCachUp * 60) % 60)
  const s = Math.floor((timeToCachUp * 3600) % 60)
  return [h,m,s]
}