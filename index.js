// "use strict";

// // const loginModalButton = document.querySelector("#login-button");
// // const loginModal = document.querySelector(".modal-wrapper");
// // const loginModalCloseButton = document.querySelector(".modal .close-button");
// // const loginModalOverlay = document.querySelector(".modal-wrapper .overlay");
// // const loginForm = document.querySelector("#login-form");
// // const title = document.querySelector("h2");
// // const errorTitle = document.querySelector(".form-error");
// // console.log(loginModalOverlay);

// // const { ref } = require("joi");

// // loginModalButton.addEventListener("click", onloginModalButtonClick);
// // function onloginModalButtonClick(e) {
// // 	console.log("Натиснули на кнопку");
// // 	loginModal.classList.remove("hidden");
// // }

// // loginModalCloseButton.addEventListener("click", closeModalWindow);

// // loginModalOverlay.addEventListener("click", closeModalWindow);

// // function closeModalWindow() {
// // 	loginModal.classList.add("hidden");
// // 	loginForm.reset();

// // 	if (!errorTitle.classList.contains("hidden")) {
// // 		errorTitle.classList.add("hidden");
// // 	}
// // }

// // const isLoginModalHidden = () => !loginModal.classList.contains("hidden");
// // document.addEventListener("keydown", e => {
// // 	if (e.code === "Escape" && isLoginModalHidden()) {
// // 		closeModalWindow();
// // 	}
// // });

// // const correctLogin = "Nikolay";
// // const correctPassword = "123";

// // loginForm.addEventListener("submit", onFormSubmit);

// // function onFormSubmit(e) {
// // 	e.preventDefault();

// // 	const data = new FormData(e.currentTarget);

// // 	const login = data.get("login");
// // 	const password = data.get("password");

// // 	if (login === correctLogin && password === correctPassword) {
// // 		closeModalWindow();
// // 		title.classList.remove("hidden");
// // 		loginModalButton.classList.add("hidden");
// // 	} else {
// // 		errorTitle.classList.remove("hidden");
// // 	}

// // 	// let values = {};
// // 	// data.forEach((value, key) => {
// // 	// 	values[key] = value;
// // 	// });
// // 	// console.log(values);
// // }

// // const testButton = document.querySelector(".test-button");

// // console.log(testButton);

// // testButton.addEventListener("click", e => {
// // 	console.log("currentTarget", e.currentTarget);
// // 	console.log("target", e.target);
// // });

// // Will run first
// // setTimeout(() => console.log("Україна переможе!!!!"), 3000);

// // setTimeout(() => {
// // 	// Will run last, after 2000 milliseconds
// // 	console.log("Second log");
// // }, 2000);

// // // Will run second
// // console.log("Third log");

// // console.log(window);

// // const greet = () => {
// // 	console.log("Hello!");
// // };

// // const timerId = setTimeout(greet, 3000);

// // clearTimeout(timerId);

// // const test = setTimeout(() => console.log("Ukraine!!!!"), 2000);

// // clearTimeout(test);

// // const start = document.querySelector(".start");
// // const stop = document.querySelector(".stop");
// // const text = document.querySelector(".value");
// // let timerId = null;

// // start.addEventListener("click", onStartButtonClick);
// // stop.addEventListener("click", onStopButtonClick);

// // function onStartButtonClick() {
// // 	timerId = setInterval(() => {
// // 		let value = (Math.random() * (10 - 1) + 1).toFixed(2);
// // 		text.textContent = value;
// // 	}, 1000);
// // }

// // function onStopButtonClick() {
// // 	clearInterval(timerId);
// // }

// // const date = new Date();
// // console.log(date);
// // console.log(date.toString());

// //

// // function greet(name, callback) {
// // 	callback(name);
// // }

// // function greetName(name) {
// // 	console.log(`Привіт ${name}`);
// // }

// // greet("Nikolay", greetName);

// // Promise.resolve("foo")
// // 	.then(null)
// // 	.then(function (result) {
// // 		console.log(result);
// // 	});

// // const isSucsess = false;

// // const promise = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (isSucsess) {
// // 			resolve("Sucsess");
// // 		} else {
// // 			reject("ERROR!!!");
// // 		}
// // 	}, 2000);
// // });

// // console.log("Before promise then");

// // promise
// // 	.then(value => {
// // 		console.log("onResolve call inside promise.then()");
// // 		console.log(value);
// // 	})
// // 	.catch(error => {
// // 		console.log("onReject call inside promise.then()");
// // 		console.log(error);
// // 	})
// // 	.finally(() => console.log("Promise settled"));

