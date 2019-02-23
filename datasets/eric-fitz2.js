const mod2information = [
  { "id": 1,
    "categories":"Context",
    "question": "What is the default value of the THIS keyword?",
    "answer1": "The DOM Tree",
    "answer2": "The Global Window Object", 
    "answer3": "The Call Stack",
    "correctAnswer": "The Global Window Object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }
    ,
    { "id": 2,
    "categories":"Context",
    "question": "When executing a method on an object, what does THIS refer to?",
    "answer1": "That object",
    "answer2": "Any object", 
    "answer3": "All objects",
    "correctAnswer": "That object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }
    ,
    { "id": 3,
    "categories":"Context",
    "question": "What will THIS refer to when an object has been instantiated using the NEW operator?",
    "answer1": "The Global Window Object",
    "answer2": "The newly instantiated object", 
    "answer3": "The constructor on the class",
    "correctAnswer": "The newly instantiated object",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  }
    ,
    { "id": 4,
    "categories":"Arrow Functions",
    "question": "What is the defalut THIS context for an arrow function?",
    "answer1": "The Global Window Object",
    "answer2": "Arrow functions do not have their own THIS", 
    "answer3": "The DOM",
    "correctAnswer": "Arrow functions do not have their own THIS",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  }
    ,
    { "id": 5,
    "categories":"Arrow Functions",
    "question": "When is the context of THIS set when using an arrow function?",
    "answer1": "THIS is set upon invokation",
    "answer2": "THIS is never set with an arrow function", 
    "answer3": "THIS is set upon declaration",
    "correctAnswer": "THIS is set upon declaration",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  }
    ,  
    { "id": 6,
    "categories":"Arrow Functions",
    "question": "When will an arrow function have an implied return?",
    "answer1": "If there are no curly braces to wrap the return",
    "answer2": "Always", 
    "answer3": "If there are curly braces to wrap the return",
    "correctAnswer": "If there are no curly braces to wrap the return",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  }
    ,
    { "id": 7,
    "categories":"Scope",
    "question": "Scope refers to ____",
    "answer1": "which values and expressions are visible and can be referenced",
    "answer2": "how THIS is defined in a function", 
    "answer3": "which variables will be hoisted",
    "correctAnswer": "which values and expressions are visible and can be referenced",
    "link": "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
  }
    ,
    { "id": 8,
    "categories":"Scope",
    "question": "Variables defined with ____ will always be in the global scope.",
    "answer1": "var",
    "answer2": "let", 
    "answer3": "const",
    "correctAnswer": "var",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
  }
    ,
    { "id": 9,
    "categories":"Scope",
    "question": "Which variable keyword will NOT throw an error when accessed before a value is assigned",
    "answer1": "var",
    "answer2": "let", 
    "answer3": "const",
    "correctAnswer": "var",
    "link": "https://wesbos.com/temporal-dead-zone/"
  }
    ,
    { "id": 10,
    "categories":"Scope",
    "question": "Which variable keywords will adhere to block scope?",
    "answer1": "var and const",
    "answer2": "let and var", 
    "answer3": "let and const",
    "correctAnswer": "let and const",
    "link": "http://frontend.turing.io/lessons/module-2/advanced-scope.html"
  }
    ,
    { "id": 11,
    "categories":"Array",
    "question": "Which method could change an array into a single value of varying types?",
    "answer1": ".reduce", 
    "answer2": ".filter", 
    "answer3": ".unshift",
    "correctAnswer": ".reduce",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
  }
    ,
    { "id": 12,
    "categories":"Array",
    "question": "If you wanted to add an element to an array, which method would you reach for?",
    "answer1": ".reduce",
    "answer2": ".add",
    "answer3": ".push",
    "correctAnswer": ".push",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
  }
    ,
    { "id": 13,
    "categories":"Array",
    "question": "If you wanted to alphabetize your array, you might choose ______ ",
    "answer1": ".join",
    "answer2": ".concat",
    "answer3": ".sort",
    "correctAnswer": ".sort",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
  }
    ,
    { "id": 14,
    "categories":"Array",
    "question": "If you want to see if an array has a certain element, you might use _____ .",
    "answer1": ".length",
    "answer2": ".unshift",
    "answer3": ".includes",
    "correctAnswer": ".includes",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
  }
    ,
    { "id": 15,
    "categories":"Array",
    "question": "Will .slice mutate the original array?",
    "answer1": "Mutate?  It's not halloween!",
    "answer2": "Yes, it is a mutator method!",
    "answer3": "No, it is an iterator method!",
    "correctAnswer": "No, it is an iterator method!",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
  }
    ,
    { "id": 16,
    "categories":"String",
    "question": "What method will change a string into an array of its characters?",
    "answer1": ".splice",
    "answer2": ".concat", 
    "answer3": ".split",
    "correctAnswer": ".split",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
  }
    ,
    { "id": 17,
    "categories": "String",
    "question": "What method could you use to change a specified character with another?",
    "answer1": ".replace",
    "answer2": ".set", 
    "answer3": ".find",
    "correctAnswer": ".replace",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
  }
    ,
    { "id": 18,
    "categories":"String",
    "question": "If no value is found for a specified location, this method returns -1.",
    "answer1": ".find",
    "answer2": ".filter", 
    "answer3": ".indexOf",
    "correctAnswer": ".indexOf",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
  }
    ,
    { "id": 19,
    "categories":"Testing",
    "question": "What are the phases of a test?",
    "answer1": "setup, execution, assertion, teardown",
    "answer2": "red, green, refactor", 
    "answer3": "beforeEach, creation, expectation, afterEach",
    "correctAnswer": "setup, execution, assertion, teardown",
    "link": "http://frontend.turing.io/lessons/module-2/test-driven-development.html"
  }
    ,
    { "id": 20,
    "categories":"Testing",
    "question": "Mocha is a ___________.",
    "answer1": "testing delicious caffinated beverage",
    "answer2": "assertion library", 
    "answer3": "testing framework",
    "correctAnswer": "testing framework",
    "link": "https://mochajs.org/"
  }
    ,
    { "id": 21,
    "categories":"Testing",
    "question": "Why are Chai-spies necessary when testing DOM manipulation?",
    "answer1": "Chai and Mocha do not know what the DOM is",
    "answer2": "Chai-spies are better at recognizing calls to methods", 
    "answer3": "Mocked functions are more accurate tests",
    "correctAnswer": "Chai and Mocha do not know what the DOM is",
    "link": "https://github.com/chaijs/chai-spies"
  }
    ,
    { "id": 22,
    "categories":"React",
    "question": "What are some notable differences between props and state",
    "answer1": "State is an object and props are arrays",
    "answer2": "State is immutable and props are mutable", 
    "answer3": "Both are objects.  State is mutable, props are not",
    "correctAnswer": "Both are objects.  State is mutable, props are not",
    "link": "https://reactjs.org/"
  }
    ,
    { "id": 23,
    "categories":"React",
    "question": "Where can the props object be visually seen in a rendered component?",
    "answer1": "In the file of the component that has those props",
    "answer2": "In the render section on the parent component", 
    "answer3": "In the render section of the child component",
    "correctAnswer": "In the render section on the parent component",
    "link": "https://reactjs.org/docs/components-and-props.html"
  }
    ,
    { "id": 24,
    "categories":"React",
    "question": "What will an update in a component's state trigger",
    "answer1": "A new component",
    "answer2": "A new props object", 
    "answer3": "A re-render",
    "correctAnswer": "A re-render",
    "link":"https://reactjs.org/docs/state-and-lifecycle.html"
  }
    ,
    { "id": 25,
    "categories":"Sass",
    "question": "What does Sass stand for?",
    "answer1": "Super Awesome Syntax Styles",
    "answer2": "Sassy CSS", 
    "answer3": "Syntactically Awesome Style Sheets",
    "correctAnswer": "Syntactically Awesome Style Sheets",
    "link": "https://skillcrush.com/2014/07/29/jargon-begone-common-sass-terminology-beginners/"
  }
    ,
    { "id": 26,
    "categories":"Sass",
    "question": "Which are examples of Sass tools?",
    "answer1": "mixins, nesting, variables",
    "answer2": "JSX, virtual DOM, components", 
    "answer3": "assertions, expectations, outcomes",
    "correctAnswer": "mixins, nesting, variables",
    "link": "http://frontend.turing.io/lessons/module-2/introduction-to-sass.html"
  }
    ,
    { "id": 27,
    "categories":"General",
    "question": "What does SRP stand for?",
    "answer1": "Setup, Repeat, Persist",
    "answer2": "Single Repetition Program", 
    "answer3": "Single Responsibility Principle",
    "correctAnswer": "Single Responsibility Principle",
    "link": "http://frontend.turing.io/lessons/module-2/intro-to-oop.html"
  }
    ,
    { "id": 28,
    "categories":"General",
    "question": "What is technical debt?",
    "answer1": "Code that is broken",
    "answer2": "Code that is inefficient, hard to read, or difficult to maintain", 
    "answer3": "Code that has only been refactored once",
    "correctAnswer": "Code that is inefficient, hard to read, or difficult to maintain",
    "link": "http://frontend.turing.io/lessons/module-2/refactoring-guidelines.html"
  }
    ,{ "id": 29,
    "categories":"General",
    "question": "What is NOT a benefit of filing issues on Github?",
    "answer1": "You can track current and future work to be done",
    "answer2": "You can determine which problems have been fixed", 
    "answer3": "You can manipulate the content of a single commit",
    "correctAnswer": "You can manipulate the content of a single commit",
    "link": "http://frontend.turing.io/lessons/module-2/github-collaboration.html"
  }
    ,
      { "id": 30,
    "categories":"General",
    "question": "Javascript is a/an _________ language.",
    "answer1": "single-threaded, synchronous",
    "answer2": "single-threaded, asynchronous", 
    "answer3": "single-threaded, pre-compiled",
    "correctAnswer": "single-threaded, synchronous",
    "link": "http://frontend.turing.io/lessons/module-2/intro-xhr-ajax-fetch.html"
  }
]

module.exports = { mod2information };