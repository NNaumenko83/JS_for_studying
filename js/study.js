// const numberClients = 18;
// const clientName = "Nikolay";
// console.log(clientName.length);
// console.log(typeof numberClients);
// console.log(typeof clientName);

// const isComing = prompt("Please confirm hotel reservation");
// console.table({ isComing, clientName });

// const x = 25;
// const y = 20;
// const z = 3;
// console.log({ x, y, z });

// let f = x * y;
// console.log(`Multiply result is ${f}`, typeof f);

// let g = 25 % 20;
// console.log(g);

// console.log(x !== y);

// const valueC = "5px";
// console.log(Number.parseInt(valueC));

// const valueG = "10.5px";
// console.log(Number.parseFloat(valueG));

// // Перевірка на число;
// console.log(Number.isNaN(valueG));

// const myName = "Nikolay";
// console.log(myName.toUpperCase());

// const a = 4;
// const b = 1.765;
// let c = 2;
// let q = c.toFixed(2);
// console.log(c);
// console.table({ q, a });
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.pow(a, c));

// console.log(Math.random());
// console.log(Math.random() * (10 - 1) + 1);

// const message = "I'm Nikolay Naumenko from Kyiv";
// console.log(message);
// console.log(message.indexOf("fom"));
// console.log(message.includes("from"));
// console.log(message.endsWith("from"));
// console.log(message.endsWith("v"));
// console.log(message.replace("v", "q"));
// console.log(message.replaceAll("o", "q"));

// console.log(message.slice(-5));

// const target = 8;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
// 	sum += i;
// 	console.log(sum);
// }

// console.log(sum);
// console.log(0 && 10);
// console.log(Boolean(0));
// console.log("0" && 10);
// console.log(Boolean("0"));

// Оператор нульового злитття

// console.log(0 ?? 90);
// console.log("" ?? 90);

// "" і 0 буде true

// const answer = prompt("Яка офіційна назва JavaScript");
// const correctResult = "ECMASCript";
// if (answer.toLocaleLowerCase === correctResult.toLocaleLowerCase) {
// 	alert("Молодець!");
// } else {
// 	alert("Не знаєте? ECMAScript");
// }
// console.log(answer);

// const hours = 14;
// const minutes = 26;

// console.log(`${hours}hr. ${minutes} min`);

// const userInput = Number(prompt("Введіть число:"));
// console.log(isNaN(userInput));

// if (userInput > 0) {
// 	console.log("Це додатнє число");
// } else if (userInput === 0) {
// 	console.log("Це нуль");
// } esle if (isNaN(userInput){ console.log('Не вірне значення')} else {
// 	console.log("Відємне число");
// }

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
// 	console.log(Math.max(a, b));
// } else {
// 	console.log(b + 512);
// }

// const hours = 10;

// if (hours < 17) {
// 	console.log("Pending");
// } else if (hours > 24) {
// 	console.log("Overdue");
// } else {
// 	console.log("Expires");
// }

// const max = 100;
// const min = 20;

// for (let i = min; i < max; i += 1) {
// 	if (i % 5 === 0) console.log(i);
// }

// const login = prompt("Write login");
// if (!login) {
// 	console.log("Cancel");
// } else if (login === "Admin") {
// 	const password = prompt("password");
// 	if (password === "I admin") {
// 		console.log("Hello");
// 	} else {
// 		console.log("WRONG!!!!");
// 	}
// }

// let a = 10;
// let b = a;

// console.log({ a, b });

// const clients = ["Mango", "Kiwi", "Poly"];
// console.table({ clients });
// const lastIndex = clients.length - 1;
// console.log(lastIndex);
// for (let i = 0; i <= lastIndex; i += 1) {
// 	console.log(clients[i]);
// 	clients[i] += "hello";
// }

// for (const client of clients) {
// 	console.log(client);
// }

// Порахувати загальну суму покупок в кошику

// const cart = [54, 28, 105, 78, 92, 17, 120];
// console.log(cart);
// const lastIndex = cart.length - 1;
// console.log(lastIndex);
// let totalPrice = 0;

// for (let i = 0; i <= lastIndex; i += 1) {
// 	totalPrice += cart[i];
// }

// for (price of cart) console.log(totalPrice);

// Напиши скрипт який буде рахувати суму всіх парних чисел в масиві

// const nummers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1. Робимо змінну суми парних числел

// let totalNumber = 0;

// 2. Перебираємо масив і шукаємо всі парні числа

// for (const number of nummers) {
// 	if (number % 2 === 0) {
// 		totalNumber += number;
// 	}
// }
// console.log(totalNumber);

// Пошук найменшого числа в масіві
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number);

// 	if (number < smallestNumber) {
// 		smallestNumber = number;
// 	}
// }

// console.log(smallestNumber);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number);

// 	if (number > biggestNumber) {
// 		biggestNumber = number;
// 	}
// }

// console.log(biggestNumber);

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// const friendsJoin = friends.join(",");
// console.log(friendsJoin);

// let string = "";
// for (const friend of friends) {
// 	string += friend;
// }
// console.log(string);

// function checkAge(age) {
// 	if (age >= 18) {
// 		return "You are an adult";
// 	}

// 	return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	// Change code below this line

// 	if (password === ADMIN_PASSWORD) {
// 		return "Welcome!";
// 	}

// 	return "Access denied, wrong password!";

// 	// Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	// Change code below this line

// 	if (password === ADMIN_PASSWORD) {
// 		console.log("Welcome!");
// 		return;
// 	}
// 	console.log("Access denied, wrong password!");
// 	return;

// 	// Change code above this line
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// АВТОПЕРЕВІРКА 3/32

// function checkStorage(available, ordered) {
// 	// Change code below this line

// 	if (ordered === 0) {
// 		return "Your order is empty!";
// 	}

// 	if (ordered > available) {
// 		return "Your order is too large, not enough goods in stock!";
// 	}

// 	return "The order is accepted, our manager will contact you";

// 	// Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// АВТОПЕРЕВІРКА 5/32

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);

// АВТОПЕРЕВІРКА 6/32

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.table(fruits);

// АВТОПЕРЕВІРКА 8/32
// const fruits = ["apple", "peach", "pear", "banana"];
// console.table(fruits);

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// АВТОПЕРЕВІРКА 9/32

// function getExtremeElements(array) {
// 	console.table(array);
// 	return [array[0], array[array.length - 1]];
// 	// Change code below this line
// 	// Change code above this line
// }

// console.table(getExtremeElements([1, 2, 3, 4, 5]));
// console.table(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.table(getExtremeElements(["apple", "peach", "pear", "banana"]));

// АВТОПЕРЕВІРКА 10/32

// function splitMessage(message, delimiter) {
// 	let words;
// 	// Change code below this line
// 	words = message.split(delimiter);

// 	// Change code above this line
// 	console.log(words);
// 	return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// АВТОПЕРЕВІРКА 11/32

// function calculateEngravingPrice(message, pricePerWord) {
// 	// Change code below this line
// 	const arrayFromMessage = message.split(" ");

// 	let totalPrice;

// 	totalPrice = arrayFromMessage.length * pricePerWord;
// 	console.log(totalPrice);
// 	return totalPrice;
// 	// Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// АВТОПЕРЕВІРКА 12/32

// function makeStringFromArray(array, delimiter) {
// 	let string;
// 	// Change code below this line
// 	string = array.join(delimiter);
// 	console.log(string);

// 	// Change code above this line
// 	return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// АВТОПЕРЕВІРКА 13/32

// function slugify(title) {
// 	// Change code below this line

// 	const slugifyTitle = title.toLowerCase().split(" ").join("-");
// 	console.log(slugifyTitle);
// 	return slugifyTitle;

// 	// Change code above this line
// }

// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// АВТОПЕРЕВІРКА 14/32

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// console.table(fruits);

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// АВТОПЕРЕВІРКА 15/32

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// АВТОПЕРЕВІРКА 16/32

// function makeArray(firstArray, secondArray, maxLength) {
// 	// Change code below this line

// 	const newArray = firstArray.concat(secondArray);
// 	console.log(newArray);

// 	if (newArray.length > maxLength) {
// 		const newArraySliced = newArray.slice(0, maxLength);
// 		console.log(newArraySliced);
// 		return newArraySliced;
// 	}

// 	return newArray;

// 	// Change code above this line
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// makeArray(["Dynamo", "Shachtar"], ["Real", "Barca", "Arsemal"], 1);

// АВТОПЕРЕВІРКА 17/32

// const start = 3;
// const end = 7;

// for (let i = ; i <= ; i += ) { // Change this line
//   console.log(i);
// }

// АВТОПЕРЕВІРКА 18/32
// function calculateTotal(number) {
// 	// Change code below this line
// 	let total = 0;

// 	for (let i = 0; i <= number; i += 1) {
// 		total += i;
// 	}

// 	console.log(total);
// 	return total;

// 	// Change code above this line
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);

// АВТОПЕРЕВІРКА 19/32

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
// 	// Change this line
// 	const fruit = fruits[i]; // Change this line
// 	console.log(fruit);
// }

// АВТОПЕРЕВІРКА 20/32

// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line

// 	for (let i = 0; i < order.length; i += 1) {
// 		total += order[i];
// 	}
// 	console.log(total);

// 	// Change code above this line
// 	return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// АВТОПЕРЕВІРКА 21/32
// ПОШУК НАЙДОВШОГО СЛОВА
// function findLongestWord(string) {
// 	// Change code below this line
// 	const arrayFromString = string.split(" ");
// 	// console.log(arrayFromString);
// 	let longestWordlength = 0;
// 	let longestWord;

// 	for (let i = 0; i < arrayFromString.length; i += 1) {
// 		// console.log(arrayFromString[i]);

// 		if (arrayFromString[i].length > longestWordlength) {
// 			longestWordlength = arrayFromString[i].length;
// 			longestWord = arrayFromString[i];
// 			// console.log(longestWord);

// 			// console.log(arrayFromString[i]);
// 			// console.log(longestWord);
// 		}
// 	}

// 	// console.log(longestWord);
// 	console.log(longestWord);
// 	return longestWord;

// 	// Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// АВТОПЕРЕВІРКА 22/32
// function createArrayOfNumbers(min, max) {
// 	const numbers = [];
// 	// Change code below this line
// 	for (let i = min; i <= max; i += 1) {
// 		numbers.push(i);
// 	}

// 	// Change code above this line
// 	console.log(numbers);
// 	return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// АВТОПЕРЕВІРКА 23/32
// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const newArray = [];

// 	for (let number of numbers) {
// 		if (number > value) {
// 			newArray.push(number);
// 		}
// 	}

// 	console.log(newArray);
// 	return newArray;

// 	// Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// АВТОПЕРЕВІРКА 24/32
// function checkFruit(fruit) {
// 	const fruits = ["apple", "plum", "pear", "orange"];
// 	console.log(fruits.includes(fruit));
// 	return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");

// АВТОПЕРЕВІРКА 25/32
// function getCommonElements(array1, array2) {
// 	// Change code below this line
// 	const newArray = [];
// 	for (const number of array1) {
// 		if (array2.includes(number)) {
// 			newArray.push(number);
// 		}
// 	}

// 	console.log(newArray);
// 	return newArray;

// 	// Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// АВТОПЕРЕВІРКА 26/32
// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line

// 	for (const price of order) {
// 		total += price;
// 	}

// 	console.log(total);

// 	// Change code above this line
// 	return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// АВТОПЕРЕВІРКА 27/32
// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const filteredNumbers = [];

// 	for (const number of numbers) {
// 		if (number > value) {
// 			filteredNumbers.push(number);
// 		}
// 	}

// 	console.log(filteredNumbers);

// 	return filteredNumbers;
// 	// Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// АВТОПЕРЕВІРКА 28/32
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log({ a, b, c, d, e });

// АВТОПЕРЕВІРКА 29/32
// function getEvenNumbers(start, end) {
// 	const arrayFromPairsNumbers = [];

// 	for (let i = start; i <= end; i += 1) {
// 		if (i % 2 === 0) {
// 			arrayFromPairsNumbers.push(i);
// 		}
// 	}
// 	// Change code below this line
// 	// Change code above this line
// 	console.log(arrayFromPairsNumbers);
// 	return arrayFromPairsNumbers;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// АВТОПЕРЕВІРКА 30/32
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
// 	if (i % 5 === 0) {
// 		number = i;
// 		break;
// 	}
// }