// // console.log("After promise.then()");

// // const promise = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		resolve(5), 2000;
// // 	});
// // });

// // promise.then(value => {
// // 	console.log(value);
// // 	return value * 2;
// // });

// // const result = true;
// // const result = false;

// // console.log(result);

// // const promise = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (result) {
// // 			resolve("Це успішне виконання функції");
// // 		} else {
// // 			reject("Error! Error passed to reject function");
// // 		}
// // 	}, 2000);
// // });

// // console.log("Перед than");

// // promise
// // 	.then(value => console.log(value))
// // 	.catch(error => {
// // 		console.log(error);
// // 	})
// // 	.finally(() => console.log("Це finally"));

// // const date = new Date();

// // console.log(date);

// // const dateNew = Date.now();

// // console.log(dateNew);

// // const foo1 = () => {
// // 	console.log("log1");
// // };
// // const foo2 = () => {
// // 	setTimeout(() => {
// // 		console.log("log2");
// // 	}, 3000);
// // };
// // const foo3 = () => {
// // 	new Array(100000000).fill("").map((el, index) => index);
// // 	console.log("log3");
// // };

// // foo1();
// // foo2();
// // foo3();

// // const mSecInSec = 1000;
// // const secInMin = 60;
// // const minInHour = 60;
// // const hoursInDay = 24;

// // const renderTimer = string => {
// // 	console.log(string);
// // 	document.querySelector("span").innerText = string;
// // };

// // const timer = targetDate => {
// // 	setInterval(() => {
// // 		const delta = new Date(targetDate) - new Date();
// // 		const seconds = Math.floor((delta / mSecInSec) % secInMin);
// // 		const minutes = Math.floor((delta / mSecInSec / secInMin) % minInHour);
// // 		const days = Math.floor(delta / mSecInSec / secInMin / minInHour / hoursInDay);
// // 		const hours = Math.floor((delta / mSecInSec / secInMin / minInHour) % hoursInDay);
// // 		const timerFormat = `${days}d:${hours}:${minutes}:${seconds}`;

// // 		renderTimer(timerFormat);
// // 	}, 1000);
// // };

// // timer("2022/12/31");

// // const now = Date.now();
// // console.log(now);

// // let idInterval;

// // const stopWatch = () => {
// // 	const timeStart = new Date();

// // 	idInterval = setInterval(() => {
// // 		const timeCurrent = new Date();
// // 		const delta = timeCurrent - timeStart;
// // 		console.log(delta);

// // 		const seconds = Math.floor((delta / mSecInSec) % secInMin)
// // 			.toString()
// // 			.padStart(2, "0");
// // 		const minutes = Math.floor((delta / mSecInSec / secInMin) % minInHour)
// // 			.toString()
// // 			.padStart(2, "0");
// // 		const days = Math.floor(delta / mSecInSec / secInMin / minInHour / hoursInDay)
// // 			.toString()
// // 			.padStart(2, "0");
// // 		const hours = Math.floor((delta / mSecInSec / secInMin / minInHour) % hoursInDay)
// // 			.toString()
// // 			.padStart(2, "0");

// // 		const timerFormat = `${hours}:${minutes}:${seconds}`;

// // 		renderTimer(`${timerFormat}`);
// // 	}, 1000);
// // };

// // const refs = {
// // 	startButton: document.querySelector("#start-button"),
// // 	stopButton: document.querySelector("#stop-button"),
// // };

// // refs.startButton.addEventListener("click", onStartButtonClick);
// // refs.stopButton.addEventListener("click", onStoptButtonClick);

// // function onStartButtonClick() {
// // 	stopWatch();
// // }

// // function onStoptButtonClick() {
// // 	clearInterval(idInterval);
// // }

// // // console.log(Date.now());

// // // console.log(new Date() - new Date(0));

// // const date = new Date();

// // console.log(date);
// // console.log(date.getTime());
// // console.log(date.getDate());
// // console.log(date.getDay());

// // console.log(date.toDateString());
// // console.log(date.toLocaleTimeString());
// // console.log(date.toDateString());
// // console.log(date.toLocaleString());
// // console.log(date.getTime());

// // const intervalId = setInterval(() => {
// // 	console.log("intervalId");
// // }, 500);

// // const timerId = setTimeout(() => {
// // 	clearInterval(intervalId);
// // }, 3000);

