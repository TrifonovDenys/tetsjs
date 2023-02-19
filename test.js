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

function fakeBin(x){
  binArray = [];
  for (let number of x.split('')){
    if (number <= 5){
      number = 0;
      binArray.push(number)
      // console.log(binArray);
    }
    else{
      number = 1
      binArray.push(number)
    }
    // console.log(binArray);
  }
  console.log(binArray.join(''));
  return binArray.join('')
}
fakeBin('45385593107843568')