// console.log(number);

// АВТОПЕРЕВІРКА 31/32
// function findNumber(start, end, divisor) {
// 	// Change code below this line
// 	let number;

// 	for (let i = start; i < end; i += 1) {
// 		if (i % divisor === 0) {
// 			number = i;
// 			console.log(number);
// 			return number;
// 		}
// 	}
// 	console.log(umber);
// 	return number;
// 	// Change code above this line
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

// АВТОПЕРЕВІРКА 32/32
// function includes(array, value) {
// 	// Change code below this line

// 	for (const isIncluded of array) {
// 		console.log(array.includes(value));
// 		return array.includes(value);
// 	}

// 	// Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// Об'єкти
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// // const bookTitle = book["title"];
// // console.log(bookTitle);

// // const bookGenres = book["genres"];
// // console.log(bookGenres);

// const propKey = "rating";
// const bookAuthor = book[propKey];
// console.log(bookAuthor);

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// console.table(book);

// const propName = "name";
// const user = {
// 	age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// const bookShelf = {
// 	books: ["The Last Kingdom", "Dream Guardian"],
// 	// Це метод об'єкта
// 	getBooks() {
// 		console.log("Цей метод буде повертати всі книги - властивість books");
// 	},
// 	// Це метод об'єкта
// 	addBook(bookName) {
// 		console.log("Цей метод буде додавати нову книгу у властивість books");
// 	},
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// console.log(bookShelf.books);

// const bookShelf = {
// 	books: ["The Last Kingdom"],
// 	getBooks() {
// 		console.log(this);
// 	},
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
// 	books: ["The Last Kingdom"],
// 	getBooks() {
// 		return this.books;
// 	},
// 	addBook(bookName) {
// 		this.books.push(bookName);
// 	},
// 	removeBook(bookName) {
// 		const bookIndex = this.books.indexOf(bookName);
// 		this.books.splice(bookIndex, 1);
// 	},
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// // console.log(bookShelf.books);
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// // bookShelf.removeBook("The Mist");
// // console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };

// for (const key in book) {
// 	// Ключ
// 	// console.log(key);
// 	// Значення властивості з таким ключем
// 	console.log(book[key]);
// }

// const animal = {
// 	legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };

// for (const key in book) {
// 	// Якщо це власна властивість - виконуємо тіло if
// 	if (book.hasOwnProperty(key)) {
// 		console.log(key);
// 		console.log(book[key]);
// 	}

// 	// Якщо це невласна властивість - нічого не робимо
// }

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",

// 	rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
// 	// Ключ
// 	console.log(key);
// 	// Значення властивості
// 	console.log(book[key]);
// }

// const values = Object.values(book);
// console.log(values);

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "На березі спокійних вод",
// 		author: "Роберт Шеклі",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "Сон смішної людини",
// 		author: "Федір Достоєвський",
// 		rating: 7.75,
// 	},
// ];

// for (const book of books) {
// 	// Об'єкт книги
// 	console.log(book);
// 	// Назва
// 	console.log(book.title);
// 	// Автор
// 	console.log(book.author);
// 	// Рейтинг
// 	console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
// 	bookNames.push(book.title);
// }

// console.log(bookNames);

// const temps = [14, -4, 25, 8, 11];

// console.log(Math.max(...temps));

// function multiply(...args) {
// 	console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(title);

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "На березі спокійних вод",
// 		author: "Роберт Шеклі",
// 		rating: 8.51,
// 	},
// ];

// // for (const book of books) {
// // 	console.log(book.title);
// // 	console.log(book.author);
// // 	console.log(book.rating);
// // }

// for (const book of books) {
// 	const { title, author, rating } = book;

// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
// }

// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// const {
// 	name,
// 	tag,
// 	stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const playlist = {
// 	name: "Мій плейлист",
// 	rating: 5,
// 	tracks: ["трек - 1", "трек - 2", "трек - 3"],
// 	trackCount: 3,
// 	changeName(newName) {
// 		console.log("this всередині changeName:", this);

// 		this.name = newName;
// 	},
// };

// console.log(playlist);
// console.log(playlist.name);

// const propertyName = "name";

// console.log(playlist.name);
// console.log(playlist["name"]);

// console.log(playlist[propertyName]);

// playlist.changeName("Нове ім'я");

// console.log(playlist);

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps);
// console.log(Math.max(...copyOfTemps));

// function multiply(...args) {
// 	console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
// 	console.log(firstNumber); // Значення першого аргументу
// 	console.log(secondNumber); // Значення другого аргументу
// 	console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// const { title, author, isPublic, rating, coverImage = "hello" } = book;
// console.log(coverImage);
// console.log(book);

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// const {
// 	name,
// 	tag,
// 	stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// user.likes = 0;
// console.log(user.likes);

// console.log(user);

// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(userViews);
// console.log(user.likes);
// console.log(userLikes);

// const a = { x: 0, y: 20 };
// const b = { x: 3, z: 50 };

// const c = { ...a, ...b };
// console.log(c);
// console.table(c);

// АВТОПЕРЕВІРКА 1/41

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// АВТОПЕРЕВІРКА 2/41

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// АВТОПЕРЕВІРКА 3/41

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log({ aptRating, aptDescr, aptPrice, aptTags });

// АВТОПЕРЕВІРКА 4/41

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// АВТОПЕРЕВІРКА 5/41
// ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КВАДРАТНІ ДУЖКИ
// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// АВТОПЕРЕВІРКА 6/41
// ЗМІНА ЗНАЧЕННЯ ВЛАСТИВОСТІ

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

// АВТОПЕРЕВІРКА 7/41
// ДОДАВАННЯ ВЛАСТИВОСТЕЙ
// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4.7,
// 	price: 5000,
// 	tags: ["premium", "promoted", "top", "trusted"],
// 	owner: {
// 		name: "Henry Sibola",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);

// АВТОПЕРЕВІРКА 8/41
// КОРОТКІ ВЛАСТИВОСТІ

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
// 	// Change code below this line
// 	name,
// 	price,
// 	image,
// 	tags,
// 	// Change code above this line
// };

// console.log(product);

// АВТОПЕРЕВІРКА 9/41

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
// 	// Change code below this line
// 	[emailInputName]: "henry.carter@aptmail.com",
// 	[passwordInputName]: "jqueryismyjam",
// 	// Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// АВТОПЕРЕВІРКА 10/41
// ЦИКЛ FOR...IN

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
// 	keys.push(key);
// 	values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// АВТОПЕРЕВІРКА 11/41
// МЕТОД HASOWNPROPERTY()

// const keys = [];
// const values = [];
// const advert = {
// 	service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// 	// Change code below this line

// 	if (apartment.hasOwnProperty(key)) {
// 		keys.push(key);
// 		values.push(apartment[key]);
// 	}

// 	// Change code above this line
// }

// console.log(keys);
// console.log(values);

// АВТОПЕРЕВІРКА 12/41
// ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ

// function countProps(object) {
// 	let propCount = 0;
// 	// Change code below this line

// 	for (const key in object)
// 		if (object.hasOwnProperty(key)) {
// 			propCount += 1;
// 		}

// 	console.log(propCount);
// 	return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// АВТОПЕРЕВІРКА 13/41
// МЕТОД OBJECT.KEYS()

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };

// const values = [];

// // Change code below this line

// const keys = Object.keys(apartment);

// console.log(keys);

// for (const key of keys) {
// 	values.push(apartment[key]);
// }
// console.log(values);

// АВТОПЕРЕВІРКА 14/41
// ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// function countProps(object) {
// 	// Change code below this line
// 	let propCount = 0;

// 	propCount = Object.keys(object).length;

// 	return propCount;
// 	// Change code above this line
// }

// АВТОПЕРЕВІРКА 15/41
// МЕТОД OBJECT.VALUES()

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// АВТОПЕРЕВІРКА 16/41
// ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ

// function countTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	// Change code below this line
// 	for (const key of Object.values(salaries)) {
// 		totalSalary += key;
// 	}
// 	console.log(totalSalary);
// 	// Change code above this line
// 	return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// АВТОПЕРЕВІРКА 17/41
// МАСИВ ОБ'ЄКТІВ

// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
// 	hexColors.push(color.hex);
// 	rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// АВТОПЕРЕВІРКА 18/41
// ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// Напиши функцію getProductPrice(productName),
// яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name)
// в масиві products і повертає його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений,
// 	функція повинна повертати null.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// 	// Change code below this line
// 	let productPrice = null;

// 	for (const product of products) {
// 		if (product.name === productName) {
// 			productPrice = product.price;
// 			break;
// 		}
// 	}

// 	console.log(productPrice);
// 	return productPrice;

// 	// Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// АВТОПЕРЕВІРКА 19/41
// ЗАДАЧА. ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// 	// Change code below this line

// 	const productsValuesArray = [];

// 	for (const product of products) {
// 		if (product[propName]) {
// 			productsValuesArray.push(product[propName]);
// 		}

// 		// Change code above this line
// 	}
// 	console.log(productsValuesArray);
// 	return productsValuesArray;
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// АВТОПЕРЕВІРКА 20/41
// ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	// Change code below this line
// 	let totalPrice = 0;

// 	for (const product of products) {
// 		if (product.name === productName) {
// 			totalPrice = product.price * product.quantity;
// 		}
// 	}

// 	console.log(totalPrice);
// 	return totalPrice;
// 	// Change code above this line
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// АВТОПЕРЕВІРКА 21/41
// ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ
// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// АВТОПЕРЕВІРКА 22/41
// ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ
// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line
// const {
// 	yesterday,
// 	today,
// 	tomorrow,
// icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// АВТОПЕРЕВІРКА 23/41
// ЗМІНА ІМЕНІ ЗМІННОЇ

// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line

// const {
// 	yesterday: highYesterday,
// 	today: highToday,
// 	tomorrow: highTomorrow,
// icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// АВТОПЕРЕВІРКА 24/41
// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
// 	hexColors.push(hex);
// 	rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// АВТОПЕРЕВІРКА 25/41

// const forecast = {
// 	today: {
// 		low: 28,
// 		high: 32,
// 		icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// 	tomorrow: {
// 		low: 27,
// 		high: 31,
// 	},
// };
// // Change code below this line

// const {
// 	today: {
// 		low: lowToday,
// 		high: highToday,
// 		icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// 	tomorrow: {
// 		low: lowTomorrow,
// 		high: highTomorrow,
// 		icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// } = forecast;

// console.log(lowToday, highToday, lowTomorrow, highTomorrow);

// АВТОПЕРЕВІРКА 26/41
// ПАТЕРН «ОБ'ЄКТ НАЛАШТУВАНЬ»

// function calculateMeanTemperature(forecast) {
// 	const {
// 		today: { low: todayLow, high: todayHigh },
// 		tomorrow: { low: tomorrowLow, high: tomorrowHigh },
// 	} = forecast;

// 	// Change code above this line

// 	return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } });

// АВТОПЕРЕВІРКА 27/41
// ОПЕРАЦІЯ SPREAD ПРИ ПЕРЕДАЧІ АРГУМЕНТІВ

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log("bestScore", bestScore, "worstScore", worstScore);

// АВТОПЕРЕВІРКА 28/41
// ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО МАСИВУ

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// // Change code below this line

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// АВТОПЕРЕВІРКА 29/41
// ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО ОБ'ЄКТА

// const defaultSettings = {
// 	theme: "light",
// 	public: true,
// 	withPassword: false,
// 	minNumberOfQuestions: 10,
// 	timePerQuestion: 60,
// };
// const overrideSettings = {
// 	public: false,
// 	withPassword: true,
// 	timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// АВТОПЕРЕВІРКА 30/41
// function makeTask(data) {
// 	const completed = false;
// 	const category = "General";
// 	const priority = "Normal";
// 	// Change code below this line
// 	const completedTask = { completed, category, priority, ...data };
// 	console.log(completedTask);
// 	return completedTask;

// 	// Change code above this line
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// АВТОПЕРЕВІРКА 31/41
// Change code below this line
// function add(...args) {
// 	console.log(args);
// 	let total = 0;
// 	for (const arg of args) {
// 		total += arg;
// 	}
// 	console.log(total);
// 	return total;