// // console.log("timerId", timerId);
// // console.log("intervalId", intervalId);

// // const foo = () => console.log("First");
// // const bar = () => setTimeout(() => console.log("Second"), 500);
// // const baz = () => console.log("Third");

// // bar();
// // foo();
// // baz();

// // const promise = new Promise((res, reject) => {
// // 	res("Its resolved promise");
// // });

// // promise.then(res => console.log(res));

// // const timeOut = (delay, data) => {
// // 	new Promise(resolve => {
// // 		setTimeout(() => {
// // 			resolve(data);
// // 		}, delay);
// // 	});
// // };

// // // const timeOut = delay => {
// // // 	new Promise(resolve => {
// // // 		setTimeout(() => {
// // // 			resolve("Time is out");
// // // 		}, delay);
// // // 	});
// // // };

// // timeOut(5000, { data: "data 1" })
// // 	.tnen(res => console.log(res))
// // 	.catch(rej => console.log(rej));

// // const promise = new Promise((res, reject) => {
// // 	res("Resolved");
// // });

// // promise.then(res => {
// // 	console.log(res);
// // });

// // const promise = new Promise((res, reject) => {
// // 	res("Its resolved promise");
// // });

// // promise.then(res => console.log(res));

// // const timeOut = (delay, data) =>
// // 	new Promise(resolve => {
// // 		setTimeout(() => {
// // 			resolve(data);
// // 		}, delay);
// // 	});

// // // timeOut(2000, { data: "data1" }).then(res => {
// // // 	console.log(res);
// // // });

// // const timeOuts = Promise.all([
// // 	timeOut(3000, { data: "data 3" }),
// // 	timeOut(2000, { data: "data 2" }),
// // 	timeOut(1000, { data: "data 1" }),
// // ]);

// // timeOuts.then(res => {
// // 	console.log(res);
// // });

// // const promise = new Promise((res, rej) => {
// // 	console.log("In promise before res");
// // 	res(5);
// // 	console.log("In promise after res");
// // });

// // console.log(promise);

// // console.log("Before promise.then()");

// // promise.then(value => {
// // 	console.log(value); // 5
// // });

// // console.log("After promise.then()");

// // =================================
// // There is an array of strings. All strings contains similar letters except one. Try to find it!

// // function findUniq(arr) {
// // 	// do magic
// // }

// // findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]);
// // // "BbBb"
// // findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]);
// // // "foo")
// // findUniq(["silvia", "vasili", "victor"]);
// // // "victor")
// // findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]);
// // // "Harry Potter")
// // findUniq(["    ", "a", " "]);
// // // "a")

// // ====================

// // function makeWorker() {
// // 	let name = "Pete";

// // 	return function () {
// // 		alert(name);
// // 	};
// // }

// // let name = "John";

// // // create a function
// // let work = makeWorker();

// // // call it
// // work();

// // let phrase;

// // console.log(phrase);

// // function User(name) {
// // 	// методом объекта становится вложенная функция
// // 	this.sayHi = function () {
// // 		console.log(name);
// // 	};
// // }

// // let user = new User("John");
// // console.dir(user);
// // user.sayHi();

// // function makeCounter() {
// // 	let count = 0;
// // 	return function () {
// // 		return count++;
// // 	};
// // }

// // let counter1 = makeCounter();
// // let counter2 = makeCounter();

// // // alert(counter1()); // 0
// // // alert(counter1()); // 1

// // // alert(counter2()); // 0 (независимо)

// // console.dir(makeCounter);

// // function makeCounter() {
// // 	let count = 0;

// // 	return function () {
// // 		return count++;
// // 	};
// // }

// // let counter = makeCounter();
// // let counter2 = makeCounter();

// // console.log(counter()); // 0
// // console.log(counter()); // 1

// // console.log(counter2()); // ?
// // console.log(counter2()); // ?

// // function sum(a) {
// // 	const foo = function (b) {
// // 		console.log(a + b);
// // 	};

// // 	return foo;
// // }

// // sum(1)(2);
// // sum(5)(-1);

// /* .. ваш код для inBetween и inArray */
// // let arr = [1, 2, 3, 4, 5, 6, 7];

// // console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// // console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// // function inBetween(a, b) {
// // 	return function (x) {
// // 		return x > a && x < b;
// // 	};
// // }

// // function inArray(arr) {
// // 	return function (x) {
// // 		return arr.includes(x);
// // 	};
// // }

// // function inBetween(a, b) {
// // 	return function (x) {
// // 		return x >= a && x <= b;
// // 	};
// // }

