const codeWizCategories = {
  "scopeQuestions": [{
      "question": "A program that executes JavaScript code. Most commonly used in web browsers.",
      "answers": [{
          "answer": "Interpreter",
          "isCorrect": true
        },
        {
          "answer": "Operating System",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Define scope",
      "answers": [{
          "answer": "The level in which a variable can be accessed",
          "isCorrect": true
        },
        {
          "answer": "The length of the array",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "An inner function that has access to (aka closes over) the variables declared outside itself.",
      "answers": [{
          "answer": "Closure",
          "isCorrect": true
        },
        {
          "answer": "Hoisting",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "The process of implicitly moving the declaration of variables and functions to the top of their scope.",
      "answers": [{
          "answer": "Hoisting",
          "isCorrect": true
        },
        {
          "answer": "Operating System",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which two keywords allow a variable to be block scoped?",
      "answers": [{
          "answer": "let, const",
          "isCorrect": true
        },
        {
          "answer": "var, const",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: Functions and variables in the global scope are “vulnerable” because they can be accessed by everything and potentially mutated.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "What is considered a block statement?",
      "answers": [{
          "answer": "An if statement",
          "isCorrect": true
        },
        {
          "answer": "A function",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Suppose you declare a variable in a for loop and you need that variable to stay scoped within the loop. Which of the following keywords should you use?",
      "answers": [{
          "answer": "let",
          "isCorrect": true
        },
        {
          "answer": "var",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: Child scopes have access to parent scopes, but not vice versa.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "True",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Variables declard in the global scope are added as properties of the ______.",
      "answers": [{
          "answer": "Window",
          "isCorrect": true
        },
        {
          "answer": "Interpreter",
          "isCorrect": false
        }
      ]
    }
  ],

  "prototypeMethodQuestions": [{
      "question": "Which of the following prototype methods return an array of the same length as the original array?",
      "answers": [{
          "answer": "Map",
          "isCorrect": true
        },
        {
          "answer": "Reduce",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which of the following array prototype methods are mutator methods?",
      "answers": [{
          "answer": "Pop, push, shift, unshift",
          "isCorrect": true
        },
        {
          "answer": "Map, reduce, filter, find",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which method is capable of returning an object?",
      "answers": [{
          "answer": "Reduce",
          "isCorrect": true
        },
        {
          "answer": "Find",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which method returns a subset of the original array containing only the elements that match a given condition?",
      "answers": [{
          "answer": "Filter",
          "isCorrect": true
        },
        {
          "answer": "forEach",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which method returns the first element which matches a given condition?",
      "answers": [{
          "answer": "Find",
          "isCorrect": true
        },
        {
          "answer": "Object.keys",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which method returns an array of an object's keys?",
      "answers": [{
          "answer": "Object.keys",
          "isCorrect": true
        },
        {
          "answer": "Object.assign",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which method can make a copy of an existing object or merge multiple objects into a new object?",
      "answers": [{
          "answer": "Object.assign",
          "isCorrect": true
        },
        {
          "answer": "Object.values",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which method returns a copy of a portion of an existing array?",
      "answers": [{
          "answer": "Slice",
          "isCorrect": true
        },
        {
          "answer": "Splice",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which type of method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answers": [{
          "answer": "Iterator",
          "isCorrect": true
        },
        {
          "answer": "Accessor",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Which array prototype method is an iterator which return undefined?",
      "answers": [{
          "answer": "forEach",
          "isCorrect": true
        },
        {
          "answer": "Map",
          "isCorrect": false
        }
      ]
    }
  ],

  "contextQuestions": [{
      "question": "True or false: The value of 'this' can only be changed inside of a function.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: 'this' refers to the current context or owner of the code being executed.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: 'this' refers to the object on which the current function is called.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "By default, 'this' refers to _____.",
      "answers": [{
          "answer": "The window, or the global object",
          "isCorrect": true
        },
        {
          "answer": "The interpreter",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: In ES5, the value of 'this' is set when the function is invoked.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: In ES6, the value of 'this' is set when the function is declared.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "When using the keyword 'new', this refers to _____",
      "answers": [{
          "answer": "The newly created object",
          "isCorrect": true
        },
        {
          "answer": "The window",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "This function creates a new instance of an object.",
      "answers": [{
          "answer": "Constructor function",
          "isCorrect": true
        },
        {
          "answer": "Super function",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: In arrow functions, 'this' retains the value of the enclosing lexical context.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "True or false: Context is most often determined by how a function is invoked.",
      "answers": [{
          "answer": "True",
          "isCorrect": true
        },
        {
          "answer": "False",
          "isCorrect": false
        }
      ]
    }

  ]
}
module.exports = {
  codeWizCategories
};