// 	// Change code above this line
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// АВТОПЕРЕВІРКА 32/41
// Change code below this line
// function addOverNum(...args) {
// 	let total = 0;

// 	for (let i = 1; i < args.length; i += 1) {
// 		if (args[0] < args[i]) {
// 			total += args[i];
// 		}
// 	}

// 	console.log(total);
// 	return total;
// 	// Change code above this line
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// АВТОПЕРЕВІРКА 33/41
// function findMatches(array, ...args) {
// 	const matches = []; // Don't change this line
// 	// console.log(array);
// 	// console.log(args);

// 	// for (let i = 0; i < args.length; i += 1) {
// 	// 	// console.log(args[i]);
// 	// 	if (array.includes(args[i])) {
// 	// 		matches.push(args[i]);
// 	// 	}
// 	// }

// 	for (let i = 0; i < args.length; i += 1) {
// 		// console.log(args[i]);
// 		if (!array.includes(args[i])) {
// 			continue;
// 		}
// 		matches.push(args[i]);
// 	}

// 	console.log(matches);

// 	// Change code above this line
// 	return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// АВТОПЕРЕВІРКА 34/41
// const bookShelf = {
// 	// Change code below this line
// 	books: ["The last kingdom", "The guardian of dreams"],

// 	getBooks() {
// 		return "Returning all books";
// 	},

// 	addBook(bookName) {
// 		return `Adding book ${bookName}`;
// 	},

// 	removeBook(bookName) {
// 		console.log(`Deleting book ${bookName}`);
// 		return `Deleting book ${bookName}`;
// 	},

// 	updateBook(oldName, newName) {
// 		console.log(`Updating book ${oldName} to ${newName}`);
// 		return `Updating book ${oldName} to ${newName}`;
// 	},

// 	// Change code above this line
// };

// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");

// АВТОПЕРЕВІРКА 35/41
// ДОСТУП ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА В ЙОГО МЕТОДАХ

// const bookShelf = {
// 	books: ["The last kingdom", "Haze", "The guardian of dreams"],
// 	updateBook(oldName, newName) {
// 		// Change code below this line
// 		let indexOfOldBook = this.books.indexOf(oldName);

// 		this.books.splice(indexOfOldBook, 1, newName);

// 		return this.books;

// 		// Change code above this line
// 	},
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// АВТОПЕРЕВІРКА 36/41
// const atTheOldToad = {
// 	// Change code below this line
// 	potions: [],
// 	// Change code above this line
// };

// АВТОПЕРЕВІРКА 37/41
// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},

// 	// Change code above this line
// };

// АВТОПЕРЕВІРКА 38/41
// ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	addPotion(potionName) {
// 		// Change code below this line
// 		this.potions.push(potionName);
// 		console.log(this.potions);
// 		return this.potions;
// 		// Change code above this line
// 	},
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// АВТОПЕРЕВІРКА 39/41
// ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ
// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	removePotion(potionName) {
// 		// Change code below this line
// 		let indexOfRemovedElement = this.potions.indexOf(potionName);

// 		this.potions.splice(indexOfRemovedElement, 1);
// 		return this.potions;

// 		// Change code above this line
// 	},
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));

// АВТОПЕРЕВІРКА 40/41
// ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ
// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	updatePotionName(oldName, newName) {
// 		// Change code below this line
// 		let indexOfOldName = this.potions.indexOf(oldName);
// 		console.log(indexOfOldName);
// 		this.potions.splice(indexOfOldName, 1, newName);
// 		console.log(this.potions);
// 		return this.potions;
// 		// Change code above this line
// 	},
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// АВТОПЕРЕВІРКА 41/41
// ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР

// Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
//  щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],

// 	// Change code below this line

// 	getPotions() {
// 		console.log(this.potions);
// 		return this.potions;
// 	},

// 	addPotion(newPotion) {
// 		const arrayOfPotions = [];
// 		for (const potion of this.potions) {
// 			arrayOfPotions.push(potion.name);
// 		}

// 		if (arrayOfPotions.includes(newPotion.name)) {
// 			console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
// 			return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 		}
// 		this.potions.push(newPotion);
// 		console.log(this.potions);
// 		return this.potions;
// 	},

// 	removePotion(potionName) {
// 		const potionIndex = this.potions.indexOf(potionName);

// 		// перебрати масив potions
// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === potionName) {
// 				this.potions.splice(i, 1);
// 			}
// 		}

// 		return this.potions;
// 		// if (potionIndex === -1) {
// 		// 	return `Potion ${potionName} is not in inventory!`;
// 		// }

// 		// this.potions.splice(potionIndex, 1);
// 	},

// 	updatePotionName(oldName, newName) {
// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === oldName) {
// 				this.potions[i].name = newName;
// 				console.log(this.potions);
// 				return this.potions;
// 			}
// 		}

// 		return this.potions;
// 	},
// Change code above this line
// };

// atTheOldToad.getPotions();

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

// function multiply(...a) {
// 	let total = 1;

// 	const array = a;
// 	console.log(a);

// 	for (const argumt of arguments) {
// 		total *= argumt;
// 	}

// 	return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// ЗАМИКАННЯ

// function foo() {
// 	let age = 18;
// 	console.log(age);
// 	return age;
// }

// foo();

// const numbers = [3, 4, 8, 9, 10, 15, 0, 36, 1, 6, 90, 654, 2, 4];

// let count = 0;
// // перебираємо масив
// for (let loop = 0; loop < numbers.length - 2; loop += 1) {
// 	let arrayWasChanged = false;
// 	console.log("LOOP:", loop);

// 	for (let i = 1; i < numbers.length - loop; i += 1) {
// 		// console.log("i", i);
// 		const firstValue = numbers[i - 1];
// 		const secondValue = numbers[i];
// 		console.log(firstValue, secondValue);

// 		if (firstValue > secondValue) {
// 			arrayWasChanged = true;
// 			numbers[i - 1] = secondValue;
// 			numbers[i] = firstValue;
// 		}
// 		count += 1;
// 	}
// 	if (!arrayWasChanged) break;
// }

// СОРТУВАННЯ ЕЛЕМЕНТІВ МАСИВУ!!!

// const array = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// for (loop = 0; loop < array.length; loop += 1) {
// 	console.log(loop + 1);
// 	let isArrayChanged = false;

// 	for (i = 1; i < array.length - loop; i += 1) {
// 		const firstElement = array[i - 1];
// 		const secondElement = array[i];

// 		console.log(`Порівнюємо ${firstElement} і ${secondElement}`);
// 		if (firstElement > secondElement) {
// 			isArrayChanged = true;
// 			array[i - 1] = secondElement;
// 			array[i] = firstElement;
// 			console.log(array);
// 		}
// 	}

// 	if (!isArrayChanged) {
// 		console.log("Масив не змінено");
// 		break;
// 	}
// }

// console.log(array);

// console.log(count);
// console.log(numbers);

// const plant = "PVZ";
// console.log(plant[0]);

// const cart = {
// 	items: [],
// 	getItems() {
// 		return this.items;
// 	},

// 	add(product) {
// 		// console.table(this.items);
// 		for (const item of this.items) {
// 			if (item.name === product.name) {
// 				// console.log("Такий продукт вже є");
// 				item.quantity += 1;
// 				return;
// 			}
// 		}

// 		const newProduct = { ...product, quantity: 1 };
// 		const { items } = this;
// 		items.push(newProduct);
// 		return items;
// 	},

// 	remove(productName) {
// 		const { items } = this;
// 		for (let i = 0; i < items.length; i += 1) {
// 			const { name } = items[i];

// 			// console.log(name);

// 			if (productName === name) {
// 				// console.log("Знайшли продукт", productName);
// 				// console.log(i);
// 				items.splice(i, 1);
// 			}
// 		}
// 	},

// 	clear() {
// 		this.items = [];
// 	},

// 	countTotalPrice() {
// 		const { items } = this;

// 		let totalPtice = 0;

// 		for (const { price, quantity } of items) {
// 			// const { price, quantity } = items[i];

// 			totalPtice += price * quantity;
// 		}
// 		return totalPtice;
// 	},

// 	increaseQuantity(productName) {
// 		const { items } = this;
// 		console.log(items);
// 		for (const item of items) {
// 			if (item.name === productName) {
// 				console.log("Вже є:", item.name);
// 				item.quantity += 1;
// 				return;
// 			}
// 		}
// 	},

// 	// decreaseQuantity(productName) {
// 	// 	const { items } = this;
// 	// 	console.log(items);
// 	// 	for (const item of items) {
// 	// 		if (item.name === productName) {
// 	// 			console.log("Вже є:", item.name);
// 	// 			item.quantity -= 1;
// 	// 			console.log(item.quantity);
// 	// 			return;
// 	// 		}
// 	// 	}
// 	// },

// 	decreaseQuantity(productName) {
// 		const { items } = this;
// 		// console.log(items);
// 		for (let { name, quantity: superQuantity } of items) {
// 			console.log(superQuantity);

// 			if (name === productName) {
// 				console.log("Вже є:", name);
// 				superQuantity += 1;
// 				// console.log(quantity);
// 				return;
// 			}
// 		}
// 	},
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "limon", price: 60 });
// cart.add({ name: "cucumber", price: 60 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });
// cart.add({ name: "strawbery", price: 110 });

// // console.table(cart.getItems());

// // cart.remove("apple");

// // console.log(cart.getItems());

// // console.log(cart.countTotalPrice());

// // cart.increaseQuantity("strawbery");
// cart.decreaseQuantity("strawbery");
// cart.decreaseQuantity("strawbery");
// cart.decreaseQuantity("strawbery");
// cart.decreaseQuantity("strawbery");

// cart.add({ name: "strawbery", price: 110 });

// function digPow(n, p) {
// 	let total = 0;
// 	console.log("Задано n:", n, "Задано p:", p);
// 	const arrayFromNumbers = n.toString().split("");
// 	console.log("Розбиваємо на масив чисел", arrayFromNumbers);
// 	console.log("Перебираємо масив", arrayFromNumbers);
// 	for (let i = 0; i < arrayFromNumbers.length; i += 1) {
// 		let degree = p + i;
// 		console.log(`Приводимо ${arrayFromNumbers[i]} в ${degree} ступінь`);

// 		total += Math.pow(Number(arrayFromNumbers[i]), degree);

// 		// console.log(Math.pow(Number(arrayFromNumbers[i]), (p += i)));

// 		// total += Math.pow(Number(arrayFromNumbers[i]), (p += i));
// 		console.log(total);
// 	}

// 	let k = total / n;

// 	if (total % n === 0) {
// 		return k;
// 	}

// 	k = -1;

// 	return k;
// }

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(46288, 3));

// const filter = function (array, test) {
// 	const filteredArray = [];
// 	for (const el of array) {
// 		console.log(el);
// 		const passed = test(el);
// 		console.log(passed);
// 		if (passed) {
// 			filteredArray.push(el);
// 		}
// 	}
// 	return filteredArray;
// };

// const callback1 = function (value) {
// 	return value >= 10;
// };

// const r1 = filter([1, 3, 5, 10, 4, 20, 6, 100], callback1);
// console.log(r1);

// const add = (a, b) => {
// 	console.log("sdfsdf");

// };

// const add = () => "Привет";

// console.log(add());

// const numbers = [2, 4, 6, 8, 10, 5, 100];

// const greaterYhanTwo = numbers.filter(num => num > 2);
// console.log(greaterYhanTwo);

// const multByTwo = greaterYhanTwo.map(num => num * 2);
// console.log(multByTwo);

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// const students = [
// 	{ name: "Манго", courses: ["математика", "фізика"] },
// 	{ name: "Полі", courses: ["інформатика", "математика"] },
// 	{ name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const newArray = students.flatMap(student => student.courses);
// console.log(newArray);

// const colorPickerOptions = [
// 	{ label: "red", color: "#F44336" },
// 	{ label: "green", color: "#4CAF50" },
// 	{ label: "blue", color: "#2196F3" },
// 	{ label: "pink", color: "#E91E63" },
// 	{ label: "indigo", color: "#3F51B5" },
// ];