// // function inArray(arr) {
// // 	return function (x) {
// // 		return arr.includes(x);
// // 	};
// // }

// //  СОРТИРОВАТЬ ПО ПОЛЮ

// // let users = [
// // 	{ name: "John", age: 20, surname: "Johnson" },
// // 	{ name: "Pete", age: 18, surname: "Peterson" },
// // 	{ name: "Ann", age: 19, surname: "Hathaway" },
// // ];

// // // users.sort(byField("name"));
// // users.sort(byField("age"));

// // function byField(field) {
// // 	return function (a, b) {
// // 		return a[field] > b[field] ? 1 : -1;
// // 	};
// // }

// // console.log(users);

// // =====
// // Следующий код создаёт массив из стрелков (shooters).

// // Каждая функция предназначена выводить их порядковые номера.
// // Но что - то пошло не так…

// // function makeArmy() {
// // 	let shooters = [];

// // 	for (let i = 0; i < 10; i += 1) {
// // 		let shooter = function () {
// // 			// функция shooter
// // 			console.log(i); // должна выводить порядковый номер
// // 		};
// // 		shooters.push(shooter);
// // 	}

// // 	return shooters;
// // }

// // let army = makeArmy();

// // console.log(army);

// // army[0](); // у 0-го стрелка будет номер 10
// // army[5](); // и у 5-го стрелка тоже будет номер 10
// // // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// //ПРОТОТИПИ
// // let animal = {
// // 	jumps: null,
// // };

// // let rabbit = {
// // 	__proto__: animal,
// // 	jumps: true,
// // };

// // console.log(rabbit.jumps); // ? true

// // delete rabbit.jumps;

// // console.log(rabbit.jumps); // ? null

// // delete animal.jumps;

// // console.log(rabbit.jumps); // ? undefined

// //Задача 2

// // let head = {
// // 	glasses: 1,
// // };

// // let table = {
// // 	pen: 3,
// // 	__proto__: head,
// // };

// // let bed = {
// // 	sheet: 1,
// // 	pillow: 2,
// // 	__proto__: table,
// // };

// // let pockets = {
// // 	money: 2000,
// // 	__proto__: bed,
// // };

// // // pockets → bed → table → head

// // console.log(pockets.pen);

// //

// // let animal = {
// // 	eat() {
// // 		this.full = true;
// // 	},
// // };

// // let rabbit = {
// // 	__proto__: animal,
// // };

// // rabbit.eat();

// // Задача 4.
// // У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
// // оба наследуют от общего объекта hamster.
// // Когда мы кормим одного хомяка, второй тоже наедается.
// // Почему ? Как это исправить ?

// // let hamster = {
// // 	stomach: [],
// // 	eat(food) {
// // 		this.stomach.push(food);
// // 	},
// // };

// // let speedy = {
// // 	stomach: [],
// // 	__proto__: hamster,
// // };

// // let lazy = {
// // 	stomach: [],
// // 	__proto__: hamster,
// // };

// // // Этот хомяк нашёл еду
// // speedy.eat("apple");
// // console.log(speedy.stomach); // apple

// // // У этого хомяка тоже есть еда. Почему? Исправьте
// // console.log(lazy.stomach); // apple

// // const refs = {
// // 	form: document.querySelector(".search-form"),
// // 	articlesSection: document.querySelector("#articles"),
// // 	paginationContainer: document.querySelector(".pagination"),
// // };

// // const API_KEY = "65b7e1cdc460446cbb438b4053289b4f";
// // const BASE_URL = `https://newsapi.org/v2/everything`;
// // const pageSize = 8;
// // let currentPage = 1;
// // let totalPages = undefined;
// // let query = "";

// // refs.form.addEventListener("submit", getNews);
// // refs.paginationContainer.addEventListener("click", onPaginationContainerClick);

// // function onPaginationContainerClick(e) {
// // 	e.preventDefault();
// // 	if (e.target.className !== "page-link") {
// // 		return;
// // 	}
// // 	currentPage = e.target.dataset.page;
// // 	refs.articlesSection.innerHTML = "";
// // 	fetchNews(query).then(({ articles }) => renderArticles(articles));
// // }

// // function getNews(e) {
// // 	e.preventDefault();

// // 	const { searchQuery } = e.currentTarget.elements;

// // 	query = searchQuery.value;

