const methodCards = [
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(val => val > 0) \nconsole.log(results) \n// logs true"],
		"category": "Array prototype method",
		"answer": "every",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
		"uid": "card-1"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(5) \nconsole.log(results) \n// logs 4"],
		"category": "Array prototype method",
		"answer": "indexOf",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
		"uid": "card-2"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(val => val > 3) \nconsole.log(results) \n// logs [ 4, 5 ]"],
		"category": "Array prototype method",
		"answer": "filter",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
		"uid": "card-3"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(val => val > 2) \nconsole.log(results) \n// logs 3"],
		"category": "Array prototype method",
		"answer": "find",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
		"uid": "card-4"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = 0\narr.", "(val => results += val) \nconsole.log(results) \n// logs 15"],
		"category": "Array prototype method",
		"answer": "forEach",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
		"uid": "card-5"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(3) \nconsole.log(results) \n// logs true"],
		"category": "Array prototype method",
		"answer": "includes",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
		"uid": "card-6"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(val => val > 2) \nconsole.log(results) \n// logs [ false, false, true, true, true ]"],
		"category": "Array prototype method",
		"answer": "map",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
		"uid": "card-7"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "(val => val > 2) \nconsole.log(results) \n// logs true"],
		"category": "Array prototype method",
		"answer": "some",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
		"uid": "card-8"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "() \nconsole.log(results) \n// logs [ 5, 4, 3, 2, 1 ]"],
		"category": "Array prototype method",
		"answer": "reverse",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
		"uid": "card-9"
	},
	{
		"problem": ["let arr = [1, 2, 3, 4, 5]\nlet results = arr.", "((acc, val) => acc += val) \nconsole.log(results) \n// logs 15"],
		"category": "Array prototype method",
		"answer": "reduce",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
		"uid": "card-10"
	},
	{
		"problem": ["let str = 'Burritos are the best!'\nlet results = str.", "('best!') \nconsole.log(results) \n// logs true"],
		"category": "String prototype method",
		"answer": "endsWith",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",
		"uid": "card-11"
	},
	{
		"problem": ["let str = 'Burritos are the best times 10!'\nlet results = str.", "(10) \nconsole.log(results) \n// logs [ '10', index: 28, input: 'Burritos are the best times 10!' ]"],
		"category": "String prototype method",
		"answer": "match",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
		"uid": "card-12"
	},
	{
		"problem": ["let str = 'Burritos are the BEST!'\nlet results = str.", "() \nconsole.log(results) \n// logs 'burritos are the best!'"],
		"category": "String prototype method",
		"answer": "toLowerCase",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/tolowercase",
		"uid": "card-13"
	},
	{
		"problem": ["let str = 'Burritos are the best!'\nlet results = str.", "(7) \nconsole.log(results) \n// logs 's'"],
		"category": "String prototype method",
		"answer": "charAt",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
		"uid": "card-14"
	},
	{
		"problem": ["let str = 'Yup'\nlet results = str.", "(3) \nconsole.log(results) \n// logs 'YupYupYup'"],
		"category": "String prototype method",
		"answer": "repeat",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",
		"uid": "card-15"
	},
	{
		"problem": ["let str = 'Burritos are the best!'\nlet results = str.", "(' ') \nconsole.log(results) \n// logs [ 'Burritos', 'are', 'the', 'best!' ]"],
		"category": "String prototype method",
		"answer": "split",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
		"uid": "card-16"
	},
	{
		"problem": ["let str = 'Burritos are the best!'\nlet results = str.", "('Burritos', 'Pizzas') \nconsole.log(results) \n// logs 'Pizzas are the best!'"],
		"category": "String prototype method",
		"answer": "replace",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
		"uid": "card-17"
	},
	{
		"problem": ["let str = '   Burritos!   '\nlet results = str.", "() \nconsole.log(results) \n// logs 'Burritos!'"],
		"category": "String prototype method",
		"answer": "trim",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",
		"uid": "card-18"
	},
	{
		"problem": ["let obj = {a: 1, b: 2, c: 3}\nlet results = Object.", "(obj) \nconsole.log(results) \n// logs [ 'a', 'b', 'c' ]"],
		"category": "Object prototype method",
		"answer": "keys",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
		"uid": "card-19"
	},
	{
		"problem": ["let obj = {a: 1, b: 2, c: 3}\nlet results = Object.", "(obj) \nconsole.log(results) \n// logs [ 1, 2, 3 ]"],
		"category": "Object prototype method",
		"answer": "values",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values",
		"uid": "card-20"
	},
	{
		"problem": ["let obj = {a: 1}, obj2 = {a: 1}\nlet results = Object.", "(obj, obj2) \nconsole.log(results) \n// logs false"],
		"category": "Object prototype method",
		"answer": "is",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",
		"uid": "card-21"
	},
	{
		"problem": ["let obj = {a: 1, b: 2, c: 3}\nlet results = Object.", "(obj) \nconsole.log(results) \n// logs [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]"],
		"category": "Object prototype method",
		"answer": "entries",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
		"uid": "card-22"
	},
	{
		"problem": ["let arr = [['a', 1],['b', 2]]\nlet results = Object.", "(arr) \nconsole.log(results) \n// logs {a: 1, b: 2}"],
		"category": "Object prototype method",
		"answer": "fromEntries",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",
		"uid": "card-23"
	}
]