// const color = colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// console.log(color);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const numbers = [5, 10, 15, 20, 25];

// // // numbers.forEach(function (number, index, array) {
// // // 	console.log("number", number);
// // // 	console.log("index", index);
// // // 	console.log("array", array);
// // // });

// // const filteredArray = numbers.filter(number => number > 10);

// // console.log(filteredArray);

// const total = numbers.reduce((acc, number) => {
// 	console.log("number", number);
// 	console.log("acc", acc);
// 	return acc + number;
// }, 0);
// console.log(total);

// const letters = ["b", "A", "c", "Y", "Z", "D"];
// // const letters = [1, 3, 8, 2, 4, 9, 5, 10];

// const newLetters = [...letters].sort();

// console.log(newLetters);

// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	location: {
// 		country: "Jamaica",
// 		city: "Ocho Rios",
// 	},
// 	hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// console.log(user["name"]);

// const bookShelf = {
// 	books: ["The Last Kingdom"],
// 	getBooks() {
// 		console.log(this);
// 	},
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {

// ***************
// АВТОПЕРЕВІРКА 4
// ***************

// ЗАВДАННЯ 1/48
// ФУНКЦІЯ ЯК ЗНАЧЕННЯ

// function makePizza() {
// 	return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ЗАВДАННЯ 2/48
// КОЛБЕК-ФУНКЦІЇ

// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// 	return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// ЗАВДАННЯ 3/48
// ІНЛАЙН-КОЛБЕКИ

// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
// 	console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// // makePizza("Ultracheese", function eatPizza(pizzaName) {
// // 	console.log(`Eating pizza ${pizzaName}.`);
// // });

// ЗАВДАННЯ 4/48
// ДЕКІЛЬКА КОЛБЕКІВ

// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],

// 	order(pizzaName, onSuccess, onError) {
// 		if (!this.pizzas.includes(pizzaName)) {
// 			return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// 		}
// 		return onSuccess(`${pizzaName}`);
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// ЗАВДАННЯ 5/48
// МЕТОД FOREACH(CALLBACK)

// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line

// 	orderedItems.forEach(element => (totalPrice += element));

// 	// Change code above this line
// 	return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ЗАВДАННЯ 6/48
// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// 	// Change code below this line

// 	numbers.forEach(element => {
// 		if (element > value) {
// 			filteredNumbers.push(element);
// 		}
// 	});

// 	// Change code above this line
// 	return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ЗАВДАННЯ 7/48
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ

// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line
// 	firstArray.forEach(element => {
// 		if (secondArray.includes(element)) {
// 			commonElements.push(element);
// 		}
// 	});

// 	return commonElements;
// 	// Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ЗАВДАННЯ 8/48
// СТРІЛОЧНІ ФУНКЦІЇ.

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) =>
// 	// Change code above this line
// 	quantity * pricePerItem;

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);

// ЗАВДАННЯ 9/48
// НЕЯВНЕ ПОВЕРНЕННЯ
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Change code above this line

// ЗАВДАННЯ 10/48
// СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ
// Change code below this line

// const calculateTotalPrice = orderedItems => {
// 	let totalPrice = 0;

// 	orderedItems.forEach(item => {
// 		totalPrice += item;
// 	});

// 	console.log(totalPrice);
// 	return totalPrice;
// };
// // Change code above this line
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// ЗАВДАННЯ 11/48
// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// const filterArray = (numbers, value) => {
// 	const filteredNumbers = [];

// 	numbers.forEach(number => {
// 		if (number > value) {
// 			filteredNumbers.push(number);
// 		}
// 	});

// 	// Change code above this line

// 	console.log(filteredNumbers);
// 	return filteredNumbers;
// };

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ЗАВДАННЯ 12/48
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0

// Change code below this line

// const getCommonElements = (firstArray, secondArray) => {
// 	const commonElements = [];

// 	firstArray.forEach(element => {
// 		if (secondArray.includes(element)) {
// 			commonElements.push(element);
// 		}
// 	});

// 	// Change code above this line
// 	console.log(commonElements);
// 	return commonElements;
// };

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ЗАВДАННЯ 13/48
// ЧИСТІ ФУНКЦІЇ

// function changeEven(numbers, value) {
// 	// Change code below this line

// 	const newArray = [];

// 	numbers.forEach(number => {
// 		number % 2 === 0 ? newArray.push((number += value)) : newArray.push(number);
// 	});

// 	console.log(newArray);
// 	return newArray;

// 	// Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);

// ЗАВДАННЯ 14/48
// МЕТОД MAP()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// ЗАВДАННЯ 15/48
// МЕТОД MAP()

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

// ЗАВДАННЯ 16/48
// FLATMAP()
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		genres: ["adventure", "history"],
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		genres: ["fiction"],
// 	},
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		genres: ["horror", "mysticism"],
// 	},
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// ЗАВДАННЯ 17/48
// ЗАДАЧА. ІМЕНА КОРИСТУВАЧІВ

// Change code below this line

// Change code above this line

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // const getUserNames = users.map(user => user.name);

// const getUserNames = users => users.map(user => user.name);
// // const namesNew = users.map(user => user.name);
// console.log(getUserNames(users));

// ЗАВДАННЯ 18/48
// ЗАДАЧА. ПОШТИ КОРИСТУВАЧІВ

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // Change code below this line
// // const getUserEmails = users => users.map(user => user.email);
// const getUserNames = users => users.map(user => user.name);
// const result = getUserNames(users);
// console.log(result);
// // Change code above this line

// ЗАВДАННЯ 19/48
// МЕТОДИ FILTER І FIND

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ЗАВДАННЯ 20/48
// ФІЛЬТРАЦІЯ УНІКАЛЬНИХ ЕЛЕМЕНТІВ

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		genres: ["adventure", "history"],
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		genres: ["fiction", "mysticism"],
// 	},
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		genres: ["horror", "mysticism", "adventure"],
// 	},
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.table(allGenres);

// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.table(uniqueGenres);

// ЗАВДАННЯ 21/48
// МЕТОД FILTER() І МАСИВ ОБ'ЄКТІВ

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.table(topRatedBooks);
// console.table(booksByAuthor);

// ЗАВДАННЯ 22/48
// ЗАДАЧА. КОРИСТУВАЧІ З КОЛЬОРОМ ОЧЕЙ

// Change code below this line
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// console.table(getUsersWithEyeColor(users, "green"));

// // Change code above this line

// ЗАВДАННЯ 23/48
// ЗАДАЧА. КОРИСТУВАЧІ У ВІКОВІЙ КАТЕГОРІЇ

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
// // Change code above this line

// console.table(getUsersWithAge(users, 20, 30));
// console.table(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// ЗАВДАННЯ 24/48
// ЗАДАЧА. КОРИСТУВАЧІ З ДРУГОМ

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));

// ЗАВДАННЯ 25/48
// ЗАДАЧА. СПИСОК ДРУЗІВ

// Change code below this line
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// const getFriends = users =>
// 	users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);

// console.table(getFriends(users));

// // console.log(allFriends);

// // const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);

// // console.log(uniqueFriends);
// // Change code above this line

// ЗАВДАННЯ 26/48
// ЗАДАЧА. АКТИВНІ КОРИСТУВАЧІ

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // Change code below this line
// const getActiveUsers = users => users.filter(user => user.isActive);

// console.table(getActiveUsers(users));
// // Change code above this line

// ЗАВДАННЯ 27/48
// ЗАДАЧА. НЕАКТИВНІ КОРИСТУВАЧІ

// const getInactiveUsers = users => users.filter(user => !user.isActive);
// console.table(getInactiveUsers(users));

// ЗАВДАННЯ 28/48
// МЕТОД FIND()
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ЗАВДАННЯ 29/48
// ЗАДАЧА. КОРИСТУВАЧ З ПОШТОЮ

// Change code below this line
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// // Change code above this line

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

// ЗАВДАННЯ 30/48

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// console.log(eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// console.log(eachElementInSecondIsEven);

// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// console.log(eachElementInThirdIsEven);

// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);
// console.log(eachElementInThirdIsOdd);

// ЗАВДАННЯ 31/48
// ЗАДАЧА. ЧИ ВСІ КОРИСТУВАЧІ АКТИВНІ

// Change code below this line
// const isEveryUserActive = users => users.every(user => user.isActive);

// console.log(isEveryUserActive(users));
// // Change code above this line

// ЗАВДАННЯ 32/48
// МЕТОД SOME()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// console.log(anyElementInFirstIsEven);

// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);
// console.log(anyElementInFirstIsOdd);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// console.log(anyElementInSecondIsEven);

// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);
// console.log(anyElementInSecondIsOdd);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// console.log(anyElementInThirdIsEven);

// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);
// console.log(anyElementInThirdIsOdd);

// ЗАВДАННЯ 33/48
// ЗАДАЧА. ЧИ Є АКТИВНІ КОРИСТУВАЧІ
// Change code below this line
// const isAnyUserActive = users => users.some(user => user.isActive);
// Change code above this line

// ЗАВДАННЯ 34/48
// МЕТОД REDUCE()

// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, playTime) => (previousValue += playTime));
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ЗАВДАННЯ 35/48
// МЕТОД REDUCE() І МАСИВ ОБ'ЄКТІВ

// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
// 	(totalTime, player) => (totalTime += player.playtime / player.gamesPlayed),
// 	0,
// );

// console.log(totalAveragePlaytimePerGame);

// ЗАВДАННЯ 36/48
// ЗАДАЧА. ЗАГАЛЬНИЙ БАЛАНС КОРИСТУВАЧІВ
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];
// // Change code below this line
// const calculateTotalBalance = users => users.reduce((totalBalance, user) => (totalBalance += user.balance), 0);
// // Change code above this line

// console.log(calculateTotalBalance(users));

// ЗАВДАННЯ 37/48
// ЗАДАЧА. ЗАГАЛЬНА КІЛЬКІСТЬ ДРУЗІВ

// Change code below this line
// const getTotalFriendCount = users =>
// 	users.reduce((totalQuantityOfFriends, user) => (totalQuantityOfFriends += user.friends.length), 0);
// // Change code above this line
// console.log(getTotalFriendCount(users));

// ЗАВДАННЯ 38/48
// МЕТОД SORT()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ЗАВДАННЯ 39/48
// СВІЙ ПОРЯДОК СОРТУВАННЯ ЧИСЕЛ

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((firstDate, secondDate) => firstDate - secondDate);

// const descendingReleaseDates = [...releaseDates].sort((firstDate, secondDate) => secondDate - firstDate);

// console.log(releaseDates);

// ЗАВДАННЯ 40/48
// СВІЙ ПОРЯДОК СОРТУВАННЯ РЯДКІВ
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((firstAuthor, secondAuthor) =>
// 	firstAuthor.localeCompare(secondAuthor),
// );

// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((firstAuthor, secondAuthor) =>
// 	secondAuthor.localeCompare(firstAuthor),
// );

// console.log(authorsInReversedOrder);

// ЗАВДАННЯ 41/48
// СОРТУВАННЯ ОБ'ЄКТІВ

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
// 	firstBook.author.localeCompare(secondBook.author),
// );
// console.table(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
// 	secondBook.author.localeCompare(firstBook.author),
// );
// console.table(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// console.table(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
// console.table(sortedByDescentingRating);

// ЗАВДАННЯ 42/48
// ЗАДАЧА. СОРТУВАННЯ ЗА БАЛАНСОМ

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// // Change code below this line
// const sortByAscendingBalance = users =>
// 	[...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);

// console.table(sortByAscendingBalance(users));
// // Change code above this line

// ЗАВДАННЯ 43/48
// ЗАДАЧА. СОРТУВАННЯ ЗА КІЛЬКІСТЮ ДРУЗІВ

// Change code below this line
// const sortByDescendingFriendCount = users =>
// 	[...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
// // Change code above this line

// console.table(sortByDescendingFriendCount(users));

// ЗАВДАННЯ 44/48
// ЗАДАЧА. СОРТУВАННЯ ЗА ІМ'ЯМ

// Change code below this line
// const sortByName = users => [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// // Change code above this line

// console.table(sortByName(users));

// ЗАВДАННЯ 45/48
// ЛАНЦЮЖКИ МЕТОДІВ (ЧЕЙНІНГ, CHAINING)

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{
// 		title: "The Dreams in the Witch House",
// 		author: "Howard Lovecraft",
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// 	.filter(book => book.rating > MIN_BOOK_RATING)
// 	.map(book => book.author)
// 	.sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.table(names);

// ЗАВДАННЯ 46/48
// ЗАДАЧА. КОРИСТУВАЧІ І ДРУЗІ

const users = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		gender: "male",
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		gender: "female",
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		gender: "male",
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		gender: "female",
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
		isActive: true,
		balance: 3951,
		gender: "male",
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
		isActive: false,
		balance: 1498,
		gender: "male",
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		gender: "female",
	},
];

