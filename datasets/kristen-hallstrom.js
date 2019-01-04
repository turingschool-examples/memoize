const codeQuizQ_A = {
  "Questions": [{
      "id": 1,
      "question": "What is the syntax to get an object's keys?",
      "answers": [{
          "answer": "Object.keys(objName)",
          "correct": true
        },
        {
          "answer": "objName.object.keys()",
          "correct": false
        }
      ]
    },
    {
      "id": 2,
      "question": "What does Object.keys return?",
      "answers": [{
          "answer": "['key1','key2']",
          "correct": true
        },
        {
          "answer": "{'key1','key2'}",
          "correct": false
        }
      ]
    },
    {
      "id": 3,
      "question": "What are sort()'s two parameters?",
      "answers": [{
          "answer": "(a, b)",
          "correct": true
        },
        {
          "answer": "(1, 2)",
          "correct": false
        }
      ]
    },
    {
      "id": 4,
      "question": "Using sort(), how would you return descending numbers?",
      "answers": [{
          "answer": "b - a",
          "correct": true
        },
        {
          "answer": "2 - 1",
          "correct": false
        }
      ]
    },
     {
      "id": 5,
      "question": "Does sort() take a callback function?",
      "answers": [{
          "answer": "false",
          "correct": true
        },
        {
          "answer": "true",
          "correct": false
        }
      ]
    },
    {
      "id": 6,
      "question": "If you wanted to split a string with a space between every letter, how would you write that?",
      "answers": [{
          "answer": "string.split('')",
          "correct": true
        },
        {
          "answer": "string.split(_)",
          "correct": false
        }
      ]
    },
    {
      "id": 7,
      "question": "If you wanted to join letters into a word, how would you write that?",
      "answers": [{
          "answer": "string.join('')",
          "correct": true
        },
        {
          "answer": "string.join(+)",
          "correct": false
        }
      ]
    },
    {
      "id": 8,
      "question": "What would the array prototype method .flat() be useful for?",
      "answers": [{
          "answer": "['value1'['value2']] // ['value1','value2']",
          "correct": true
        },
        {
          "answer": "['value1']['value2'] // ['value1','value2']",
          "correct": false
        }
      ]
    },
    {
      "id": 9,
      "question": "Can you iterate over an object?",
      "answers": [{
          "answer": "false",
          "correct": true
        },
        {
          "answer": "true",
          "correct": false
        }
      ]
    },
    {
      "id": 10,
      "question": "How could you access an object with a key that changes?",
      "answers": [{
          "answer": "[]notation",
          "correct": true
        },
        {
          "answer": ".notation",
          "correct": false
        }
      ]
    },
    {
      "id": 11,
      "question": "What always needs to be returned out of a .reduce()",
      "answers": [{
          "answer": "the accumulator",
          "correct": true
        },
        {
          "answer": "the key",
          "correct": false
        }
      ]
    },
    {
      "id": 12,
      "question": "Does a .reduce() takes a callback function?",
      "answers": [{
          "answer": "true",
          "correct": true
        },
        {
          "answer": "false",
          "correct": false
        }
      ]
    },
    {
      "id": 13,
      "question": "In the .reduce()'s callback function, what are your two parameters?",
      "answers": [{
          "answer": "(accu, currVal)",
          "correct": true
        },
        {
          "answer": "(asym, key)",
          "correct": false
        }
      ]
    },
    {
      "id": 14,
      "question": "How do specify what kind of accumulator you want out out of your .reduce()?",
      "answers": [{
          "answer": "With an initial value, like an empty array",
          "correct": true
        },
        {
          "answer": "With a named variable",
          "correct": false
        }
      ]
    },
    {
      "id": 15,
      "question": "What is the best case for a .reduce()?",
      "answers": [{
          "answer": "When you need to return a different data type from an array ",
          "correct": true
        },
        {
          "answer": "When you need to return an array of the same length from an array",
          "correct": false
        }
      ]
    },
     {
      "id": 16,
      "question": "If you need to pull one specific index out of an array, what prototype method would you use?",
      "answers": [{
          "answer": ".reduce() ",
          "correct": true
        },
        {
          "answer": ".find()",
          "correct": false
        }
      ]
    },
    {
      "id": 17,
      "question": "If you need to return a subset of an array, what prototype method would you use?",
      "answers": [{
          "answer": ".filter() ",
          "correct": true
        },
        {
          "answer": ".find()",
          "correct": false
        }
      ]
    },
    {
      "id": 18,
      "question": ".sort() method is an example of what",
      "answers": [{
          "answer": "a mutator method ",
          "correct": true
        },
        {
          "answer": "an accessor method",
          "correct": false
        }
      ]
    },
    {
      "id": 19,
      "question": ".join() method is an example of what?",
      "answers": [{
          "answer": "an accessor method",
          "correct": true
        },
        {
          "answer": "a mutator method",
          "correct": false
        }
      ]
    },
    {
      "id": 20,
      "question": ".forEach() method is an example of what?",
      "answers": [{
          "answer": "an iterator method",
          "correct": true
        },
        {
          "answer": "a mutator method",
          "correct": false
        }
      ]
    },
    {
      "id": 21,
      "question": "The callback functions in both .filter() and .find() return what?",
      "answers": [{
          "answer": "a boolean value",
          "correct": true
        },
        {
          "answer": "an accumulator",
          "correct": false
        }
      ]
    },
    {
      "id": 22,
      "question": "The callback functions in a .map() returns what?",
      "answers": [{
          "answer": "a modified version of the current element",
          "correct": true
        },
        {
          "answer": "undefined",
          "correct": false
        }
      ]
    },
    {
      "id": 23,
      "question": "The callback functions in a .reduce() returns what?",
      "answers": [{
          "answer": "an accumulator",
          "correct": true
        },
        {
          "answer": "the current value",
          "correct": false
        }
      ]
    },
    {
      "id": 24,
      "question": "A .reduce() is a good catch all for all problems?",
      "answers": [{
          "answer": "false",
          "correct": true
        },
        {
          "answer": "true",
          "correct": false
        }
      ]
    },
    {
      "id": 25,
      "question": "How many elements will find return?",
      "answers": [{
          "answer": "the first element that matches",
          "correct": true
        },
        {
          "answer": "the current element",
          "correct": false
        }
      ]
    },
    {
      "id": 26,
      "question": "What’s the first question you should ask yourself when working with two datasets?",
      "answers": [{
          "answer": "What kinds of data have I been given?",
          "correct": true
        },
        {
          "answer": "What prototype methods can I remember?",
          "correct": false
        }
      ]
    },
    {
      "id": 27,
      "question": "What’s the second question you should ask yourself when working with two datasets?",
      "answers": [{
          "answer": "What do I need back from these datasets?",
          "correct": true
        },
        {
          "answer": "What would make these datasets more useful?",
          "correct": false
        }
      ]
    },
    {
      "id": 28,
      "question": "What’s the third question you should ask yourself when working with two datasets?",
      "answers": [{
          "answer": "What prototype methods could give me what I need back?",
          "correct": true
        },
        {
          "answer": "Who wrote these datasets?",
          "correct": false
        }
      ]
    },
    {
      "id": 29,
      "question": "What’s the fourth question you should ask yourself when working with two datasets?",
      "answers": [{
          "answer": "Which dataset makes the most sense to iterate over?",
          "correct": true
        },
        {
          "answer": "Why am I using these datasets?",
          "correct": false
        }
      ]
    },
    {
      "id": 30,
      "question": "What’s the fifth question you should ask yourself when working with two datasets?",
      "answers": [{
          "answer": "What do the datasets have in common?",
          "correct": true
        },
        {
          "answer": "What am I even doing here?",
          "correct": false
        }
      ]
    }
  ]
}

module.exports = {
  codeQuizQ_A
};
