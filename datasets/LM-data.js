const data = [{
  "question": "A data structure consisting of a collection of elements, each element is identified by an index",
  "correctAnswer": "array",
  "answersChoices": ["object", "array", "Linked-list"],
  "save": false,
  "id": 1
}, {
  "question": "A function on an object",
  "correctAnswer": "Method",
  "answersChoices": ["Method", "Function", "Object Function"],
  "save": false,
  "id": 2
}, {
  "question": "This method shallow copies part of an array to another location in the same array and returns it, without modifying its size",
  "correctAnswer": "copyWithin",
  "answersChoices": ["copyWithin", "copy", "copyThis"],
  "save": false,
  "id": 3
}, {
  "question": "This method reverses an array in place. The first array element becomes the last, and the last array element becomes the first",
  "correctAnswer": "reverses",
  "answerChoices": ["reverses", "backtoFront", "backwards"],
  "save": false,
  "id": 4
}, {
  "question": "This method removes the last element from an array and returns that element. This method changes the length of the array.",
  "correctAnswer": "pop",
  "answerChoices": ["push", "pop", "unshift"],
  "save": false,
  "id": 5
}, {
  "question": "This method adds one or more elements to the beginning of an array and returns the new length of the array.",
  "correctAnswer": "unshift",
  "answerChoices": ["unshift", "shift", "push"],
  "save": false,
  "id": 6
}, {
  "question": "This method returns the value of the first element in the array that satisfies the provided testing function.",
  "correctAnswer": "find",
  "answerChoices": ["filter", "find", "map"],
  "save": false,
  "id": 7
}, {
  "question": "DRY Programming principle that means",
  "correctAnswer": "Don't Repeat Yourself",
  "answerChoices": ["Don't Repeat Yourself", "Don't Repl Yourself", "Data Removes Yarn"],
  "save": false,
  "id": 8
}, {
  "question": "An implementation of Client-side Storage",
  "correctAnswer": "localStorage ",
  "answerChoices": ["JSON", "browserStorage", "localStorage"],
  "save": false,
  "id": 9
}, {
  "question": "A shorthand for setting grid-template-rows, grid-template-columns, and grid-template-areas in a single declaration.",
  "correctAnswer": "grid-template",
  "answerChoices": ["grid-column", "grid-gap", "grid-template"],
  "save": false,
  "id": 10
}, {
  "question": "Aligns grid items along the inline (row) axis",
  "correctAnswer": "justify-items",
  "answerChoices": ["align-items", "justify-items", "center-items"],
  "save": false,
  "id": 11
}, {
  "question": "CSS property used in casting shadows off block-level elements",
  "correctAnswer": "Box Shadow",
  "answerChoices": ["Text Shadow", "Box Shadow", "Offset Shadow"],
  "save": false,,
  "id": 12
}, {
  "question": "This CSS property defines visual effects (like blur and saturation) to an element",
  "correctAnswer": "filter",
  "answerChoices": ["filter", "display", "edit"],
  "save": false,
  "id": 13
}, {
  "question": "This CSS property allows line breaks within words when a word is too long to fit within its container.",
  "correctAnswer": "word-wrap",
  "answerChoices": ["word-break", "word-wrap", "line-break"],
  "save": false,
  "id": 14
}, {
  "question": "A set of instructions that are repeated a specificed number of times or until a condition is met",
  "correctAnswer": "iteration",
  "answerChoices": ["iteration", "callback", "method"],
  "save": false,
  "id": 15
}, {
  "question": "Array prototype forEach is what kind of method?",
  "correctAnswer": "iteration",
  "answerChoices": ["iteration", "mutator", "accessor"],
  "save": false,
  "id": 16
}, {
  "question": "What does array prototype map return?",
  "correctAnswer": "a new array",
  "answerChoices": ["a new array", "modified original array", "nothing"],
  "save": false,
  "id": 17
}, {
  "question": "_______ allow you to define a set of related information using key-value pairs",
  "correctAnswer": "Object",
  "answerChoices": ["Array", "Object", "dataset"],
  "save": false,
  "id": 18
}, {
  "question": "jQuery equivalent of this line of js code: document.querySelector(\"h1\").innerText = \"DINOSAUR\"",
  "correctAnswer": "$('h1').text('DINOSAUR')",
  "answerChoices": ["#('h1').text('DINOSAUR')", "$('h1').innerText('DINOSAUR')", "$('h1').text('DINOSAUR')", "$('h1').text('DINOSAUR')"],
  "save": false,
  "id": 19
}, {
  "question": "_________ is a library that allows us to use CSS selectors to find elements on the page and then interact with them",
  "correctAnswer": "jQuery",
  "answerChoices": ["jQuery", "React", "OOP"],
  "save": false,
  "id": 20
}, {
  "question": "Functions that will run when an event happens?",
  "correctAnswer": "Event Handlers",
  "answerChoices": ["Event Propagation", "Event Delegation", "Event Handlers"],
  "save": false,
  "id": 21
}, {
  "question": "An expression that evaluates to true or false, or a control flow statement that executes code",
  "correctAnswer": "Conditional",
  "answerChoices": ["Conditional", "Operator", "Parameters"],
  "save": false,
  "id": 22
}, {
  "question": "This git command setups your local directory as a new git repository.",
  "correctAnswer": "git init",
  "answerChoices": ["git init,", "git status", "git checkout"],
  "save": false,
  "id": 23
}, {
  "question": "This git command shows the current state of your repo",
  "correctAnswer": "git status",
  "answerChoices": ["git status", "git log", "git branch"],
  "save": false,
  "id": 24
}, {
  "question": "Terminal command to creating a folder/directory",
  "correctAnswer": "mkdir",
  "answerChoices": ["touch", "mkdir", "newdir"],
  "save": false,
  "id": 25
}, {
  "question": "CSS stands for Cascading Style Sheets",
  "correctAnswer": "true",
  "answerChoices": ["true", "false"],
  "save": false,
  "id": 26
}, {
  "question": "Primitives in Javascript are: string, number, boolean, null, undefined, symbol",
  "correctAnswer": "true",
  "answerChoices": ["true", "false"],
  "save": false,
  "id": 27
}, {
  "question": "Expression is a container for a value. The main building block for all programming",
  "correctAnswer": "false",
  "answerChoices": ["true", "false"],
  "save": false,
  "id": 28
}, {
  "question": "Hoisting determines the accessibility/visibility of variables and functions",
  "correctAnswer": "false",
  "answerChoices": ["true", "false"],
  "save": false,
  "id": 29
}, {
  "question": "Event Bubbling is part of the event propagation model wherein listeners are fired on the source of the event",
  "correctAnswer": "false",
  "answerChoices": ["true", "false"],
  "save": false,
  "id": 30
}]
