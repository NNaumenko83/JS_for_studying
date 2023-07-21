const objLetters = str => {
	const arrStr = [...str];

	const golos = [..."aeyuio"];

	const prigolos = [..."qwrtpsdfghjklzxcvbnm"];

	let array = [];

	for (let i = 0; i < arrStr.length; i += 1) {
		const pos = i;
		let type = null;
		const char = arrStr[i].toUpperCase();
		if (golos.includes(arrStr[i].toLowerCase())) {
			type = 1;
		} else if (prigolos.includes(arrStr[i].toLowerCase())) {
			type = 2;
		} else {
			type = 3;
		}
		array.push({ pos, char, type });
	}

	return array;
};

objLetters("I like js");

console.log(objLetters("I like js"));