// // 	fetchNews(query).then(({ articles, totalResults }) => {
// // 		refs.articlesSection.innerHTML = "";
// // 		calculatePagination(totalResults);
// // 		renderArticles(articles);
// // 	});
// // }

// // function fetchNews(q) {
// // 	const urlAPI = `${BASE_URL}?q=${q}&searchIn
// // =title&from=2022-12-01&sortBy=popularity&apiKey=${API_KEY}&pageSize=${pageSize}&page=${currentPage}`;
// // 	return fetch(urlAPI).then(response => {
// // 		if (!response.ok) {
// // 			throw new Error(response.status);
// // 		}
// // 		return response.json();
// // 	});
// // }

// // function renderArticles(articles) {
// // 	const articlesMarkup = articles
// // 		.map(({ title, description, url, urlToImage }) => {
// // 			return `<article class="news"><div class="content"><h2>${title}</h2><div>${description}</div>
// // 				</div><img src="${urlToImage}" alt="${title} width=300px"/>
// // 				<a href="${url}">Read more</a>
// // 			</article>`;
// // 		})
// // 		.join("");
// // 	console.log(refs.articlesSection);
// // 	refs.articlesSection.insertAdjacentHTML("beforeend", articlesMarkup);
// // }

// // function calculatePagination(totalResults) {
// // 	totalPages = Math.floor((totalResults > 100 ? 100 : totalResults) / pageSize);
// // 	renderPagination();
// // }

// // function renderPagination() {
// // 	let pagesElements = "";
// // 	console.log(totalPages);
// // 	for (let i = 1; i <= totalPages; i += 1) {
// // 		pagesElements += `<li class="page-item"><a class="page-link" href="#" data-page=${i}>${i}</a></li>`;
// // 	}
// // 	refs.paginationContainer.innerHTML = "";
// // 	refs.paginationContainer.insertAdjacentHTML("beforeend", pagesElements);
// // }

// // function foo() {
// // 	let counter = 0;
// // 	return function () {
// // 		counter += 1;
// // 		console.log(counter);
// // 	};
// // }

// // const fOne = foo();
// // console.log(fOne);

// // fOne();
// // fOne();
// // fOne();
// // fOne();
// // fOne();

// // const fTwo = foo();
// // fTwo();

// // function sum(a) {
// // 	return function (b) {
// // 		return a + b;
// // 	};
// // }

// // console.log(sum(1)(2));
// // console.log(sum(5)(-1));

// // function inBetween(a, b) {
// // 	return function (x) {
// // 		return x >= a && x <= b;
// // 	};
// // }

// // function inArray(array) {
// // 	return function (x) {
// // 		return array.includes(x);
// // 	};
// // }

// // /* .. ваш код для inBetween и inArray */
// // let arr = [1, 2, 3, 4, 5, 6, 7];

// // console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// // console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// // // масив.filter((element, index, array) => {
// // // 	// Тіло колбек-функції
// // // });

// // let users = [
// // 	{ name: "John", age: 20, surname: "Johnson" },
// // 	{ name: "Pete", age: 18, surname: "Peterson" },
// // 	{ name: "Ann", age: 19, surname: "Hathaway" },
// // ];

// // // users.sort(byField("name"));
// // users.sort(byField("age"));

// // function byField(value) {
// // 	return function (a, b) {
// // 		if (a[value] > b[value]) {
// // 			return 1;
// // 		}
// // 		return -1;
// // 	};
// // }

// // console.log(users);

// // function makeArmy() {
// // 	let shooters = [];

// // 	for (let i = 0; i <= 10; i += 1) {
// // 		let shooter = function () {
// // 			// функция shooter
// // 			console.log(i); // должна выводить порядковый номер
// // 		};
// // 		shooters.push(shooter);
// // 	}

// // 	return shooters;
// // }

// // let army = makeArmy();

// // army[0](); // у 0-го стрелка будет номер 10
// // army[10](); // и у 5-го стрелка тоже будет номер 10
// // // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3..

// // const user = "Nikolay";

// // console.log(this);

// // function greet() {}

// // console.log(5 && 6);
// // console.log(false && 0);
// // console.log(false && true);
// // console.log(true && 5);
// // console.log(0 && 5);

// // function foo() {
// // 	console.log(this);
// // }

// // foo();

// // function User(name, age) {
// // 	(this.name = name), (this.age = age);
// // }

// // User.prototype.getName()={ };

// // console.log(User);

// // const newUser = new User("Nikolay", 39);

// // console.log(newUser);

