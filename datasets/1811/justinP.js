const jpQuestions = [
  {
  "id": "0",
  "category": "Fundamentals",
  "question": "What does the forEach() method return?",
  "answers": [
    "undefined",
    "an array of the same length with all elements modified",
    "the original array with its elements modified"
  ],
  "correct_answer": "undefined",
  "save": "false"
}, {
  "id": "1",
  "category": "Fundamentals",
  "question": "Which array proptotype methods return a representation of an array, but do not modify it?",
  "answers": [
    "Accessor methods",
    "Mutator methods",
    "Iteration methods"
  ],
  "correct_answer": "Accessor methods",
  "save": "false"
}, {
  "id": "2",
  "category": "Fundamentals",
  "question": "Which method returns a single value?",
  "answers": [
    ".return()",
    ".reduce()",
    ".filter()"
  ],
  "correct_answer": ".reduce()",
  "save": "false"
}, {
  "id": "3",
  "category": "Fundamentals",
  "question": "Which method creates a new array with all elements that match the provided condition?",
  "answers": [
    ".find()",
    ".includes()",
    ".filter()"
  ],
  "correct_answer": ".filter()",
  "save": "false"
}, {
  "id": "4",
  "category": "Fundamentals",
  "question": "What does the sort() method return?",
  "answers": [
    "A new array with the elements of the previous array sorted",
    "The sorted array. No copy is made.",
    "The sorted array and copy of the original array."
  ],
  "correct_answer": "The sorted array. No copy is made.",
  "save": "false"
}, {
  "id": "5",
  "category": "Fundamentals",
  "question": "What does Object.keys() return?",
  "answers": [
    "An array of all the keys for that object.",
    "A console.log of all the keys for that object.",
    "A list of all the property names stored in a different object."
  ],
  "correct_answer": "An array of all the keys for that object.",
  "save": "false"
}, {
  "id": "6",
  "category": "Fundamentals",
  "question": "What method is used to make an independent copy of an object or merge multiple objects together?",
  "answers": [
    "Object.values()",
    "Object.assign()",
    "Object.new()"
  ],
  "correct_answer": "Object.assign()",
  "save": "false"
}, {
  "id": "7",
  "category": "Fundamentals",
  "question": "What is a potential use case for Object.keys()?",
  "answers": [
    "Iterating over each key/value pair of an object.",
    "Making a fresh copy of an object.",
    "Removing all the keys from that object."
  ],
  "correct_answer": "Iterating over each key/value pair of an object.",
  "save": "false"
}, {
  "id": "8",
  "category": "Fundamentals",
  "question": "Which method allows us to add new elements to an array, but does not mutate the original array?",
  "answers": [
    "concat()",
    "push()",
    "unshift()"
  ],
  "correct_answer": "concat()",
  "save": "false"
}, {
  "id": "9",
  "category": "Practice",
  "question": "Choose the code snippet that will combine the elements in this array: const words = ['Today', 'is', 'going', 'great!'] and returns this sentence: 'Today is going great!'",
  "answers": [
    "words.join()",
    "words.concat()",
    "words.join(' ')"
  ],
  "correct_answer": "words.join(' ')",
  "save": "false"
}, {
  "id": "10",
  "category": "Practice",
  "question": "Choose the code snippet that will return the string 'cat' from const colors = ['cat', 'dog', 'cow']",
  "answers": [
    "colors.pop()",
    "colors.shift()",
    "colors.remove(0)"
  ],
  "correct_answer": "colors.shift()",
  "save": "false"
}, {
  "id": "11",
  "category": "Practice",
  "question": "If we had an array of names and wanted to know if that array contained the name 'George', which method will determine that and return a value of true or false?",
  "answers": [
    "names.has('George')",
    "names.includes('George')",
    "names.indexOf('George')"
  ],
  "correct_answer": "names.includes('George')",
  "save": "false"
}, {
  "id": "12",
  "category": "Fundamentals",
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correct_answer": "object",
  "save": "false"
}, {
  "id": "13",
  "category": "Fundamentals",
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correct_answer": "array",
  "save": "false"
}, {
  "id": "14",
  "category": "Fundamentals",
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correct_answer": "mutator method",
  "save": "false"
}, {
  "id": "15",
  "category": "Fundamentals",
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correct_answer": "iteration method",
  "save": "false"
}, {
  "id": "16",
  "category": "Fundamentals",
  "question": "What is an example of a mutator method?",
  "answers": ["sort()", "map()", "join()"],
  "correct_answer": "sort()",
  "save": "false"
}, {
  "id": "17",
  "category": "Fundamentals",
  "question": "Which array prototype is not an accessor method?",
  "answers": ["join()", "slice()", "splice()"],
  "correct_answer": "splice()",
  "save": "false"
}, {
  "id": "18",
  "category": "Fundamentals",
  "question": "What do iterator methods take in as their first argument?",
  "answers": ["callback function", "current element", "an array"],
  "correct_answer": "callback function",
  "save": "false"
}, {
  "id": "19",
  "category": "Practice",
  "question": "What method would you use if you want a copy of an object so you can mutate it?",
  "answers": [
    "map()",
    "reduce()",
    "object.assign()"
  ],
  "correct_answer": "object.assign()",
  "save": "false"
}, {
  "id": "20",
  "category": "Practice",
  "question": "Which method would you use if you wanted just an array of the keys of an object?",
  "answers": [
    "filter()",
    "object.key()",
    "Object.value()"
  ],
  "correct_answer": "object.key()",
  "save": "false"
}, {
  "id": "21",
  "category": "Practice",
  "question": "What method could you use to get an array of an object's key value pairs?",
  "answers": [
    "object.keys()",
    "object.assign()",
    "object.entries()"
  ],
  "correct_answer": "object.entries()",
  "save": "false"
}, {
  "id": "22",
  "category": "Practice",
  "question": "I have an array of [chicken, cow, pig], after using which prototype, could I expect an output of [eggs, milkshake, bacon]",
  "answers": [
    "concat()",
    "push()",
    "reduce()"
  ],
  "correct_answer": "reduce()",
  "save": "false"
}, {
  "id": "23",
  "category": "Practice",
  "question": "I want to check an array [taco, burrito, guac] to see if it contains guac. What proto would I use?",
  "answers": [
    "has('guac')",
    "includes('guac')",
    "indexOf('guac')"
  ],
  "correct_answer": "includes('guac')",
  "save": "false"
}, {
  "id": "24",
  "category": "Fundamentals",
  "question": "True or False: accessor methods will change the original array.",
  "answers": [
    "True",
    "False"
  ],
  "correct_answer": "False",
  "save": "false"
}, {
  "id": "25",
  "category": "Practice",
  "question": "I have an array of buzzWords [seamless, intuitive, minimalist]. How would I turn them into a sentence to describe MY app?",
  "answers": [
    "buzzWords.join()",
    "buzzWords.concat()",
    "buzzWords.join(' ')"
  ],
  "correct_answer": "buzzWords.join(' ')",
  "save": "false"
}, {
  "id": "26",
  "category": "Fundamentals",
  "question": "Which method takes in two parameters?",
  "answers": [
    "find()",
    "reduce()",
    "map()"
  ],
  "correct_answer": "reduce()",
  "save": "false"
}, {
  "id": "27",
  "category": "Practice",
  "question": "What does the callback in a `.forEach()` return?",
  "answers": [
    "a truthy value",
    "a falsey value",
    "undefined"
  ],
  "correct_answer": "undefined",
  "save": "false"
}, {
  "id": "28",
  "category": "Practice",
  "question": "If I wanted to wanted to combine two arrays [happy, birthday] and [mason], which method would I use?",
  "answers": [
    "concat()",
    "add()",
    "combine()"
  ],
  "correct_answer": "concat()",
  "save": "false"
}, {
  "id": "29",
  "category": "Practice",
  "question": "If I wanted to search through an array of games for my favorite trilogy of games, which is the best method to use?",
  "answers": [
    "filter()",
    "find()",
    "search()"
  ],
  "correct_answer": "filter()",
  "save": "false"
}, {
  "id": "30",
  "category": "Practice",
  "question": "If I wanted to put all the numbers in an array in order, which method would I use?",
  "answers": [
    "sort()",
    "order()",
    "a-z()"
  ],
  "correct_answer": "sort()",
  "save": "false"
}
]


module.exports = { jpQuestions }

