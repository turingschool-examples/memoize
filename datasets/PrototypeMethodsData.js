const stringAndArrayPrototypeMethods = [
    {
        "id": "a257d37c-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "What does the .replace() string prototype method return?",
        "answerChoices": ["The same string with replaced characters", "Boolean stating if string has been replaced", "A new string with replaced characters"],
        "correctAnswer": "A new string with replaced characters",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
    },
    {
        "id": "a257d840-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "In the following code what does 'gi' indicate?: var newstr = str.replace(/apples/gi, 'oranges')",
        "answerChoices": ["Replace all 'g' and 'i' characters in the string", "Replace 'apples' with 'oranges'", "Replace all 'apples' with 'oranges' and ignore letter case"],
        "correctAnswer": "Replace all 'apples' with 'oranges'",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
    },
    {
        "id": "a257dafc-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "You are given a string and need to iterate over that string to solve a question. Which string method should you use to begin the process?",
        "answerChoices": [".break('')", ".split('')", ".slice('')"],
        "correctAnswer": ".split('')",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
    },
    {
        "id": "a257df02-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "I am given the string 'Turing School of Software and Design' and I need to return an array with each word as an element. Which syntax of .split() will accomplish this?",
        "answerChoices": [".split(' ')", ".split('')", ".split()"],
        "correctAnswer": ".split(' ')",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
    },
    {
        "id": "a257e1aa-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "I typed in 'Kim Myers'.join() to join these two words into one and received an error message. Why is that?",
        "answerChoices": [".join() is an array method and cannot be used on a string", ".join() is missing quotation marks within the parenthesis", "You need to store the string in a variable before using .join()"],
        "correctAnswer": ".join() is an array method and cannot be used on a string",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
    },
    {
        "id": "a257e5ba-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "My company wants to make email addresses for all interns but using the first and last name that appears on their Slack profiles. Which string method could be used to format the beginning of the email address?",
        "answerChoices": [".join()", ".split()", ".concat()"],
        "correctAnswer": ".concat()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"
    },
    {
        "id": "a257e858-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "Which method allows you to remove whitespace from either end of a string?",
        "answerChoices": [".trim()", ".slim()", ".clip()"],
        "correctAnswer": ".trim()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim"
    },
    {
        "id": "a257ec4a-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "What output would you expect when executing the following code?: var str = 'The quick brown fox jumps over the lazy dog.'; console.log(str.slice(-9, -5));",
        "answerChoices": ["lazy dog", "lazy", "Unexpected Token"],
        "correctAnswer": "lazy",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"
    },
    {
        "id": "a257eee8-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "Alejandra and Exavier are discussing how to use the splice. Alejandra says that she was able to splice from a string to reformat a phone number on codewars while Exavier states that she must be mistaken because he was told this was an array method. Who is correct?",
        "answerChoices": ["Alejandra is correct because splice is a string method", "Exavier is correct because splice is an array method", "They are both correct because splice is an array and string method"],
        "correctAnswer": "They are both correct because splice is an array and string method",
        "link": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"]
    },
    {
        "id": "a257f19a-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "I need to return an array of uppercase letters in a function in my Wheel of Fortune project. When I type in 'Full House.split('').toUpperCase()' I receive an error. Why is that?",
        "answerChoices": [".split() is not the correct method to create an array of letters", ".toUpperCase is not being invoked", "You must uppercase the string before splitting it"],
        "correctAnswer": "You must uppercase the string before splitting it",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
    },
    {
        "id": "a257f5e6-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "This method returns a string created from the specified sequence of UTF-16 code units.",
        "answerChoices": ["fromCharCode()", "charCodeAt()", "codePointAt()"],
        "correctAnswer": "fromCharCode()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"
    },
    {
        "id": "a257fa14-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Which of the following will return the string 'drums' from const instruments = ['drums', 'piano', 'fiddle']?",
        "answerChoices": ["instruments.pop()", "instruments.shift()", "instruments.splice()"],
        "correctAnswer": "instruments.shift()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
    },
    {
        "id": "a257fdd4-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Which of the following will return the string 'fiddle' from const instruments = ['drums', 'piano', 'fiddle']?",
        "answerChoices": ["instruments.pop()", "instruments.shift()", "instruments.splice()"],
        "correctAnswer": "instruments.pop()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
    },
    {
        "id": "a258027a-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "This method mutates an existing array by adding elements to the end of the array",
        "answerChoices": [".push()", ".pop()", ".unshift()"],
        "correctAnswer": ".push()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
    },
    {
        "id": "a2580522-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Which of the following single methods would allow us to properly format this array?: var arr1 = [1, 2, [3, 4]]",
        "answerChoices": [".flat()", ".map()", ".concat()"],
        "correctAnswer": ".flat()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
    },
    {
        "id": "a25807ac-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Which method creates a new array with all elements that pass the test implemented by the provided function?",
        "answerChoices": [".map()", ".filter()", ".includes()"],
        "correctAnswer": ".filter()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
    },
    {
        "id": "a2580b08-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "When refactoring a codebase, which of the following methods can replace a standard for loop?",
        "answerChoices": [".map()", ".reduce()", ".forEach()"],
        "correctAnswer": ".forEach()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
    },
    {
        "id": "a2580efa-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "What is missing from the setup of this for loop?: for (i = 0; i < array.length; i++) ",
        "answerChoices": ["the word 'loop' ", "curly braces inside of the parenthesis", "a variable declaration for 'i' "],
        "correctAnswer": "a variable declaration for 'i' ",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"
    },
    {
        "id": "a25811a2-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "What is the return value for forEach()?",
        "answerChoices": ["null", "an array", "undefined"],
        "correctAnswer": "undefined",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
    },
    {
        "id": "a25815c6-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "What can we expect to be returned from: var months = ['Jan', 'March', 'April', 'June']; months.splice(2) ?",
        "answerChoices": ["April", " 'April' , 'June' ", " ['April' , 'June'] "],
        "correctAnswer": " ['April' , 'June'] ",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
    },
    {
        "id": "a2581878-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "When using reduce, always remember to return the ____",
        "answerChoices": ["array", "function", "accumulator"],
        "correctAnswer": "accumulator",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
    },
    {
        "id": "a2581d0a-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "A helpful, optional argument for most array prototype methods...",
        "answerChoices": ["previous value", "current index", "previous index"],
        "correctAnswer": "current index",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype"
    },
    {
        "id": "a258200c-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "This method returns a new array of the same length",
        "answerChoices": [".find()", ".filter()", ".map()"],
        "correctAnswer": ".map()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
    },
    {
        "id": "a25822b4-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "This method determines whether an array includes a certain value among its entries, returning true or false.",
        "answerChoices": [".includes()", ".contains()", ".hasOwnProperty()"],
        "correctAnswer": ".includes()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
    },
    {
        "id": "a25826e2-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "This array prototype method returns the first element that matches a given condition",
        "answerChoices": [".find()", ".indexOf()", ".includes()"],
        "correctAnswer": ".find()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
    },
    {
        "id": "a258296c-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Which array prototype method returns a new array of extracted elements based on a beginning and ending index?",
        "answerChoices": [".splice()", ".reduce()", ".slice()"],
        "correctAnswer": ".slice()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
    },
    {
        "id": "a2582cfa-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Which array prototype method allows you to return a new data type?",
        "answerChoices": [".reduce()", ".forEach()", ".map()"],
        "correctAnswer": ".reduce()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
    },
    {
        "id": "a2583092-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "Where must the accumulator be returned?",
        "answerChoices": ["The accumulator must be returned within the reduce callback function", "The accumulator must be returned after the reduce callback function", "The accumulator must be returned before the reduce callback function"],
        "correctAnswer": "The accumulator must be returned within the reduce callback function",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
    },
    {
        "id": "a2583330-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "If 'beast' is a function parameter and a string of 'Werewolf' is passed into a function what will `let beastLast = beast[beast.length - 1]` evaluate to?",
        "answerChoices": ["The index of the last letter", "The length of the string less one", "The letter 'f' "],
        "correctAnswer": "The letter 'f' ",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length"
    },
    {
        "id": "a258368c-36c6-11e9-b210-d663bd873d93",
        "category": "Array Methods",
        "question": "If you have var numbers = [1, 3, 5, 7] what will numbers.length evaluate to?",
        "answerChoices": ["16", "4", "3"],
        "correctAnswer": "4",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length"
    }
]

module.exports = {
    stringAndArrayPrototypeMethods
}