// // Change code below this line
// const getNamesSortedByFriendCount = users =>
// 	[...users]
// 		.sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
// 		.map(user => user.name);
// // Change code above this line

// console.table(getNamesSortedByFriendCount(users));

// ЗАВДАННЯ 47/48
// ЗАДАЧА. ІМЕНА ДРУЗІВ

// Change code below this line
// const getSortedFriends = users =>
// 	users
// 		.flatMap(user => user.friends)
// 		.filter((friend, index, array) => array.indexOf(friend) === index)
// 		.sort((firsrFriend, secondFriend) => firsrFriend.localeCompare(secondFriend));

// // Change code above this line

// console.table(getSortedFriends(users));

// ЗАВДАННЯ 48/48
// ЗАДАЧА. ЗАГАЛЬНИЙ БАЛАНС

// Change code below this line
// const getTotalBalanceByGender = (users, gender) =>
// 	users.filter(user => user.gender === gender).reduce((totalBalanse, user) => (totalBalanse += user.balance), 0);
// // Change code above this line

// console.table(getTotalBalanceByGender(users, "male"));
// console.table(getTotalBalanceByGender(users, "female"));

// function divisors(integer) {
// 	const newArray = [];

// 	for (let i = 2; i < integer; i += 1) {
// 		if (integer % i === 0) {
// 			newArray.push(i);
// 		}
// 	}

// 	if (newArray.length > 0) {
// 		return newArray;
// 	}

// 	if (newArray.length === 0) {
// 		return `${integer} is prime`;
// 	}
// }

// console.log(divisors(13));

// function duplicateEncode(str) {
// 	const word = str.toLowerCase();
// 	console.log(word);

// 	let unique = "";

// 	for (let i = 0; i < word.length; i += 1) {
// 		if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
// 			unique += "(";
// 		} else unique += ")";
// 	}

// 	return unique;
// }

// console.log(duplicateEncode("BaRaban"));

// function duplicateEncode(str) {
// 	console.log(str);
// 	const word = str.toLowerCase();
// 	console.log(word);

// 	let unique = "";

// 	for (let i = 0; i < word.length; i += 1) {
// 		if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
// 			unique += "(";
// 		} else {
// 			unique += ")";
// 		}
// 	}

// 	return unique;
// }

// console.log(duplicateEncode("din"));

// function persistence(num) {
// 	let counter = 0;

// 	const arrayFromNumber = num.toString().split("");
// 	console.log(arrayFromNumber);

// 	function countFoo(mult, count) {
// 		const arrayFromNumber = mult.toString().split("");
// 		counter = count;
// 		console.log(arrayFromNumber);

// 		if (arrayFromNumber.length > 1) {
// 			let multiply = Number(arrayFromNumber[0]);
// 			counter = count + 1;
// 			console.log(multiply);

// 			for (let i = 1; i < arrayFromNumber.length; i += 1) {
// 				console.log("Це воно", arrayFromNumber.length);
// 				let item = Number(arrayFromNumber[i]);
// 				console.log("Це воно", Number(arrayFromNumber[i]));
// 				multiply *= item;
// 				console.log("Це воно", multiply);
// 			}
// 			return countFoo(multiply, counter);
// 		}
// 		return counter;
// 	}

// 	if (arrayFromNumber.length > 1) {
// 		let multiply = Number(arrayFromNumber[0]);
// 		counter += 1;
// 		for (let i = 1; i < arrayFromNumber.length; i += 1) {
// 			multiply *= Number(arrayFromNumber[i]);
// 		}
// 		return countFoo(multiply, counter);
// 	}
// 	// console.log(counter);
// 	return counter;
// }

// console.log(persistence(999));

// const numbers = 777;

// const arrayFromNumbers = numbers.toString().split("");
// console.log(arrayFromNumbers);

// let toNumber = Number(arrayFromNumbers[0]);
// console.log(toNumber);
// console.log(typeof toNumber);

// function persistence(num) {
// 	let counter = 0;

// 	const arrayFromNumber = num.toString().split("");

// 	function countFoo(mult, count) {
// 		const arrayFromNumber = mult.toString().split("");
// 		counter = count;

// 		if (arrayFromNumber.length > 1) {
// 			let multiply = Number(arrayFromNumber[0]);
// 			counter = count + 1;

// 			for (let i = 1; i < arrayFromNumber.length; i += 1) {
// 				let item = Number(arrayFromNumber[i]);

// 				multiply *= item;
// 			}
// 			return countFoo(multiply, counter);
// 		}
// 		return counter;
// 	}

// 	if (arrayFromNumber.length > 1) {
// 		let multiply = Number(arrayFromNumber[0]);
// 		counter += 1;
// 		for (let i = 1; i < arrayFromNumber.length; i += 1) {
// 			multiply *= Number(arrayFromNumber[i]);
// 		}
// 		return countFoo(multiply, counter);
// 	}

// 	return counter;
// }

// function persistence(num) {
// 	let counter = 0;
// 	let numbers = num.toString();

// 	while (numbers.length > 1) {
// 		counter += 1;

// 		numbers = numbers
// 			.split("")
// 			.map(number => number)
// 			.reduce((numA, numB) => numA * numB)
// 			.toString();
// 	}

// 	return counter;
// }

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

// const array = [1, 2, 3, 4];

// const newArray = array.map(number => number);
// console.log(newArray);

// const a = [3, 6];

// const r = a
// 	.map(number => number)
// 	.reduce((numA, numB) => numA * numB)
// 	.toString().length;
// console.log(r);

// function longest(s1, s2) {
// 	const arrayFromStringOne = s1.split("").filter((value, index, array) => array.indexOf(value) === index);
// 	const arrayFromStringTwo = s2.split("").filter((value, index, array) => array.indexOf(value) === index);
// 	// console.log(arrayFromStringOne, arrayFromStringTwo);
// 	const sortedArray = [...arrayFromStringOne, ...arrayFromStringTwo]
// 		.filter((value, index, array) => array.indexOf(value) === index)
// 		.sort((a, b) => a.localeCompare(b))
// 		.join("");
// 	console.log(sortedArray);
// 	return sortedArray;
// }

// longest("aretheyhere", "yestheyarehere");
// longest("loopingisfunbutdangerous", "lessdangerousthancoding");
// longest("inmanylanguages", "theresapairoffunctions");

// // .sort((firsrFriend, secondFriend) => firsrFriend.localeCompare(secondFriend));

// const list = ["Ivan", "Zorro", "Adams", "Petro", "Andry"];

// const sortedList = list.sort();
// console.log(sortedList);

// function generateHashtag(str) {
// 	const arrayPhrase = str.split(" ");

// 	if (arrayPhrase.length === 1) {
// 		for (let i = 0; i < arrayPhrase.length; i += 1) {
// 			if (arrayPhrase[i] === "Codewars") {
// 				arrayPhrase.splice(i, 1, "CodeWars");
// 				continue;
// 			}
// 		}
// 	} else {
// 		for (let i = 0; i < arrayPhrase.length; i += 1) {
// 			if (arrayPhrase[i] === "") {
// 				arrayPhrase.splice(i, 1);
// 				continue;
// 			}
// 			arrayPhrase[i] = arrayPhrase[i][0].toUpperCase() + arrayPhrase[i].substring(1);
// 		}
// 	}

// 	let newStr = arrayPhrase.join("");

// 	if (newStr.length >= 140 || newStr.length === 0) {
// 		return false;
// 	}

// 	newStr = "#" + arrayPhrase.join("");

// 	return newStr;
// }

// console.log(generateHashtag("Codewars is nice"));
// console.log(generateHashtag("        Do We have A Hashtag     "));
// console.log(generateHashtag(""));
// console.log(generateHashtag("Codewars is nice"));
// console.log(generateHashtag("Codewars"));

// function findOdd(A) {
// 	let arrayValues = 0;

// 	for (let i = 0; i < A.length; i += 1) {
// 		const arrayWithValue = A.filter(number => number === A[i]);

// 		if (arrayWithValue.length % 2 !== 0) {
// 			return A[i];
// 		}
// 	}
// 	return 0;
// }

// const findOdd = A => A.filter(x => A);
// const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 !== 0);

// // const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
// // const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
// // const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
// console.log(findOdd([10]));
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
// console.log(findOdd([0]));

// function foo() {
// 	console.log(this);
// }

// foo(1);

// const petya = {
// 	username: "Petya",
// 	showThis() {
// 		console.log(this);
// 	},
// 	showName() {
// 		console.log(this.username);
// 	},
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// function showThis() {
// 	console.log("this in showThis: ", this);
// }

// // showThis();

// const user = {
// 	username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();

// const customer = {
// 	firstName: "Jacob",
// 	lastName: "Mercer",
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	// callback() - це виклик методу getFullName без об'єкта
// 	console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// const showThis = () => {
// 	console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
// 	username: "Mango",
// };
// user.showContext = showThis;

// console.log(user);

// user.showContext(); // this in showThis: window

// const hotel = {
// 	username: "Resort hotel",

// 	name: (foo = () => console.log("this in foo: ", this)),
// };

// hotel.foo();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// function longestConsec(strarr, k) {
// 	let newArray = [];
// 	let totalArray = [];
// 	let finalArray = [];
// 	let result = "";

// 	if (k <= 0 || strarr.length < k) {
// 		return result;
// 	}

// 	// console.log(strarr);

// 	for (let i = 0; i <= strarr.length - k; i += 1) {
// 		// console.log(strarr[i]);
// 		newArray = strarr.slice(i, k + i);
// 		totalArray.push(newArray);
// 	}

// 	// console.log(totalArray);

// 	for (let i = 0; i < totalArray.length; i += 1) {
// 		finalArray.push(totalArray[i].join(""));
// 	}

// 	console.log(finalArray);

// 	for (let i = 1; i < finalArray.length; i += 1) {
// 		console.log(
// 			`Порівнюємо ${finalArray[i - 1]}:${finalArray[i - 1].length} та ${finalArray[i]}:${finalArray[i].length}`,
// 		);
// 		let firstValue = finalArray[i - 1];
// 		let secondValue = finalArray[i];

// 		if (firstValue.length > secondValue.length) {
// 			finalArray[i] = firstValue;
// 			finalArray[i - 1] = secondValue;
// 		}
// 		console.log(finalArray);
// 		result = finalArray[finalArray.length - 1];
// 	}

// 	return result;
// }

// // console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// // console.log(
// // 	longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2),
// // );
// // console.log(longestConsec([], 3));
// console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2));

// function arrayDiff(a, b) {
// 	const newArray = [];
// 	// for (let i = 0; i < b.length; i += 1) {
// 	// 	for (let k = 0; k < a.length; k += 1) {
// 	// 		if (a[k] == b[i]) {
// 	// 			a.splice(k, 1);
// 	// 			console.log(a);
// 	// 		}
// 	// 	}
// 	// }

// 	for (let i = 0; i < a.length; i += 1) {
// 		if (!b.includes(a[i])) {
// 			newArray.push(a[i]);
// 		}
// 	}

// 	return newArray;
// }

// console.log(arrayDiff([1, 2, 2, 2, 2, 2, 3], [2, 3]));

// function likes(names) {
// 	if (names.length === 0) {
// 		return "no one likes this";
// 	} else if (names.length === 1) {
// 		return `${names[0]} likes this`;
// 	} else if (names.length === 2) {
// 		return `${names[0]} and ${names[1]} like this`;
// 	} else if (names.length === 3) {
// 		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	} else {
// 		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// 	}
// }

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Jacob", "Mark", "Max"]));

