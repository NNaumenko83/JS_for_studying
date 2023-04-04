import Joi from "joi";

// console.log(Joi);

export const getUsers = () => {
	console.log("getUsers");
};

export const fethUserById = id => {
	console.log("fethUserById");
};

export const updateUserById = id => {
	console.log("updateUserById");
};

export const y = "qweqwe";

export const getMovie = () => {
	console.log("in API");
	const response = fetch(
		"https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b7e1cdc460446cbb438b4053289b4f&page=1&pageSize=12",
	);
	console.log("response:", response);

	return response;
};

// console.log("Before Promise");
// const promise = new Promise((res, rej) => {
// 	console.log("promise");
// 	res("Hello");
// });
// console.log("After Promise");

// console.log(promise);
