const MFcodeQuestions = [
  {
    "id": "6fa37515",
    "category": "Data Types",
    "question": "What type of data structure is used to pair elements with an index?",
    "options": ["object", "function", "array", "string"],
    "answer": "array",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    "id": "620bbb9b",
    "category": "Data Types",
    "question": "What type of data structure is used to describe something with attributes in the form of key/value pairs?",
    "options": ["object", "array", "linked list", "boolean"],
    "answer": "object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
  },
  {
    "id": "9429205d",
    "category": "Data Types",
    "question": "Select the array:",
    "options": ["[ 3, 7, 4, 9 ]", "{ name:'Samantha', favColor:'green' }", "const array = item1 + item2", "function array( { return 'I'm an array' }"],
    "answer": "[ 3, 7, 4, 9 ]",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    "id": "58176817",
    "category": "Data Types",
    "question": "Select the object:",
    "options": ["[ 'Bill', 'Jenna', 'Mary', 'Tony' ]", "{ name:'Samantha', favFood:'cheese' }", "const object = `I'm an ${objectName}`", "function object() { return 'I'm an object' }"],
    "answer": "{ name:'Samantha', favFood:'cheese' }",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
  },
  {
    "id": "d7327dbc",
    "category": "Data Types",
    "question": "Which of the following is a boolean?",
    "options": ["null", "'dog'", "false", "13"],
    "answer": "false",
    "link": "https://developer.mozilla.org/en-US/docs/Glossary/Boolean"
  },
  {
    "id": "8f57922a",
    "category": "Data Types",
    "question": "Which of the following is a string?",
    "options": ["24", "'nachos'", "true", "null"],
    "answer": "'nachos'",
    "link": "https://developer.mozilla.org/en-US/docs/Glossary/String"
  },
  {
    "id": "f86a6d9a",
    "category": "Logical Operators",
    "question": "Which of the following is known as a bang operator, and indicates 'Not'?",
    "options": ["&&", "!", "?", "||"],
    "answer": "!",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators"
  },
  {
    "id": "5dc710ac",
    "category": "Logical Operators",
    "question": "Which of the following will evaluate as true if either of two conditions are met?",
    "options": ["&&", "!", "?", "||"],
    "answer": "||",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators"
  },
  {
    "id": "8e9b9753",
    "category": "Logical Operators",
    "question": "Which of the following requires two conditions to be met to evaluate as true?",
    "options": ["&&", "!", "?", "||"],
    "answer": "&&",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators"
  },
  {
    "id": "ea494d46",
    "category": "Array Prototypes",
    "question": "What method will remove the first element of an array and return it?",
    "options": [".unshift()", ".shift()", ".pop()", ".push()"],
    "answer": ".shift()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
  },
  {
    "id": "6903803a",
    "category": "Array Prototypes",
    "question": "What method will add an element to the beginning of an array and return the new length of the array?",
    "options": [".unshift()", ".shift()", ".pop()", ".push()"],
    "answer": ".unshift()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
  },
  {
    "id": "5d2afe40",
    "category": "Array Prototypes",
    "question": "What method will add an element to the end of an array and return the new length of the array?",
    "options": [".pop()", ".push()", ".fill()", ".shift()"],
    "answer": ".push()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
  },
  {
    "id": "dbbd0744",
    "category": "Array Prototypes",
    "question": "What method will remove the last element of an array and return it?",
    "options": [".unshift()", ".pop()", ".push()", ".fill()"],
    "answer": ".pop()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
  },
  {
    "id": "efa7c273",
    "category": "Array Prototypes",
    "question": "What method, when given a starting index, can remove any number of elements from an array, and add other elements in their place if needed?",
    "options": [".fill()", ".splice()", ".concat()", ".slice()"],
    "answer": ".splice()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
  },
  {
    "id": "e3eb6bd0",
    "category": "Array Prototypes",
    "question": "What method, when applied to an array and given an array as an argument, will return a combination of both arrays?",
    "options": [".push()", ".join()", ".concat()", ".includes()"],
    "answer": ".concat()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
  },
  {
    "id": "020e861b",
    "category": "Array Prototypes",
    "question": "What method will remove a portion of an array and return that as a 'shallow' copy, leaving the original array in tact?",
    "options": [".slice()", ".splice()", ".copyWithin()", ".shift()"],
    "answer": ".slice()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
  },
  {
    "id": "ad75b3e1",
    "category": "Array Prototypes",
    "question": "What method will let you define a separator, then combine all the elements of an array into a string, with a separator between each element?",
    "options": [".toString()", ".concat()", ".reduce()", ".join()"],
    "answer": ".join()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
  },
  {
    "id": "b381e75a",
    "category": "Array Prototypes",
    "question": "What method will apply a provided function to every element in an array, and return that new array?",
    "options": [".map()", ".forEach()", ".reduce()", ".filter()"],
    "answer": ".map()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
  },
  {
    "id": "814c3ce0",
    "category": "Array Prototypes",
    "question": "What method will apply a provided function to every element in an array, and make no return?",
    "options": [".map()", ".forEach()", ".find()", ".reduce()"],
    "answer": ".forEach()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  },
  {
    "id": "6dc60e36",
    "category": "Array Prototypes",
    "question": "What method allows you to iterate over an array and build an output, using an accumulator to collect each mutated element?",
    "options": [".map()", ".forEach()", "slice()", ".reduce()"],
    "answer": ".reduce()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  },
  {
    "id": "095d72df",
    "category": "Array Prototypes",
    "question": "What method creates an array of every element that passes a provided test?",
    "options": [".find()", ".filter()", ".reduce()", ".map()"],
    "answer": ".filter()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
  },
  {
    "id": "f530754b",
    "category": "Array Prototypes",
    "question": "What method iterates over each element in an array and returns the first element that meets a set requirement?",
    "options": [".find()", ".map()", ".filter()", ".includes()"],
    "answer": ".find()",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
  },
  {
    "id": "bd2ea446",
    "category": "Variables",
    "question": "Which variable declaration will keep its value from being redeclared or reassigned?",
    "options": ["var", "let", "const", "save"],
    "answer": "const",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
  },
  {
    "id": "9f206cdf",
    "category": "Variables",
    "question": "Which variable declaration is processed before any of the rest of its code block is executed, thus 'hoisting' it?",
    "options": ["var", "let", "const", "first"],
    "answer": "var",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
  },
  {
    "id": "e7d5dd9e",
    "category": "Syntax",
    "question": "How would you describe the following syntax? (hasName ? 'login' : 'signIn');",
    "options": ["logical operator", "if/else statement", "ternary operator", "switch statement"],
    "answer": "ternary operator",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
  },
  {
    "id": "f1ea8d31",
    "category": "Syntax",
    "question": "How would you describe the following syntax? case 'correct': return true; break; case 'incorrect': return false; break; ",
    "options": ["logical operator", "if/else statement", "ternary operator", "switch statement"],
    "answer": "switch statement",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
  },
  {
    "id": "09724ab0",
    "category": "Syntax",
    "question": "Which of the following denotes 'strictly equals'",
    "options": ["=", "==", "===", "===="],
    "answer": "===",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"
  },
  {
    "id": "3b9763a6",
    "category": "CSS Flex",
    "question": "What might you use to give an element to display them in a column rather than a row?",
    "options": ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    "answer": "flex-direction",
    "link": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"
  },
  {
    "id": "8c0326be",
    "category": "CSS Flex",
    "question": "What might you use to control the space between flexed elements?",
    "options": ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    "answer": "justify-content",
    "link": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
  },
  {
    "id": "0000bfd5",
    "category": "CSS Flex",
    "question": "What might you use to center elements on an axis?",
    "options": ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    "answer": "align-items",
    "link": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
  }
]

module.exports = {
  MFcodeQuestions
}