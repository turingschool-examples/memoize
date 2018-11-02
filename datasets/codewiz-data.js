const categories = {
  "scopeQuestions": [{
      "question": "A program that executes JavaScript code. Most commonly used in web browsers.",
      "answers": [{
          "answer": "Interpreter",
          "isTrue": true
        },
        {
          "answer": "Operating System",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Define scope",
      "answers": [{
          "answer": "The level in which a variable can be accessed",
          "isTrue": true
        },
        {
          "answer": "The length of the array",
          "isTrue": false
        }
      ]
    },
    {
      "question": "An inner function that has access to (aka closes over) the variables declared outside itself.",
      "answers": [{
          "answer": "Closure",
          "isTrue": true
        },
        {
          "answer": "Hoisting",
          "isTrue": false
        }
      ]
    },
    {
      "question": "The process of implicitly moving the declaration of variables and functions to the top of their scope.",
      "answers": [{
          "answer": "Hoisting",
          "isTrue": true
        },
        {
          "answer": "Operating System",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which two keywords allow a variable to be block scoped?",
      "answers": [{
          "answer": "let, const",
          "isTrue": true
        },
        {
          "answer": "var, const",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: Functions and variables in the global scope are “vulnerable” because they can be accessed by everything and potentially mutated.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "What is considered a block statement?",
      "answers": [{
          "answer": "An if statement",
          "isTrue": true
        },
        {
          "answer": "A function",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Suppose you declare a variable in a for loop and you need that variable to stay scoped within the loop. Which of the following keywords should you use?",
      "answers": [{
          "answer": "let",
          "isTrue": true
        },
        {
          "answer": "var",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: Child scopes have access to parent scopes, but not vice versa.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "True",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Variables declard in the global scope are added as properties of the ______.",
      "answers": [{
          "answer": "Window",
          "isTrue": true
        },
        {
          "answer": "Interpreter",
          "isTrue": false
        }
      ]
    }
  ],

  "prototypeMethodQuestions": [{
      "question": "Which of the following prototype methods return an array of the same length as the original array?",
      "answers": [{
          "answer": "Map",
          "isTrue": true
        },
        {
          "answer": "Reduce",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which of the following array prototype methods are mutator methods?",
      "answers": [{
          "answer": "Pop, push, shift, unshift",
          "isTrue": true
        },
        {
          "answer": "Map, reduce, filter, find",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which method is capable of returning an object?",
      "answers": [{
          "answer": "Reduce",
          "isTrue": true
        },
        {
          "answer": "Find",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which method returns a subset of the original array containing only the elements that match a given condition?",
      "answers": [{
          "answer": "Filter",
          "isTrue": true
        },
        {
          "answer": "forEach",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which method returns the first element which matches a given condition?",
      "answers": [{
          "answer": "Find",
          "isTrue": true
        },
        {
          "answer": "Object.keys",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which method returns an array of an object's keys?",
      "answers": [{
          "answer": "Object.keys",
          "isTrue": true
        },
        {
          "answer": "Object.assign",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which method can make a copy of an existing object or merge multiple objects into a new object?",
      "answers": [{
          "answer": "Object.assign",
          "isTrue": true
        },
        {
          "answer": "Object.values",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which method returns a copy of a portion of an existing array?",
      "answers": [{
          "answer": "Slice",
          "isTrue": true
        },
        {
          "answer": "Splice",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which type of method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answers": [{
          "answer": "Iterator",
          "isTrue": true
        },
        {
          "answer": "Accessor",
          "isTrue": false
        }
      ]
    },
    {
      "question": "Which array prototype method is an iterator which return undefined?",
      "answers": [{
          "answer": "forEach",
          "isTrue": true
        },
        {
          "answer": "Map",
          "isTrue": false
        }
      ]
    }
  ],

  "contextQuestions": [{
      "question": "True or false: The value of 'this' can only be changed inside of a function.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: 'this' refers to the current context or owner of the code being executed.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: 'this' refers to the object on which the current function is called.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "By default, 'this' refers to _____.",
      "answers": [{
          "answer": "The window, or the global object",
          "isTrue": true
        },
        {
          "answer": "The interpreter",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: In ES5, the value of 'this' is set when the function is invoked.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: In ES6, the value of 'this' is set when the function is declared.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "When using the keyword 'new', this refers to _____",
      "answers": [{
          "answer": "The newly created object",
          "isTrue": true
        },
        {
          "answer": "The window",
          "isTrue": false
        }
      ]
    },
    {
      "question": "This function creates a new instance of an object.",
      "answers": [{
          "answer": "Constructor function",
          "isTrue": true
        },
        {
          "answer": "Super function",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: In arrow functions, 'this' retains the value of the enclosing lexical context.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    },
    {
      "question": "True or false: Context is most often determined by how a function is invoked.",
      "answers": [{
          "answer": "True",
          "isTrue": true
        },
        {
          "answer": "False",
          "isTrue": false
        }
      ]
    }

  ]
}
module.exports = {
  categories
};