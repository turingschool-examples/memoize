const jsfunQuestions = [{
      "category": "scope",
      "question": "Which keyword would you use to declare a variable that you will not change?",
      "answers": [
        "`var`",
        "`let`",
        "`const`"
      ],
      "correctAnswer": "`const`"
    },
    {
      "category": "scope",
      "question": "If you don't want a variable to be block scoped, which keyword would you use?",
      "answers": [
        "`let`",
        "`var`",
        "`const`"
      ],
      "correctAnswer": "`var`"
    },
    {
      "category": "ES6",
      "question": "True or False: `var` names are hoisted with their values.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "ES6",
      "question": "True or False: function names are hoisted with their contents.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "true"
    },
    {
      "category": "context",
      "question": "What is the default reference for `this`?",
      "answers": [
        "the global window object",
        "the DOM",
        "an arrow function"
      ],
      "correctAnswer": "the global window object"
    },
    {
      "category": "prototype methods",
      "question": "What does the callback in a `.forEach()` return?",
      "answers": [
        "a truthy value",
        "the accumulator",
        "`undefined`"
      ],
      "correctAnswer": "`undefined`"
    },
    {
      "category": "prototype methods",
      "question": "What does `.map()` return?",
      "answers": [
        "the current element",
        "a modified array of the same length",
        "an array of a different length",
        "a truthy value"
      ],
      "correctAnswer": "a modified array of the same length"
    },
    {
      "category": "prototype methods",
      "question": "What does the `.filter()` callback return?",
      "answers": [
        "an array of a different length",
        "the current element",
        "true or false",
        "an array of a different length"
      ],
      "correctAnswer": "true or false"
    },
    {
      "category": "prototype methods",
      "question": "True or False: accessor methods will change the original array.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "prototype methods",
      "question": "What method would you use if you want a copy of an object so you can mutate it?",
      "answers": [
        "`.map()`",
        "`.reduce()`",
        "`object.assign()`",
        "`object.keys()`"
      ],
      "correctAnswer": "`object.assign()`"
    },
    {
      "category": "prototype methods",
      "question": "Which method takes in two parameters?",
      "answers": [
        "`.find()`",
        "`.reduce()`",
        "`.map()`",
        "`object.keys()`"
      ],
      "correctAnswer": "`.reduce()`"
    },
    {
      "category": "context",
      "question": "True or False: when using the `new` keyword, `this` refers to the prototype object.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "context",
      "question": "True or False: the value of `this` is set when an arrow function is created in memory.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "scope",
      "question": "Is javascript synchronous or asynchronous?",
      "answers": [
        "synchronous",
        "asynchronous"
      ],
      "correctAnswer": "synchronous"
    },
    {
      "category": "scope",
      "question": "True or False: `let` and `const` are not hoisted.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "scope",
      "question": "True or False: scope and context are virtually the same.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "scope",
      "question": "True or False: function execution context and scope are virtually the same.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "true"
    },
    {
      "category": "scope",
      "question": "The value of `this` is assigned during which phase of interpretation?",
      "answers": [
        "execution phase",
        "creation phase"
      ],
      "correctAnswer": "creation phase"
    },
    {
      "category": "prototype methods",
      "question": "Which method would you use if you wanted just an array of the keys of an object?",
      "answers": [
        "`.filter()`",
        "`object.keys()`",
        "`.reduce()`",
        "`.map()`"
      ],
      "correctAnswer": "`object.keys()`"
    },
    {
      "category": "prototype methods",
      "question": "What is the first parameter you must pass in to `object.assign()`?",
      "answers": [
        "callback",
        "current element",
        "target object",
        "source object"
      ],
      "correctAnswer": "target object"
    },
    {
      "category": "prototype methods",
      "question": "What should you use to merge multiple objects into a single object?",
      "answers": [
        "`.reduce()`",
        "`.filter()`",
        "spread operator",
        "`object.assign()`"
      ],
      "correctAnswer": "`object.assign()`"
    },
    {
      "category": "prototype methods",
      "question": "Which of these is not an accessor method (it mutates the original array)?",
      "answers": [
        "`.sort()`",
        "`.join()`",
        "`.slice()`",
        "`.push()`"
      ],
      "correctAnswer": "`.sort()`"
    },
    {
      "category": "prototype methods",
      "question": "What type of method is `.reduce()`?",
      "answers": [
        "accessor method",
        "iteration method",
        "mutator method"
      ],
      "correctAnswer": "iteration method"
    },
    {
      "category": "prototype methods",
      "question": "What method could you use to get an array of an object's key value pairs?",
      "answers": [
        "`object.keys()`",
        "`object.assign()`",
        "`object.entries()`",
        "`.forEach()`"
      ],
      "correctAnswer": "`object.entries()`"
    },
    {
      "category": "context",
      "question": "Where can we change the value of `this`?",
      "answers": [
        "we can't",
        "inside a function",
        "with `object.this()`",
        "using a variable declaration"
      ],
      "correctAnswer": "inside a function"
    },
    {
      "category": "context",
      "question": "In a named ES5 function, the value of `this` is set when:",
      "answers": [
        "the function is created",
        "the function is invoked",
        "the function has returned something"
      ],
      "correctAnswer": "the function is invoked"
    },
    {
      "category": "scope",
      "question": "When are the variable declarations assigned values?",
      "answers": [
        "execution phase",
        "creation phase",
        "hoisting"
      ],
      "correctAnswer": "execution phase"
    },
    {
      "category": "ES6",
      "question": "True or False: arrow functions can always replace regular functions.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "false"
    },
    {
      "category": "ES6",
      "question": "When would you want to use a regular function instead of an arrow function?",
      "answers": [
        "click handlers",
        "object methods",
        "prototype methods",
        "all of the above"
      ],
      "correctAnswer": "all of the above"
    },
    {
      "category": "scope",
      "question": "True or False: from outside of a function, we can't access that function's local variables unless they are returned from it.",
      "answers": [
        "true",
        "false"
      ],
      "correctAnswer": "true"
    }
  ];

module.exports = { jsfunQuestions };