// function sortArray(array) {
// 	function compare(comparedValue) {
// 		for (let j = array.indexOf(comparedValue) + 1; j < array.length; j += 1) {
// 			let firstValue = comparedValue;
// 			let secondValue = array[j];

// 			if (secondValue % 2 !== 0 && firstValue > secondValue) {
// 				console.log(`Поівнюємо ${comparedValue} і ${array[j]}`);
// 				array[j] = firstValue;
// 				array[array.indexOf(comparedValue)] = secondValue;
// 				console.log(array);
// 				return array;
// 			}
// 		}
// 	}

// 	for (let i = 0; i < array.length; i += 1) {
// 		console.log(`Коло ${i}`);

// 		for (let k = 1; k < array.length; k += 1) {
// 			let firstValue = array[k - 1];
// 			let secondValue = array[k];

// 			if (firstValue % 2 !== 0 && secondValue % 2 !== 0 && firstValue > secondValue) {
// 				console.log(`Поівнюємо ${array[k - 1]} і ${array[k]}`);
// 				array[k] = firstValue;
// 				array[k - 1] = secondValue;
// 				console.log(array);
// 			} else if (firstValue % 2 !== 0) {
// 				compare(firstValue);
// 			}
// 		}
// 	}

// 	return array;
// }

// sortArray([5, 3, 2, 8, 1, 4]);
// sortArray([5, 3, 1, 8, 0]);
// sortArray([]);

// function sortArray(array) {
// 	for (let i = 0; i < array.length; i += 1) {
// 		let firstValue = array[i];
// 		// console.log(firstValue);
// 		if (firstValue % 2 === 0) {
// 			continue;
// 		}
// 		for (let k = array.indexOf(firstValue) + 1; k < array.length; k += 1) {
// 			console.log(k);
// 			let secondValue = array[k];

// 			if (secondValue % 2 === 0) {
// 				continue;
// 			}

// 			if (firstValue > secondValue) {
// 				console.log(`Поівнюємо ${firstValue} і ${secondValue}`);
// 				array[k] = firstValue;
// 				array[array.indexOf(firstValue)] = secondValue;
// 				console.log(array);
// 			}
// 		}
// 	}

// 	return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// // console.log(sortArray([5, 3, 1, 8, 0]));
// // console.log(sortArray([]));

// function greetGuest(greeting) {
// 	console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
// 	username: "Манго",
// };
// const poly = {
// 	username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо");
// greetGuest.call(poly, "З прибуттям");

// function greet(clientName) {
// 	return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
// 	service: "Steam",
// };

// const steamGreeter = greet.bind(steam);

// console.log(steamGreeter("Манго")); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
// 	service: "Gmail",
// };

// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter("Полі")); // "Полі, ласкаво просимо в «Gmail»."

// function grret(value) {
// 	return `${value} ${this.name}`;
// }

// const cola = { name: "Nikolay" };

// const privet = grret.bind(cola);

// console.log(privet("Це я передав"));

// function greet(name) {
// 	console.log(`hello ${name}`);
// }

// function registerGuest(name, callback) {
// 	console.log(`Ласкаво просимо ${name}`);
// 	callback(name);
// }

// registerGuest("Nikolay", greet);

// function registerGuest(name, callback) {
// 	console.log(`Ласкаво просимо ${name}`);
// 	callback(name);
// }

// registerGuest("Nikolay", function greet(name) {
// 	console.log(`hello ${name}`);
// });

// function processCall(recipient, onAvailable, onNotAvailable) {
// 	// Імітуємо доступність абонента випадковим числом
// 	const isRecipientAvailable = Math.random() > 0.5;

// 	if (!isRecipientAvailable) {
// 		onNotAvailable(recipient);
// 		return;
// 	}

// 	onAvailable(recipient);
// }

// function takeCall(name) {
// 	console.log(`З'єднуємо з ${name}, очікуйте...`);
// 	// Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
// 	console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
// 	// Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
// 	console.log(`Абонент ${name} недоступний, записуємо голограму.`);
// 	// Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// function queueTime(customers, n) {
// 	if (customers.length === 0) {
// 		return 0;
// 	}

// 	if (n === 1) {
// 		const totalTime = customers.reduce((previousValue, customer) => {
// 			return (previousValue += customer);
// 		});
// 		return totalTime;
// 	}

// 	if (n >= customers.length) {
// 		return Math.max(...customers);
// 	}

// 	let totalTime;
// 	for (let i = 0; i < customers.length; i += n) {
// 		// console.log(customers[i]);
// 		for (let k = Math.ceil(customers.length / n); k < customers.length; k += 1) {
// 			console.log(n);
// 			console.log(customers[k]);
// 			console.log(Math.max(...customers.slice(i, k)));
// 			totalTime = Math.max(customers.slice(i, k));
// 			console.log(totalTime);
// 		}
// 	}
// }

// // console.log(queueTime([], 1));
// // console.log(queueTime([1, 2, 3, 4], 1));
// console.log(queueTime([2, 3, 10], 2));
// // console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
// // console.log(queueTime([1, 2, 3, 4, 5], 100));-1

// function solution(string) {
// 	string = string
// 		.split("")
// 		.map(element => {
// 			if (element === element.toUpperCase()) {
// 				element = " " + element;
// 				console.log(element);
// 			}
// 			return element;
// 		})
// 		.join("");

// 	console.log(string);

// const arrayFromString = string.split("");
// console.log(arrayFromString);

// const newArray = [];

// arrayFromString.forEach(function (letter, index) {
// 	if (letter !== letter.toUpperCase()) {
// 		newArray.push(letter);
// 	} else {
// 		newArray.push(" ", letter);
// 	}
// });

// console.log(newArray.join(""));

// 	// return newArray.join("");
// }

// solution("camelCasing");
// // solution("camelCasingTest");

// function greet(clientName) {
// 	return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
// 	service: "Steam",
// };

// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter);

// console.log(steamGreeter("Nikolay"));

// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// const animal = {
// 	legs: 4,
// };

// const dog = Object.create(animal);

// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog));

// class User {
// 	constructor(name, email) {
// 		this.name = name;
// 		this.emai = email;
// 	}
// }

// const mango = new User("Mango", `nnn@nnn.net`);
// console.log(mango);

// class User {
// 	// Необов'язкове оголошення публічних властивостей
// 	name;
// 	// Обов'язкове оголошення приватних властивостей
// 	#email;

// 	constructor({ name, email }) {
// 		this.name = name;
// 		this.#email = email;
// 	}

// 	getEmail() {
// 		return this.#email;
// 	}

// 	changeEmail(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// const mango = new User({
// 	name: "Манго",
// 	email: "mango@mail.com",
// });

// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість

// const doMath = function (a, b, callback) {
// 	const result = callback(a, b);
// 	return result;
// };

// const add = function (x, y) {
// 	return x + y;
// };

// console.log(doMath(1, 1, add));

// const doMath = function (a, b, callback) {
// 	const result = callback(a, b);
// 	console.log(result);
// };

// const add = function (x, y) {
// 	return x + y;
// };

// doMath(1, 1, add);

// const rounder = function (places) {
// 	console.log(places);
// 	return function (number) {
// 		console.log(number.toFixed(places));
// 	};
// };

// const round2 = rounder(2);
// const round3 = rounder(3);
// const round4 = rounder(4);
// const round5 = rounder(5);

// round2(1.55555);
// round3(1.55555);
// round4(1.55566);
// round5(1.55555);

// const User = function ({ email, password } = {}) {
// 	this.email = email;
// 	this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
// 	this.email = newMail;
// };

// const mango = new User({ email: "mango@email.com", password: 111 });

// console.log(mango);

// mango.changeEmail("nnv2006@ukr.net");

// console.log(mango);

// АВТОПЕРЕВІРКА 5
// ЗАВДАННЯ 01/20
// КОНТЕКСТ ВИКЛИКУ ФУНКЦІЇ

// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	// Change code below this line

// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},

// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// 	// Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// ЗАВДАННЯ 02/20
// ЗАДАЧА: АКАУНТ КОРИСТУВАЧА

// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	// Change code below this line

// 	getBalance() {
// 		return this.balance;
// 	},

// 	getDiscount() {
// 		return this.discount;
// 	},

// 	setDiscount(value) {
// 		this.discount = value;
// 	},

// 	getOrders() {
// 		return this.orders;
// 	},

// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},

// 	// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ЗАВДАННЯ 03/20
// ЗАДАЧА: ІСТОРІЯ ЗАМОВЛЕНЬ

// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line

// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},

// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);
// 		const uniqueEmails = new Set(emails);
// 		return [...uniqueEmails];
// 	},

// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// const array = [1, 1, 1, 2, 2, 2, 3, 3, 3];

// const uniqueArray = new Set(array);
// console.log(uniqueArray);

// ЗАВДАННЯ 04/20
// ПРОТОТИП ОБ'ЄКТА

// const parent = {
// 	name: "Stacey",
// 	surname: "Moore",
// 	age: 54,
// 	heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);
// console.log(child);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(parent.isPrototypeOf(child));

// ЗАВДАННЯ 05/20
// ЗАДАЧА: ЛАНЦЮЖОК ПРОТОТИПІВ

// const ancestor = {
// 	name: "Paul",
// 	age: 83,
// 	surname: "Dawson",
// 	heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// // ЗАВДАННЯ 06/20
// // ОГОЛОШЕННЯ КЛАСУ

// class Car {}

// console.log(new Car());

// ЗАВДАННЯ 07/20
// КОНСТРУКТОР КЛАСУ

// class Car {
// 	class Car {
// 	constructor(brand, model, price) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// }
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan", "Murano", 31700));

// ЗАВДАННЯ 08/20
// ОБ'ЄКТ ПАРАМЕТРІВ

// class Car {
// 	// Change code below this line
// 	constructor({ brand, model, price }) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	// Change code above this line
// }

// ЗАВДАННЯ 09/20
// МЕТОДИ КЛАСУ

// class Car {
// 	constructor({ brand, model, price }) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	// Change code below this line

// 	getPrice() {
// 		return this.price;
// 	}

// 	changePrice(newPrice) {
// 		this.price = newPrice;
// 	}

// 	// Change code above this line
// }

// ЗАВДАННЯ 10/20
// ЗАДАЧА: СКЛАД;
// class Storage {
// 	constructor(items) {
// 		this.items = items;
// 	}

// 	getItems() {
// 		return this.items;
// 	}

// 	addItem(newItem) {
// 		this.items.push(newItem);
// 	}

// 	removeItem(itemToRemove) {
// 		this.items.splice(this.items.indexOf(itemToRemove), 1);
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ЗАВДАННЯ 11/20
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ

// class StringBuilder {
// 	constructor(initialValue) {
// 		this.value = initialValue;
// 	}

// 	getValue() {
// 		return this.value;
// 	}

// 	padEnd(str) {
// 		this.value = `${this.value}${str}`;
// 		return this.value;
// 	}

// 	padStart(str) {
// 		this.value = `${str}${this.value}`;
// 		return this.value;
// 	}

// 	padBoth(str) {
// 		this.value = `${str}${this.value}${str}`;
// 		return this.value;
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// // console.log(builder.getValue()); // "."

// console.log(builder.padStart("^"));
// console.log(builder.getValue()); // "^."
// console.log(builder.padEnd("^"));
// console.log(builder.getValue()); // "^.^"
// console.log(builder.padBoth("="));
// console.log(builder.getValue()); // "=^.^="

// ЗАВДАННЯ 12/20
// ПРИВАТНІ ВЛАСТИВОСТІ

// class Car {
// 	// Change code below this line
// 	#brand;

// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}

// 	getBrand() {
// 		return this.#brand;
// 	}

// 	changeBrand(newBrand) {
// 		this.#brand = newBrand;
// 		return this.#brand;
// 	}

// 	// Change code above this line
// }

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 58900 });
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });

// console.log(audi);
// console.log(audi.getBrand());

// console.log(audi.changeBrand("Honda"));
// console.log(audi);

// ЗАВДАННЯ 13/20
// ЗАДАЧА: СКЛАД 2.0

// class Storage {
// 	// Change code below this line

// 	#items;

// 	constructor(items) {
// 		this.#items = items;
// 	}

// 	getItems() {
// 		return this.#items;
// 	}