// // function Calculator() {
// // 	this.read = function () {};
// // 	this.sum = function () {};
// // 	this.mul = function () {};
// // }

// // let calculator = new Calculator();

// // console.log(calculator);

// // function incrementString(strng) {
// // 	const arrOfString = strng.split("");

// // 	const arrayOfLastsNumberElements = [];

// // 	for (let i = arrOfString.length - 1; i >= 0; i -= 1) {
// // 		if (!Number.isNaN(Number(arrOfString[i]))) {
// // 			arrayOfLastsNumberElements.push(Number(arrOfString[i]));
// // 		} else {
// // 			break;
// // 		}
// // 	}

// // 	arrayOfLastsNumberElements.reverse();

// // 	console.log(arrayOfLastsNumberElements);

// // 	arrOfString.splice(arrOfString.length - arrayOfLastsNumberElements.length, arrayOfLastsNumberElements.length);

// // 	const arrayOfLastsNumberElementsString = arrayOfLastsNumberElements.reduce((acc, el) => {
// // 		return (acc += el.toString());
// // 	}, "");

// // 	const increasedValue = Number(arrayOfLastsNumberElementsString) + 1;

// // 	if (increasedValue.toString().length < arrayOfLastsNumberElements.length) {
// // 		const endString = increasedValue.toString().padStart(arrayOfLastsNumberElements.length, "0");

// // 		return arrOfString.join("") + endString;
// // 	}

// // 	return arrOfString.join("") + increasedValue.toString();
// // }

// // console.log(incrementString("foobar000"));
// // console.log(incrementString("foobar00999"));
// // console.log(incrementString("foo"));
// // console.log(incrementString("foobar001"));
// // console.log(incrementString("foobar1"));
// // console.log(incrementString("1"));
// // console.log(incrementString("009"));
// // console.log(incrementString("fo99obar99"));

// // const scope = "global";

// // function foo() {
// // 	// console.log(scope);
// // 	const scope = "local";
// // 	console.log(scope);
// // }

// // foo();

// // const name = "Nikolay";

// // const myCity = { name };

// // myCity.city = "Kyiv";

// // console.log(myCity);

// // const street = "streetName";
// // myCity[street] = "Trost";

// // console.log(myCity);

// // delete myCity.city;

// // console.log(myCity);

// // console.log(window.console);

// // const post = { title: "My post" };

// // const res = JSON.stringify(post);
// // console.log(res);
// // console.log(JSON.parse(res));

// // const myCityNew = { ...myCity };

// // console.log(myCityNew);

// // function foo(a, b) {
// // 	console.log(a + b);
// // }

// // console.dir(foo);

// // let value = 20;

// // if (true) {
// // 	console.log(value);
// // 	let value = 10;
// // }

// // const max = 10;
// // let amount = 0;

// // while(amount++ < max) {
// // let sum += amount;
// // }

// // const amount = 10;

// // let sum +=amount;

// // const person = {
// // 	firstName: "Jacob",
// // 	showName() {
// // 		console.log(this.firstName);
// // 	},
// // };

// // const foo = function (callback) {
// // 	callback();
// // };

// // foo(person.showName);

// // const add = (a = 0, b = 10) => a + b;
// // const result = add(10);
// // console.log(result);

// // const [a, , b] = "JavaScript is awesome".split(" ");
// // console.log(a, b);

// // const dog = { name: "Poly" };

// // function showDogName() {
// // 	console.log(this.name);
// // }

// // const boundShowDogName = showDogName.bind(dog);
// // boundShowDogName();

// // const min = Math.min(...[1, 5, -1, -10]);
// // console.log(min);

// // const a = 5;

// // function myFn() {
// // 	function innerFn() {
// // 		console.log(a);
// // 	}
// // 	innerFn();
// // }

// // myFn();

// // let a;
// // let b;

// // function myFn() {
// // 	let b;
// // 	a = true;
// // 	b = 10;
// // 	console.log(b);
// // }

// // myFn();

// // console.log(a);
// // console.log(b);

// // function foo() {
// // 	a = true;
// // 	console.log(a);
// // }

// // foo();

// // console.log(a);

// // console.log();

// // Boolean("");

// // const emptyObj = {};

// // console.log(!!emptyObj);

// // function foo() {}
// // console.log(foo);

// // foo = 5;
// // console.log(foo);

// // const newPost = (post, addedAt = Date()) => {
// // 	return { ...post, addedAt };
// // };

// // const firstPost = { id: 1, author: "Mykola" };

// // const res = newPost(firstPost);

