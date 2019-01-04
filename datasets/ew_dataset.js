const questions = [{
  "id": 1,
  "question": "What array prototype method would return a sum of the elements in an array?",
  "answers": "['.sort() ', 'reduce()','.forEach()']",
  "correct_answer": ".reduce()",
  "concept": "prototypes"
}, {
  "id": 2,
  "question": "Which prototype method returns the first element in an array?",
  "answers": "['.pop()', '.shift()', '.map()']",
  "correct_answer": ".shift()",
  "concept": "prototypes"
}, {
  "id": 3,
  "question": "Which string method will return a string with all the characters converted to capital letters?",
  "answers": "['.toCapitalize()', '.uppercase()', 'toUpperCase()']",
  "correct_answer": "toUpperCase()",
  "concept": "strings"
}, {
  "id": 4,
  "question": "Which prototype method joins two arrays together?",
  "answers": "['.concat()', '.join()', '.mesh()']",
  "correct_answer": ".concat()",
  "concept": "prototypes"
}, {
  "id": 5,
  "question": "Which prototype method returns the first index at which a given element can be found in the array? (Or -1 if it is not present)\n",
  "answers": "['.indexOf()', '.index()', '.findElement()']",
  "correct_answer": ".indexOf()",
  "concept": "prototypes"
}, {
  "id": 6,
  "question": "Which prototype method can return objects AND arrays?",
  "answers": "['.indexOf()', '.reduce()', '.arrayFrom()']",
  "correct_answer": ".reduce()",
  "concept": "prototypes"
}, {
  "id": 7,
  "question": "Which method will return the keys of a given object?",
  "answers": "['Object.keys()', 'Object.values()', 'Object.assign()']",
  "correct_answer": "Object.keys()",
  "concept": "objects"
}, {
  "id": 8,
  "question": "Which prototype method will return undefined?",
  "answers": "['.map()', '.forEach()', '.find()']",
  "correct_answer": ".forEach()",
  "concept": "prototypes"
}, {
  "id": 9,
  "question": "Which method will return the values of af given object?",
  "answers": "['Object.keys()', 'Object.keyValues()', 'Object.values()']",
  "correct_answer": "Object.values()",
  "concept": "objects"
}, {
  "id": 10,
  "question": "Which prototype method returns the first value that meets a certain condition?",
  "answers": "['.find()', '.filter()', '.forEach()']",
  "correct_answer": ".find()",
  "concept": "prototypes"
}, {
  "id": 11,
  "question": "You want to add an element to the end of an array. Which method should you use?",
  "answers": "['.pop()', '.push()', '.shift()']",
  "correct_answer": ".push()",
  "concept": "prototypes"
}, {
  "id": 12,
  "question": "This data type stores information in key-value pairs.",
  "answers": "['object', 'array', 'prototype']",
  "correct_answer": "object",
  "concept": "objects"
}, {
  "id": 13,
  "question": "Which prototype method returns a new array with all elements that match a certain condition?",
  "answers": "['.find()', '.concat()', '.filter()']",
  "correct_answer": ".filter()",
  "concept": "prototypes"
}, {
  "id": 14,
  "question": "Which prototype method returns a string of all the elements in an array combined?",
  "answers": "['.concat()', '.smush()', '.join()']",
  "correct_answer": ".join()",
  "concept": "prototypes"
}, {
  "id": 15,
  "question": "All prototype methods mutate or change the original array.",
  "answers": "['true', 'false']",
  "correct_answer": "false",
  "concept": "prototypes"
}, {
  "id": 16,
  "question": "Array prototype methods can be used directly on an object.",
  "answers": "['true', 'false']",
  "correct_answer": "false",
  "concept": "objects"
}, {
  "id": 17,
  "question": "Which prototype method will check whether an array includes a certain value?",
  "answers": "['.includes()', '.instanceOf()', '.forEach()']",
  "correct_answer": ".includes()",
  "concept": "prototypes"
}, {
  "id": 18,
  "question": "Which prototype will reverse the arraty in place?",
  "answers": "['.switch()', '.sort()', '.reverse()']",
  "correct_answer": ".reverse()",
  "concept": "prototypes"
}, {
  "id": 19,
  "question": "Which string method will return a string with all the characters converted to lowercase letters?",
  "answers": "['.toLower()', '.lowercase()', 'toLowerCase()']",
  "correct_answer": ".toLowerCase()",
  "concept": "strings"
}, {
  "id": 20,
  "question": "Which prototype method returns an array of the same length as the original array?",
  "answers": "['.map()', '.forEach()', '.reduce()']",
  "correct_answer": ".map()",
  "concept": "prototypes"
}, {
  "id": 21,
  "question": "Which string method will combine two strings together?",
  "answers": "['.concat()', '.join()', '.mesh()']",
  "correct_answer": ".concat()",
  "concept": "strings"
}, {
  "id": 22,
  "question": "What method will return the number of items in an array?",
  "answers": "['.number()', '.count()', '.length()']",
  "correct_answer": ".length()",
  "concept": "prototypes"
}, {
  "id": 23,
  "question": "Which was in NOT a method to access the values of an object?",
  "answers": "['iterator notation', 'dot notation', 'bracket notation']",
  "correct_answer": "iterator notation",
  "concept": "objects"
}, {
  "id": 24,
  "question": "Which method would you use to alphabetize an array?",
  "answers": "['.sort()', '.shift()', '.map()']",
  "correct_answer": ".sort()",
  "concept": "prototypes"
}, {
  "id": 25,
  "question": "Which prototype method will return the last element in an array?",
  "answers": "['.push()', '.shift()', '.pop()']",
  "correct_answer": ".pop()",
  "concept": "prototypes"
}, {
  "id": 26,
  "question": "forEach() cannot manipulate elements in an array since it does not return anything.",
  "answers": "['true', 'false']",
  "correct_answer": "false",
  "concept": "prototypes"
}, {
  "id": 27,
  "question": "Which prototype method adds an element to the beggining of an array?",
  "answers": "['pop()', 'shift()', 'unshift()']",
  "correct_answer": "unshift()",
  "concept": "prototypes"
}, {
  "id": 28,
  "question": "Which prototype method fills all the elements of an array with a static value?",
  "answers": "['.fill()', '.map()', '.forEach()']",
  "correct_answer": ".fill()",
  "concept": "prototypes"
}, {
  "id": 29,
  "question": "Which method will copy the values of an object or multiple objects to another object?",
  "answers": "['Object.keys()', 'Object.assign()', 'Object.values()']",
  "correct_answer": "Object.assign()",
  "concept": "objects"
}, {
  "id": 30,
  "question": "Which string method will check whether a string can be found within another string?",
  "answers": "['.find()', '.charAt()', '.includes()']",
  "correct_answer": ".includes()",
  "concept": "strings"
}]

module.exports { questions }