// 	addItem(newItem) {
// 		this.#items.push(newItem);
// 	}

// 	removeItem(itemToRemove) {
// 		this.#items = this.#items.filter(item => item !== itemToRemove);
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ЗАВДАННЯ 14/20
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ 2.0

// class StringBuilder {
// 	// Change code below this line
// 	#value;

// 	constructor(initialValue) {
// 		this.#value = initialValue;
// 	}

// 	getValue() {
// 		return this.#value;
// 	}

// 	padEnd(str) {
// 		this.#value += str;
// 	}

// 	padStart(str) {
// 		this.#value = str + this.#value;
// 	}

// 	padBoth(str) {
// 		this.padStart(str);
// 		this.padEnd(str);
// 	}
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

// ЗАВДАННЯ 15/20
// ГЕТЕРИ ТА СЕТЕРИ

// class Car {
// 	// Change code below this line
// 	#brand;
// 	#model;
// 	#price;

// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.#model = model;
// 		this.#price = price;
// 	}

// 	getBrand() {
// 		return this.#brand;
// 	}

// 	changeBrand(newBrand) {
// 		this.#brand = newBrand;
// 	}

// 	get brand() {
// 		return this.#brand;
// 	}

// 	get model() {
// 		return this.#model;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set brand(newBrand) {
// 		this.#brand = newBrand;
// 	}

// 	set model(newModel) {
// 		this.#model = newModel;
// 	}

// 	set price(newPrice) {
// 		this.#price = newPrice;
// 	}

// 	// Change code above this line
// }

// ЗАВДАННЯ 16/20
// СТАТИЧНІ ВЛАСТИВОСТІ

// console.log(Array.prototype);

// class Car {
// 	// Change code below this line

// 	static MAX_PRICE = 50000;

// 	#price;

// 	constructor({ price }) {
// 		this.#price = price;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set price(newPrice) {
// 		if (newPrice <= Car.MAX_PRICE) {
// 			this.#price = newPrice;
// 		}
// 	}
// 	// Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ЗАВДАННЯ 17/20
// СТАТИЧНІ МЕТОДИ

// class Car {
// 	static #MAX_PRICE = 50000;
// 	// Change code below this line
// 	static checkPrice(price) {
// 		if (price > Car.#MAX_PRICE) {
// 			return "Error! Price exceeds the maximum";
// 		} else {
// 			return "Success! Price is within acceptable limits";
// 		}
// 	}
// 	// Change code above this line
// 	constructor({ price }) {
// 		this.price = price;
// 	}
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(audi);

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ЗАВДАННЯ 18/20
// НАСЛІДУВАННЯ КЛАСІВ

// class User {
// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// // Change code below this line

// class Admin extends User {
// 	static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// ЗАВДАННЯ 19/20
// КОНСТРУКТОР ДОЧІРНЬОГО КЛАСУ

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// class Admin extends User {
// 	// Change code below this line

// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};

// 	constructor({ email, accessLevel }) {
// 		super(email);
// 		this.accessLevel = accessLevel;
// 	}

// 	// Change code above this line
// }

// const mango = new Admin({
// 	email: "mango@mail.com",
// 	accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ЗАВДАННЯ 20/20
// МЕТОДИ ДОЧІРНЬОГО КЛАСУ

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// class Admin extends User {
// 	// Change code below this line

// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};

// 	constructor({ email, accessLevel }) {
// 		super(email);
// 		this.accessLevel = accessLevel;
// 		this.blacklistedEmails = [];
// 	}

// 	blacklist(email) {
// 		this.blacklistedEmails.push(email);
// 	}

// 	isBlacklisted(email) {
// 		return this.blacklistedEmails.includes(email);
// 	}

// 	// Change code above this line
// }

// const mango = new Admin({
// 	email: "mango@mail.com",
// 	accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// CODEWARS

// function cakes(recipe, available) {
// 	if (Object.keys(available).length < Object.keys(recipe).length) {
// 		return 0;
// 	}

// 	const array = [];

// 	for (let key in recipe) {
// 		if (!Object.keys(available).includes(key)) {
// 			return 0;
// 		} else if (available[key] / recipe[key] < 1) {
// 			return 0;
// 		} else {
// 			array.push(Math.floor(available[key] / recipe[key]));
// 		}
// 	}

// 	return Math.min(...array);
// }

// console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
// console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));

// function isValidWalk(walk) {
// 	if (walk.length !== 10) {
// 		return false;
// 	}

// 	for (let i = 1; i < walk.length; i += 1) {
// 		if (walk[i - 1] === walk[i]) {
// 			return false;
// 		}
// 	}

// 	if (walk[walk.lastIndexOf(walk[0]) + 1] === walk[walk.length - 1]) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]));
// console.log(isValidWalk(["w"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

// const euros = [29.76, 41.85, 46.5];
// const doubled = euros.reduce((total, amount) => {
// 	total.push(amount * 2);
// 	return total;
// }, []);

// console.log(doubled);

// const fruitBasket = [
// 	"banana",
// 	"cherry",
// 	"orange",
// 	"apple",
// 	"cherry",
// 	"orange",
// 	"apple",
// 	"banana",
// 	"cherry",
// 	"orange",
// 	"fig",
// ];

// const count = fruitBasket.reduce((tally, fruit) => {
// 	if (!tally[fruit]) {
// 		tally[fruit] = 1;
// 	} else {
// 		tally[fruit] += 1;
// 	}

// 	console.log(tally);
// 	return tally;
// }, {});

// const data = [
// 	{ a: "happy", b: "robin", c: ["blue", "green"] },
// 	{ a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
// 	{ a: "sad", b: "goldfish", c: ["green", "red"] },
// ];

// const colors = data.reduce((colorArray, element) => {
// 	element.c.forEach(color => {
// 		colorArray.push(color);
// 	});
// 	return colorArray;
// }, []);

// console.log(colors);

// const colors = data.reduce((total, element) => {
// 	element.c.forEach(color => {
// 		if (!total.includes(color)) {
// 			total.push(color);
// 		}
// 	});
// 	return total;
// }, []);

// console.log(colors);

// const colors = data.reduce((total, amount) => {
// 	amount.c.forEach(color => {
// 		total.push(color);
// 	});
// 	return total;
// }, []);

// console.log(colors);

// function moveZeros(arr = []) {
// 	const zeroArray = arr.filter(element => element === 0);
// 	const noZeroArray = arr.filter(element => element !== 0);
// 	console.log(zeroArray);
// 	console.log(noZeroArray);
// 	return noZeroArray.concat(zeroArray);
// }

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// const mult = item => item * 2;

// const array = [1, 2, 3, 4, 5, 6, 7];

// const newArray = array.map(mult);

// console.log(newArray);

// const name = "Sammy";

// const nameArray = Array.prototype.map.call(name, eachLetter => {
// 	return eachLetter;
// });

// console.log(nameArray);

// const myUsers = [
// 	{ name: "shark", likes: "ocean" },
// 	{ name: "turtle", likes: "pond" },
// 	{ name: "otter", likes: "fish biscuits" },
// ];

// const userByLikes = myUsers.map(item => {
// 	const container = {};
// 	container[item.name] = item.likes;
// 	container.age = item.name.length * 10;
// 	container.hobby = "football";

// 	return container;
// });

// console.log(userByLikes);

// const usersByLikes = myUsers.map(item => {
// 	const container = {};

// 	container[item.name] = item.likes;
// 	container.age = item.name.length * 10;

// 	return container;
// });

// console.log(usersByLikes);

// const word = "abcdefg";

// // const array = word.split("");
// // console.log(array);

// // const array = Array.prototype.map.call(word, eachElement => {
// // 	console.log(eachElement);
// // 	return eachElement;
// // });

// const find = Array.prototype.filter.call(word, element => {
// 	if (element === "a") {
// 		console.log("ЗНАЙШЛИ!!!");
// 		return element;
// 	}
// });

// console.log(find);

// const animal = { leg: 4 };

// const dog = Object.create(animal);

// console.log(dog);

// console.log(dog.leg);

// console.log(dog.hasOwnProperty("leg"));

// dog.head = 1;

// console.log(dog);
// console.log(animal);

// const objC = { z: 5 };
// const objB = Object.create(objC);

// console.log(objC);

// console.log(objB);

// console.dir(Object);

// console.dir(function () {});

// class Car {
// 	static Colors = {
// 		RED: "red",
// 		BLACK: "black",
// 		BLUE: "blue",
// 	};

// 	constructor(model, color) {
// 		this._model = model;
// 		this._color = color;
// 	}

// 	get color() {
// 		return this._color;
// 	}

// 	set color(newColor) {
// 		this._color = newColor;
// 	}

// 	get model() {
// 		return this._model;
// 	}

// 	set model(newModel) {
// 		this._model = newModel;
// 	}
// }

// // console.log(Car);

// const nissan = new Car("Nissan", Car.Colors.RED);

// class Tractor extends Car {
// 	constructor(model, color, size) {
// 		super(model, color);
// 		this.size = big;
// 	}
// }

// let facrotialValue;

// const factorial = number => {
// 	if (number < 0) {
// 		return "Введіть значенні білше за нуль";
// 	}
// 	if (number === 0) {
// 		return 1;
// 	}
// 	if (number > 0) {
// 		return (facrotialValue = number * factorial(number - 1));
// 	}

// 	return facrotialValue;
// };

// alert(factorial(prompt("Введіть число")));

// Факторіал

// let facrotialValue;

// function factorial(x) {
//   console.log(`Знайти факторіал ${x}!`);
//   if (x < 0) {
//     return;
//   }
//   if (x === 0) {
//     facrotialValue = 1;
//     return facrotialValue;
//   }
//   if (x > 0) {
//     return (facrotialValue = x * factorial(x - 1));
//   }
//   return facrotialValue;
// }

// factorial(Math.round(Math.random() * (5 - 1) + 1));
// console.log(facrotialValue);

// function firstNonRepeatingLetter(s) {
// 	if (s.length === 0) {
// 		return "";
// 	}
// 	const letterArray = Array.prototype.map.call(s, letter => letter);
// 	const uniqueLetter = letterArray.filter((letter, index, array) => {
// 		if (array.indexOf(letter) === array.lastIndexOf(letter)) {
// 			return letter;
// 		}
// 	});

// 	if (uniqueLetter.length === 1) {
// 		return uniqueLetter.join();
// 	}
// 	if (uniqueLetter.length > 1) {
// 		return uniqueLetter[0];
// 	}
// }

// console.log(firstNonRepeatingLetter("stress"));

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "48px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

//===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

// const container = document.querySelector(".container");
// console.log(container);

// const newList = document.createElement("ul");
// newList.textContent = "Я люблю своїх доньок";
// container.before(newList);

// console.log(newList);
// newList.remove();
// console.log(document);

// =============================================================

// class User {
// 	#email;

// 	constructor({ login, password, email }) {
// 		this.login = login;
// 		this.password = password;
// 		this.#email = email;
// 	}

// 	#changeEmail(newEmail) {
// 		this.#email = newEmail;
// 	}

// 	// get email() {
// 	// 	console.log(this.#email);
// 	// }

// 	// set email(newEmail) {
// 	// 	this.#email = newEmail;
// 	// }
// }

// // console.log(User.#changeEmail());

// console.dir(User);
// const newUser = new User({ login: "Nilolay", password: 156, email: "123@com" });

// newUser.email = "nnv2006@ukr.net";

// console.log(newUser);

// class Player extends User {
// 	constructor({ login, password, age }) {
// 		super({ login, password });
// 		this.age = age;
// 	}
// }

// const newPlayer = new Player({ login: "nnv2006", password: 1567, age: 31 });

// newPlayer.changeEmail("ppp@com");

// console.log(newPlayer);

// // console.log(newPlayer);

// const User = { surname: "Naumenko" };
// console.log(User);

// const array = [1, 2, 3];

// console.log(array);

// function foo(value) {
// 	console.log(value);
// }

// foo(5);

// console.log(foo);

// const UserNew = function (name) {};
// console.log(UserNew);

// const User = function ({ email, password } = {}) {
// 	(this.email = email), (this.password = password);
// };

// console.log(User.prototype);

// const mango = new User({ email: "nnv2006@ukr.net", password: 11111 });

