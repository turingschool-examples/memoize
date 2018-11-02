const questions = {
  JSONquestions: [
    {
      id: 1,
      prompt: 'What does JSON stand for?',
      answer: 'Javascript Object Notation'
    },
    {
      id: 2,
      prompt: 'What is Client Side Storage?',
      answer: 'Storage on the client (usually the browser'
    },
    {
      id: 3,
      prompt: 'What is Serer Side Storage?',
      answer: 'On someone else’s computer (often times one that is in a data warehouse), in a database'
    },
    {
      id: 4,
      prompt: 'What is local storage?',
      answer: 'Data placed in local storage is per origin and persists after the browser is closed'
    },
    {
      id: 5,
      prompt: 'What is session storage?',
      answer: 'Session storage is per-origin-per-window-or-tab and is limited to the lifetime of the window'
    },
    {
      id: 6,
      prompt: 'What is the command for storing data in local storage?',
      answer: 'localStorage.setItem()'
    },
    {
      id: 7,
      prompt: 'What is the command to pull data from local storage?',
      answer: 'localStorage.getItem()'
    },
    {
      id: 8,
      prompt: 'What is the command to delete data from local storage?',
      answer: 'localStorage.removeItem()'
    },
    {
      id: 9,
      prompt: 'What is the command to delete all data from local storage from the active domain?',
      answer: 'localStorage.clear()'
    },
    {
      id: 10,
      prompt: 'How many parameters does localStorage.setItem() take?',
      answer: 'Two'
    },
    {
      id: 11,
      prompt: 'How many parameters does localStorage.getItem() take?',
      answer: 'One'
    },
    {
      id: 12,
      prompt: 'What is an alternative language to JSON to send data back and forth over the internet?',
      answer: 'XML'
    },
    {
      id: 13,
      prompt: 'Keys have can either be single or double quoted',
      answer: 'False'
    },
    {
      id: 14,
      prompt: 'It is possible to store functions and methods in JSON',
      answer: 'True'
    },
    {
      id: 15,
      prompt: 'What is the command to turn any valid object into JSON?',
      answer: 'JSON.stringify()'
    },
    {
      id: 16,
      prompt: 'What is the command to turn any valid JSON data into a javascript object?',
      answer: 'JSON.parse()'
    }
  ],
  linkedListQuestions: [
    {
      id: 1,
      prompt: 'What is a linked list?',
      answer: 'A data structure composed of nodes'
    },
    {
      id: 2,
      prompt: 'What is a node?',
      answer: 'A space in memory that holds data and a link to the next piece of data'
    },
    {
      id: 3,
      prompt: 'How many types of linked lists are there?',
      answer: 'Three (single link, double linked, circular linked)'
    },
    {
      id: 4,
      prompt: 'What is the advantage to using a linked list over an array',
      answer: 'Cheaper to use (less RAM)'
    }
  ],
  BSTQuestions: [
    {
      id: 1,
      prompt: 'What is a binary search tree?',
      answer: 'A method of organizing data in a series of connected, sorted nodes'
    },
    {
      id: 2,
      prompt: 'What is a binary search tree made of?',
      answer: 'Two branches of nodes conjoined by one initial root node'
    },
    {
      id: 3,
      prompt: 'How many child nodes can each node have? (maximum)',
      answer: 'Two'
    },
    {
      id: 4,
      prompt: 'How are the child nodes organized under their parent node?',
      answer: 'Less than or equal values on the left child position while greater than values are on the right child position'
    },
    {
      id: 5,
      prompt: 'What are the advantages of a BST?',
      answer: 'Inexpensive, easy to use, fast'
    },
  ],
  contextQuestions: [
    {
      id: 1,
      prompt: 'What does the keyword THIS donote in javascript?',
      answer: 'THIS represents the current context of the code being executed, or the object that THIS is being called on. How a function is invoked will determine its context.'
    },
    {
      id: 2,
      prompt: 'In ES5 how is the word THIS determined?',
      answer: 'In ES5 THIS is determined when THE FUNCTION IS EXECUTED'
    },
    {
      id: 3,
      prompt: 'In ES6 how is the word THIS determined?',
      answer: 'In ES6 THIS is determined when THE FUNCTION IS DECLARED'
    },
    {
      id: 4,
      prompt: 'What does the keyword THIS default to?',
      answer: 'The window'
    },
    {
      id: 5,
      prompt: 'What does the keyword THIS denote when invoked within a method on an object?',
      answer: 'The object that it was called on'
    },
    {
      id: 6,
      prompt: 'What does the keyword THIS denote when invoked on an instance of a class?',
      answer: 'The instance of the class it was called on'
    }
  ],
  scopeQuestions: [
    {
      id: 1,
      prompt: 'What is scope?',
      answer: 'Where variables and functions are accessible'
    },
    {
      id: 2,
      prompt: 'What is a closure?',
      answer: 'An inner function that has access to (aka closes over) the variables declared outside itself'
    },
    {
      id: 3,
      prompt: 'What is an IIFE?',
      answer: 'An immediately invoked function expression, a.k.a. an anonymous function that is declared and immediately invoked'
    },
    {
      id: 4,
      prompt: 'How many types of scope are there?',
      answer: 'Four, (1: global, 2: functional, 3: block, 4: eval)'
    },
    {
      id: 5,
      prompt: 'Which variable declarations will not leak out of block scope?',
      answer: 'const and let'
    },
    {
      id: 6,
      prompt: 'In which direction can scope see?',
      answer: 'Out, never in (except variables declared in block scope with the keywordk var)'
    }
  ],
  arrayAndObjectQuestions: [
    {
      id: 1,
      prompt: 'Which three object prototype methods do we use to access data within an object?',
      answer: 'Object.keys(), Object.assign(), Object.values()'
    },
    {
      id: 2,
      prompt: 'How many parameters does Object.assign() take?',
      answer: 'Two (the source object to merge the second parameter into and the targeted object to take in'
    },
    {
      id: 3,
      prompt: 'What is the use case for Object.assign()?',
      answer: 'When you want to manipulate an object but keep the source object and the new object separate'
    },
    {
      id: 4,
      prompt: 'What does Object.assign() do?',
      answer: 'Writes a variable to a new place in memory to keep the new and old objects separate'
    },
    {
      id: 5,
      prompt: 'How many parameters does Object.keys() take?',
      answer: 'One (an object)'
    },
    {
      id: 6,
      prompt: 'What is the use case for Object.keys()?',
      answer: 'When you want an array of the objects keys, usually for iterative purposes within the object itself'
    },
    {
      id: 7,
      prompt: 'What does Object.keys() return?',
      answer: 'An array of the given objects keys'
    },
    {
      id: 8,
      prompt: 'What three types of methods do we have access to in regards to arrays?',
      answer: 'Three (mutator, accessor, iterator)'
    },
    {
      id: 9,
      prompt: 'What is a mutator method?',
      answer: 'A method that directly modifies the target array'
    },
    {
      id: 10,
      prompt: 'What is an iterator method?',
      answer: 'A method that loops through an array and may manipulate data returned by said array'
    },
    {
      id: 11,
      prompt: 'What is an accessor method?',
      answer: 'A method that does not modify the array but returns a particular representation of an array'
    },
    {
      id: 12,
      prompt: 'What are some examples of mutator methods?',
      answer: '.sort()'
    },
    {
      id: 13,
      prompt: 'What are some examples of iterator methods?',
      answer: '.map(), .forEach(), .filter(), .find(), .reduce()'
    },
    {
      id: 14,
      prompt: 'What are some examples of accessor methods?',
      answer: '.join(), .splice(), .pop(), .shift(), .unshift(), .slice(), .push()'
    },
    {
      id: 15,
      prompt: 'What does .find() return?',
      answer: 'The first matching element in an array'
    },
    {
      id: 16,
      prompt: 'What does .find() take in?',
      answer: 'A callback function'
    },
    {
      id: 17,
      prompt: 'What does .find() callback return?',
      answer: 'True or False'
    },
    {
      id: 18,
      prompt: 'What does .filter() return?',
      answer: 'A subset of the array, consisting of all elements that match our conditional'
    },
    {
      id: 19,
      prompt: 'What does .filter() take in?',
      answer: 'A callback function'
    },
    {
      id: 20,
      prompt: 'What does .filter() callback return?',
      answer: 'True or False'
    },
    {
      id: 21,
      prompt: 'What does .map() return?',
      answer: 'An array of the same length (usually modified in some way)'
    },
    {
      id: 22,
      prompt: 'What does .map() take in?',
      answer: 'A callback function'
    },
    {
      id: 23,
      prompt: 'What does .map() callback return?',
      answer: 'Modified version of current element'
    },
    {
      id: 24,
      prompt: 'What does .reduce() return?',
      answer: 'A single value of any data type chosen by the programmer'
    },
    {
      id: 25,
      prompt: 'What does .reduce() take in?',
      answer: 'A callback function AND an initial value'
    },
    {
      id: 26,
      prompt: 'What does .reduce() callback take in?',
      answer: 'An accumulator and a currentValue'
    },
    {
      id: 27,
      prompt: 'What does .reduce() callback return?',
      answer: 'An accumulator'
    },
    {
      id: 28,
      prompt: 'What does .forEach() return?',
      answer: 'NOTHING!'
    },
    {
      id: 29,
      prompt: 'What does .forEach() take in?',
      answer: 'A callback function'
    },
    {
      id: 30,
      prompt: 'What does .forEach() callback return?',
      answer: 'Nothing (We use .forEach() to perform logic with elements in an array, you can also push elements into an empty array with .forEach()'
    },
    {
      id: 31,
      prompt: 'What questions should I ask myself when asked to return a specific piece of data out of a dataset?',
      answer: '1: What kind of dataset am i given? 2: What do I want back? 3: Which prototype method will I reach for? (in the case of multiple datasets; 4: Which dataset does it make the most sense to iterate over? 5: What do the datasets have in common?)'
    }
  ]
}

module.exports = questions;