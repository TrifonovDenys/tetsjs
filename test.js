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

const diamondNum = (n) => {
  let str = ''
  if(n % 2 === 0 || n <= 0) null
  for (i = 1; i <= n; i++){
    if (i % 2 !== 0) {
      str += ' '.repeat(((n - 1 ) / 2) - (i - 1) / 2) + `${i}\n`
    }  
  }
  for (j = n - 2; j > 0; j--){
    if (j % 2 !== 0) {
      str += ' '.repeat(((n - 1 ) / 2) - (j - 1) / 2) + `${j}\n`
    }  
  }
  return str
}

console.log(diamondNum(11));