// console.log(mango);

// const objA = { x: 5 };

// console.log(objA);

// console.log(objA.__proto__ === Object.prototype);

// class Car1 {
// 	constructor() {
// 		console.log(this);

// 		(this.price = 5), (this.b = 10);
// 	}

// 	changePrice(newPrice) {
// 		this.price = newPrice;
// 	}
// }

// // console.log(Car1);
// console.dir(Car1);
// const carInstance = new Car1();
// console.log(carInstance);

// const foo = {
// 	x: 10,
// 	y: 20,
// };

// console.log(foo);

// const objC = { z: 5 };

// console.log("objC-->", objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log("objB-->", objB);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log("objA-->", objA);

// const array = [];

// console.log(array);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lasttListItem = list.lastElementChild;
// console.log(lasttListItem);

// const listItems = list.children;
// console.log(listItems);

// const test = lasttListItem.previousElementSibling;
// console.log(test);

// console.log(document);

// const listWithId = document.querySelector("#menu");

// listWithId.style.fontSize = "30px";
// listWithId.style.color = "red";

// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = listWithId.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = listWithId.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = listWithId.firstElementChild;
// console.log(firstMenuItem);

// firstMenuItem.style.color = "blue";

// const lastMenuChild = listWithClass.lastElementChild;

// lastMenuChild.style.fontSize = "50px";
// lastMenuChild.style.color = "purple";

// const preLastElementChild = lastMenuChild.previousElementSibling;
// preLastElementChild.style.textTransform = "uppercase";

// const message = document.querySelector(".materialize-textarea");
// console.log(message);

// message.style.borderColor = "purple";
// message.style.borderWidth = "2px";
// message.style.borderRadius = "5px";

// console.log(message.value);

// // ==========================================

// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink);
// console.log(activeLink.href);

// // ==========================================

// const imageRef = document.querySelector(".image");
// console.log(imageRef.src);
// imageRef.src =
// 	"https://st2.depositphotos.com/2001755/5408/i/950/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg";

// const text = document.querySelector(".article-text");

// console.log(text.textContent);

// text.textContent = "Ukraine is The Best!!!!!";

// console.log(text.textContent);

// ================================================

// const text = document.querySelector("#paragraph");
// console.log(text);

// console.log(text.classList.contains("text"));

// text.classList.add("new");

// text.classList.replace("new", "new-new");

// ================================================

// const image = document.querySelector(".image");
// console.log(image);

// console.log(image.hasAttribute("src"));
// console.log(image.getAttribute("src"));
// image.setAttribute("width", "350");
// image.removeAttribute("src");
// console.log(image.attributes);

// ================================================

// const saveBtn = document.querySelector(".editor button[data-action=save]");
// console.log(saveBtn);

// const closeBtn = document.querySelector(".editor button[data-action=close]");
// console.log(closeBtn);

// console.log(saveBtn.dataset.action);
// console.log(closeBtn.dataset.action);

// const dishes = document.querySelectorAll(".dishes>li");
// console.log(dishes);

// dishes.forEach(element => console.log(element.dataset.id));

// ================================================

// const titleListRef = document.createElement("h2");
// titleListRef.textContent = "It is new title";

// const listRef = document.createElement("ul");
// listRef.classList.add = "list";

// const listItemRef = document.createElement("li");
// listItemRef.classList.add = "list-title";
// listItemRef.textContent = "new item";

// listRef.appendChild(listItemRef);

// document.body.prepend(titleListRef, listRef);

// console.log(document);

// titleListRef.remove();

// ================================================

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// console.log(title);

// const link = document.querySelector(".link");
// console.log(link.innerHTML);
// // title.innerHTML = "";
// console.log(link.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const listRef = document.querySelector(".list");
// console.log(listRef);

// const items = technologies.map(element => `<li>${element}</li>`).join("");
// // console.log(items);

// listRef.innerHTML = items;

// listRef.insertAdjacentHTML("beforeend", items);

// ===============ПОДІЇ===============================

// const button = document.createElement("button");
// button.type = "button";
// button.classList.add("button");
// button.textContent = "Button";
// button.style.cursor = "pointer";

// document.body.prepend(button);

// console.log(document.body);

// const handleClick = () => console.log("Натиснув кнопку");

// button.addEventListener("click", handleClick);

// console.log(document);

// const buttonSingle = document.querySelector("#single");
// // console.log(buttonSingle);

// const buttonMultiple = document.querySelector("#multiple");
// // console.log(buttonMultiple);

// const handleClick = event => {
// 	// console.log("click event listener callback");
// 	console.log("event:", event);
// 	console.log(event.type);
// 	console.log(event.currentTarget);
// };

// buttonSingle.addEventListener("click", handleClick);

// // ----------

// const firstCallback = () => console.log("Its first callback");
// const secondtCallback = () => console.log("Its second callback");
// const thirdCallback = () => console.log("Its third callback");

// buttonMultiple.addEventListener("click", firstCallback);
// buttonMultiple.addEventListener("click", secondtCallback);
// buttonMultiple.addEventListener("click", thirdCallback);

// const formRef = document.querySelector(".register-form");
// console.log(formRef);

// formRef.addEventListener("submit", event => {
// 	event.preventDefault();
// });

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// console.log(clearLogBtn);

// document.addEventListener("keydown", event => {
// 	console.log("key: ", event.key);
// 	console.log("code: ", event.code);
// });

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);

// function logMessage({ type, key, code }) {
// 	const markup = `<div class="log-item">
// 	<span class = "chip"> ${keypressCounter}</span>
// 	<ul>
// 	<li><b>Event</b>:${type}</li>
// 	<li><b>Key</b>:${key}</li>
// 	<li><b>Code</b>:${code}</li>
// 	</ul>
// 	</div>`;

// 	logList.insertAdjacentHTML("afterbegin", markup);

// 	if (type === "keydown") {
// 		incrementKeypressCounter();
// 	}
// }

// function reset() {
// 	keypressCounter = 1;
// 	logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
// 	keypressCounter += 1;
// }

// console.log(keypressCounter);

// document.addEventListener("keydown", event => {
// 	console.log(event);
// 	event.preventDefault();
// 	if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
// 		console.log("«Ctrl + s» or «Command + s» combo");
// 	}
// });

// console.log(document);

// const form = document.querySelector(".form");

// // console.log(form);

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
// 	event.preventDefault();
// 	// console.log(event);

// 	const test = login;

// 	console.log(test);

// 	// console.log(login.value);
// 	// console.log(password.value);
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
// 	const selectedOptionValue = select.value;
// 	const selectedOptionIndex = select.selectedIndex;
// 	const selectedOptionText = select.options[selectedOptionIndex].text;

// 	console.log("select:", select);
// 	console.log("selectedOptionValue:", selectedOptionValue);
// 	console.log("selectedOptionIndex:", selectedOptionIndex);
// 	console.log("selectedOptionText:", selectedOptionText);

// 	textOutput.textContent = selectedOptionText;
// 	valueOutput.textContent = selectedOptionValue;
// }

// const setBtnRef = document.querySelector('[data-action="set"]');
// const removeBtnRef = document.querySelector('[data-action="remove"]');
// const inputRef = document.querySelector(".text-input");

// const onBtnClick = event => console.log(event);

// setBtnRef.addEventListener("click", onBtnClick);

// inputRef.addEventListener("focus", () => (inputRef.value = "focus now "));

// removeBtnRef.addEventListener("click", () => inputRef.getBoundingClientRect());

// inputRef.addEventListener("blur", () => (inputRef.value = "no focus now"));

// inputRef.addEventListener("input", event => {
// 	console.log(event.currentTarget.value);
// });

// const incrementBtn = document.querySelector(".incremen-button");
// const decrementBtn = document.querySelector(".decrement-button");
// const textValue = document.querySelector(".value");

// incrementBtn.addEventListener("click", onBtnIncrementClick);
// decrementBtn.addEventListener("click", onBtnDecrementClick);

// const counterValue = {
// 	value: 0,

// 	increment() {
// 		this.value += 1;
// 	},

// 	decrement() {
// 		this.value -= 1;
// 	},
// };

// function onBtnIncrementClick(event) {
// 	counterValue.increment();
// 	textValue.textContent = counterValue.value;
// }

// function onBtnDecrementClick(event) {
// 	counterValue.decrement();
// 	textValue.textContent = counterValue.value;
// }

// const decrementBtn = document.querySelector("[data-action=decrement]");
// const inrementBtn = document.querySelector("[data-action=increment]");
// const valueRef = document.querySelector("#value");

// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },

//   decrement() {
//     this.value -= 1;
//   },
// };

// inrementBtn.addEventListener("click", function () {
//   counterValue.increment();

//   valueRef.textContent = counterValue.value;
// });

// decrementBtn.addEventListener("click", function () {
//   counterValue.decrement();

//   valueRef.textContent = counterValue.value;
// });

// function factorial(n) {
// 	const facrotialValue = n => {
// 		let result;
// 		if (n === 0 || n === 1) {
// 			return (result = 1);
// 		} else {
// 			return (result = n * facrotialValue(n - 1));
// 		}
// 	};

// 	const quantityZero = facrotialValue(n);
// .reduce((counter, element) => {
// 	if (Number(element) === 0) {
// 		counter += 1;
// 	}
// 	return counter;
// }, 0);

// const quantityZero = fact.toString();

// console.log(quantityZero / 10);

// .reduce((counterZero, element) => {
// 	console.log(Number(element));
// 	if (Number(element) === 0) {
// 		counterZero += 1;
// 	}
// 	// console.log(counterZero);
// }, 0);

// return quantityZero;

// let result = n * factorial(n - 1);
// }

// console.log(factorial(6));
// console.log(factorial(100));

// console.log(factorial(-3));

// if (x < 0) {
//     return;
//   }
//   if (x === 0) {
//     facrotialValue = 1;
//     return facrotialValue;
//   }
//   if (x > 0) {
//     return (facrotialValue = x * factorial(x - 1));
//   }

// function zeros(n) {
// 	let counter = 0;
// 	while (n % 5 === 0) {
// 		counter += n / 5;
// 		n /= 5;
// 	}

// 	if (n % 5 !== 0) {
// 		counter += Math.floor(n / 5);
// 	}

// 	return counter;
// }

// console.log(zeros(6));

// const customer = {
// 	firstName: "Jacob",
// 	lastName: "Mercer",
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// // function makeMessage(callback) {
// // 	// callback() - це виклик методу getFullName без об'єкта
// // 	console.log(`Обробляємо заявку від ${callback()}.`);
// // }
// console.log(customer.getFullName("Nikolay")); // Буде помилка у виклику функції

// class User {
// 	#email;

// 	constructor(email) {
// 		this.#email = email;
// 	}

// 	get email() {
// 		return this.#email;
// 	}

// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// class ContentEditor extends User {
// 	// Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// const user = {
// 	name: "Nikolay",
// 	adress: {
// 		country: "Ukraine",
// 		city: "Kyiv",
// 		street: "Trostyanentskaya",
// 		house: 7,
// 	},

// 	get City() {
// 		console.log(this.adress.city);
// 	},
// };

// const {
// 	name,
// 	adress: { country: ourCountry, city, street, house = 8 },
// } = user;

// console.log(house);

// const dog = {
// 	name: "Mango",
// 	age: 3,
// 	isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// const settings = {
// 	theme: "dark",
// 	isAuthenticated: true,
// 	options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// console.log("HELLO");

// const title = document.createElement("h1");
// title.classList.add("title");
// title.textContent = "Hello";
// console.log(title);
// console.log(document);
// document.body.append(title);

// const buttonDecrement = document.querySelector(".decrement-button");
// const buttonIncrement = document.querySelector(".incremen-button");
// const valueRef = document.querySelector(".value");

// const counter = {
// 	value: 0,

// 	decrement() {
// 		this.value += 1;
// 	},

// 	increment() {
// 		this.value -= 1;
// 	},
// };

// console.log(buttonDecrement);
// buttonDecrement.addEventListener("click", () => {
// 	counter.decrement();
// 	valueRef.textContent = counter.value;
// });
// buttonIncrement.addEventListener("click", () => {
// 	counter.increment();
// 	valueRef.textContent = counter.value;
// });