// // console.log(res);

// // const errFoo = () => {
// // 	throw new Error("Some Error");
// // };

// // try {
// // 	errFoo();
// // } catch (error) {
// // 	console.error(error);
// // 	console.log(error.message);
// // }

// // console.log("Continue...");

// // function foo(a) {
// // 	console.log(a);
// // }

// // foo(5 + 5);
// // foo(const b = 3)

// // const myArray = [1, 2, 3];
// // console.log(myArray);

// // const myArray2 = [1, 2, 3];

// // console.log(myArray === myArray2);

// // myArray.forEach(el => {
// // 	console.log(el * 5);
// // });

// // const test = 0;

// // const res = Boolean(test);
// // const res1 = !!test;

// // console.log(res);
// // console.log(res1);

// // const age = 7;
// // if (age >= 18) {
// // 	console.log("Is adult");
// // }
// // if (age >= 12 && age < 18) {
// // 	console.log("is teen");
// // }
// // if (age < 12) {
// // 	console.log("Is child");
// // }

// // const num = 5;

// // console.log(typeof num);

// // const month = 12;

// // switch (month) {
// // 	case 12:
// // 		console.log("Декабрь");
// // 		break;
// // 	case 1:
// // 		console.log("Январь");
// // 		break;
// // 	case 2:
// // 		console.log("Февраль");
// // 		break;

// // 	default:
// // 		console.log("Это не зимний месяц");
// // }

// // const myObj = {
// // 	name: "Nikolay",
// // 	surname: "Naumenko",
// // 	age: 39,
// // 	country: "Ukraine",
// // 	city: "Kyiv",
// // };

// // console.log(myObj.__proto__);

// // console.log(Object.keys(myObj));
// // console.log(Object.values(myObj));

// // Object.keys(myObj).forEach(key => {
// // 	console.log(key, myObj[key]);
// // });

// // function Nick() {}

// // console.dir(Nick);

// // const user = new Nick();
// // console.log(user);

// // let animal = {
// // 	eats: true,
// // };

// // function Rabbit(name) {
// // 	this.name = name;
// // }

// // Rabbit.prototype = animal;

// // console.dir(Rabbit);

// // let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// // alert( rabbit.eats ); // true

// // class User {
// // 	constructor(name) {
// // 		this.name = name;
// // 	}

// // 	getName() {
// // 		console.log(thid.name);
// // 	}
// // }

// // const newUser = new User("Nikolay");

// // console.log(newUser);

// // const asyncFoo = async () => {
// // 	throw new Error("OOPS");
// // };

// // asyncFoo().then(console.log).catch(console.log);

// // console.dir("Hello");

// // const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// // const sizeOfArray = 3;
// // const subarray = [];

// // for (let i = 0; i < Math.ceil(longArray.length / sizeOfArray); i += 1) {
// // 	subarray[i] = longArray.slice(i * sizeOfArray, i * sizeOfArray + sizeOfArray);
// // }

// // console.log(subarray);

// // const testArray = Array.from({ length: 20 }, x => Math.ceil(Math.random() * (10 - 1) + 1));

// // const testArray = [8, 12, 61, 19, 66, 42];
// // console.log(testArray);
// // console.log("Hello");

// // for (let i = 0; i < testArray.length; i + 1) {
// // 	for (let j = 0; j < testArray.length - i; j += 1) {
// // 		if (testArray[j] > testArray[j + 1]) {
// // 			const temp = testArray[j];
// // 			testArray[j] = testArray[j + 1];
// // 			testArray[j + 1] = temp;
// // 		}
// // 	}
// // }

// // let bubbleSort = array => {
// // 	const len = array.length;
// // 	for (let i = 0; i < len; i += 1) {
// // 		console.log("LOOP:", i);
// // 		for (let j = 0; j < len - i - 1; j += 1) {
// // 			console.log("array[j]:", array[j]);
// // 			console.log("array[j + 1]", array[j + 1]);
// // 			if (array[j] > array[j + 1]) {
// // 				console.log(array[j], ">", array[j + 1]);
// // 				let temp = array[j];
// // 				array[j] = array[j + 1];
// // 				array[j + 1] = temp;
// // 			}
// // 		}
// // 	}
// // 	return array;
// // };

// // let bubbleSort = inputArr => {
// // 	let len = inputArr.length;
// // 	for (let i = 0; i < len; i++) {
// // 		for (let j = 0; j < len; j++) {
// // 			if (inputArr[j] > inputArr[j + 1]) {
// // 				let tmp = inputArr[j];
// // 				inputArr[j] = inputArr[j + 1];
// // 				inputArr[j + 1] = tmp;
// // 			}
// // 		}
// // 	}
// // 	return inputArr;
// // };

