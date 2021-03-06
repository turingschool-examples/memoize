const rdCards = [
{"id": 1,
"type": "return",
"title": "What does a Map return?",
"answer": "Array of equal length",
"complete": false
},
{"id": 2,
"type": "syntax",
"title": "What goes in the parameters of a Reduce?",
"answer": "Acc and Current Value",
"complete": false
},
{"id": 3,
  "type": "useCase",
  "title": "I want to find one object that has a name of Oreo, which prototype should I use?",
  "answer": "Find",
"complete": false
},
{"id": 4,
  "type": "return",
  "title": "What does a forEach return?",
  "answer": "Undefined",
"complete": false
},
{"id": 5,
  "type": "return",
  "title": "What does a Filter return?",
  "answer": "An array of a potentially different length",
"complete": false
},
{"id": 6,
  "type": "return",
  "title": "What does a Find return?",
  "answer": "A new array with the elements that pass the test.",
"complete": false
},
{"id": 7,
  "type": "return",
  "title": "What does a Reduce return?",
  "answer": "The value that results from the reduction.",
"complete": false
},
{"id": 8,
  "type": "return",
  "title": "What does a Sort return?",
  "answer": "The sorted array.",
"complete": false
},
{"id": 9,
  "type": "return",
  "title": "What does a Join return?",
  "answer": "A string with all array elements joined.",
"complete": false
},
{"id": 10,
  "type": "return",
  "title": "What does an Includes return?",
  "answer": "True or False",
"complete": false
},
{"id": 11,
  "type": "return",
  "title": "What does a Slice return?",
  "answer": "A new array containing the extracted elements.",
"complete": false
},
{"id": 12,
  "type": "return",
  "title": "What does a Splice return?",
  "answer": "An array containing the deleted elements.",
"complete": false
},
{"id": 13,
  "type": "syntax",
  "title": "What goes in the paramters of a Splice?",
  "answer": "(index, incidences, 'element')",
"complete": false
},
{"id": 14,
  "type": "syntax",
  "title": "How do you write a Map function?",
  "answer": "var newArray = array.map(elem => elem )",
"complete": false
},
{"id": 15,
  "type": "syntax",
  "title": "When using forEach what do we need to keep in mind when returing something?",
  "answer": "forEach cant return anything!",
"complete": false
},
{"id": 16,
  "type": "syntax",
  "title": "When using filter on array do we use .contains or .includes?",
  "answer": "Includes",
"complete": false
},
{"id": 17,
  "type": "syntax",
  "title": "How do you write a Sort function?",
  "answer": "function compareNumbers((a, b) = > return a - b)",
  "complete": false
},
{"id": 18,
  "type": "syntax",
  "title": "How do we write Join if we want to have a hyphen between element? ",
  "answer": "array.jon('-')",
"complete": false
},
{"id": 19,
  "type": "syntax",
  "title": "How does Includes differ from Filter?",
  "answer": "Inlcudes doesnt return an element, only True or False",
"complete": false
},
{"id": 20,
  "type": "syntax",
  "title": "How do you write a Slice function?",
  "answer": "var newArray = arry.slice(i(start), i(end));",
"complete": false
},
{"id": 21,
  "type": "syntax",
  "title": "How would I write a reduce function if I wanted an array back?",
  "answer": "array.reduce((acc,value => etc), [])",
"complete": false
},
{"id": 22,
  "type": "useCase",
  "title": "I would use this prototype to take keys from multiple objects and combine them into a new object",
  "answer": "Reduce",
"complete": false
},
{"id": 23,
  "type": "useCase",
  "title": "I would use this prototype if I wanted to console log every object in an array ",
  "answer": "forEach",
"complete": false
},
{"id": 24,
  "type": "useCase",
  "title": "I want to make an array that contains only red bicycles from my bicycleArray, which prototype?",
  "answer": "Filter",
"complete": false
},
{"id": 25,
  "type": "useCase",
  "title": "I have an array of letters that I want to combine into a single word, which prototype?",
  "answer": "Join",
"complete": false
},
{"id": 26,
  "type": "useCase",
  "title": "I want to make an array from my numberArray that has every element *2, which prototype?",
  "answer": "Map",
"complete": false
},
{"id": 27,
  "type": "useCase",
  "title": "I have an array of animals and want them in alphabetical order, which prototype?",
  "answer": "Sort",
"complete": false
},
{"id": 28,
  "type": "useCase",
  "title": "I want to confirm that my array includes a particular element, which prototype?",
  "answer": "Includes",
"complete": false
},
{"id": 29,
  "type": "useCase",
  "title": "I want to take my array and copy a certains section into a new array, which prototype?",
  "answer": "Slice",
"complete": false
},
{"id": 30,
  "type": "useCase",
  "title": "I want to remove a duplicate from my array, which prototype?",
  "answer": "Splice",
"complete": false
}
];


module.exports = {
  rdCards
}