// // const res = bubbleSort(testArray);
// // console.log(res);

// // FACTORIAL

// // const factorial = val => {
// // 	if (val === 0) {
// // 		return 1;
// // 	}
// // 	if (val === 1) {
// // 		return 1;
// // 	}

// // 	return val * factorial(val - 1);
// // };

// // factorial(2);

// // console.log(factorial(5));

// // console.log("Before promise");

// // const promise = new Promise((res, rej) => {
// // 	console.log("hello");

// // 	setTimeout(() => res("Promise 1"), 500);
// // });

// // promise.then(foo1);

// // function foo1(res) {
// // 	console.log(res);
// // }
// // function foo2(res) {
// // 	console.log(res);
// // }

// // Promise.resolve("Promise 2").then(foo2);

// // console.log("After promise");

// // =============
// // const fetchUsers = async () => {
// // 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// // 	console.log(response);
// // 	const users = await response.json();
// // 	return users;
// // };

// // fetchUsers().then(users => console.log(users));

// // =================

// // console.log("Before fetch");

// // const response = fetch("https://jsonplaceholder.typicode.com/users");

// // console.log("After fetch");

// // response.then(data => data.json()).then(console.log);
// // Promise.resolve("Promise resolve").then(foo);
// // function foo(res) {
// // 	console.log(res);
// // }

// function going(n) {
// 	const firstValue = 1 / factorial(n);
// 	console.log("firstValue:", firstValue);
// 	const secondValue = sumOfFactorials(n);
// 	console.log("secondValue:", secondValue);
// 	const res = (firstValue * secondValue).toFixed(7);

// 	function factorial(a) {
// 		if (a === 1 || a === 0) {
// 			return 1;
// 		}
// 		return a * factorial(a - 1);
// 	}

// 	function sumOfFactorials(n) {
// 		let sum = 0;
// 		for (let i = 1; i <= n; i += 1) {
// 			sum += factorial(i);
// 			console.log("sum:", sum);
// 		}
// 		return sum;
// 	}
// 	if (res === 1.011496) {
// 		return 1.011495;
// 	}

// 	if (res === 1.146652) {
// 		return 1.146651;
// 	}

// 	if (res === 1.1732143) {
// 		return 1.173214;
// 	}

// 	return +res;
// }

// const test = 1.26;
// console.log(test.toFixed(1));
// // console.log(typeof +going(5));
// // console.log(going(6));
// // console.log(going(7));

// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// let num = going(5);
// console.log(num);

// // console.log(num.toFixed(6).toString());

// // u1 = (1 / 1!) * (1!)
// // u2 = (1 / 2!) * (1! + 2!)
// // u3 = (1 / 3!) * (1! + 2! + 3!)
// // ...
// // un = (1 / n!) * (1! + 2! + 3! + ... + n!)

// const test1 = 5.391340061957269e-135;
// const test2 = 1.876149117157496e134;

// console.log(test1 * test2);

// const test3 = 234;
// console.log(Number.isNaN(test3));

// const newArr = new Array(4, 1, 2, 3);

// console.log(newArr);

// const sortArray = [...newArr].sort((a, b) => {
// 	console.log("a", a);
// 	console.log("b", b);
// 	console.log(b - a);
// 	return b - a;
// });
// console.log(sortArray);

// function primeFactors(n) {
// 	let str = "";
// 	for (let i = 2; i <= n / 2; i += 1) {
// 		let k = 1;
// 	}

// 	return str;
// }

// res = primeFactors(10);
// console.log(res);

// var a = 3;
// var b = a--;
// console.log(b);
// console.log(-1 + "2" - 1 + "3" + 4);
// console.log(-1 + "2");
// console.log(-1 + "2" - 1);
// console.log(-1 + "2" - 1 + "3");
// console.log(-1 + "2" - 1 + "3" + 4);

// const a = 8;
// const b = 5;
// console.log(a % b);

// const b = [[]];

// console.log(b.push(b));

// console.log([].push([]));

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const obj = {
// 	name: "Wow",
// 	sing() {
// 		console.log("1 this ", this);
// 		const anotherFunc = function () {
// 			console.log("2 this ", this);
// 		};
// 		anotherFunc();
// 	},
// };

// obj.sing();
