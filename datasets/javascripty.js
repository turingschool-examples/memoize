const javascripty = [
  {
    "id": 0, 
    "category": "variables", 
    "question": "Why are variables the building block of all programming?", 
    "answers": ["They act as a containers for values that can later be reused.", "Data is stored in their name.", "They allow us to build blocks of code." ],
    "correct-answer": "They act as a containers for values that can later be reused."
  }, 

  {
    "id": 1, 
    "category": "variables", 
    "question": "In Javascript, do variables have a type assigned to it?",  
    "answers":  ["When declaring a variable a type is assigned upon assignment", "No, once you assign a specific literal type to a variable, you can later reassign the variable to host any other type, without type errors or any issue.", "Javascript is sometimes referenced as a typed language."],
    "correct-answer": "No, once you assign a specific literal type to a variable, you can later reassign the variable to host any other type, without type errors or any issue." 
  }, 
  {
    "id": 2, 
    "category": "variables", 
    "question": "Does a variable have to be declared before you can use it?",  
    "answers": ["Hoisting allows us to use variables before they are declared.", "Variables can be used whenever our code is being executed.", "A variable must be declared with var, let, or const before it can be used."],  
    "correct-answer": "A variable must be declared with var, let, or const before it can be used."
  },
  {
    "id": 3, 
    "category": "functions", 
    "question": "What is a function?", 
    "answers": ["When one line of code interacts with another.", "A function is a block of code, self contained, that can be defined once and run any number of times you want.", "A function is when a variable is assigned by reference."],
    "correct-answer": "A function is a block of code, self contained, that can be defined once and run any number of times you want." 
  },
  {
    "id": 4, 
    "category": "functions", 
    "question": "Every function returns a value. What is the default value of a function?", 
   "answers": ["Undefined", "True", "String"],
    "correct-answer": "Undefined"
  },
  {
    "id": 5, 
    "category": "functions", 
    "question": "When using an arrow function, what is the significance of them having an implicit return?", 
    "answers" : ["Values are returned without having to use the keyword return.", "Values are hoisted.", "The function will continue executing."], 
    "correct-answer": "Values are returned without having to use the keyword return."
  },
  {
    "id": 6, 
    "category": "conditionals", 
    "question": "What does a conditional statement in accomplish?", 
    "answers": ["Allows us to merge lines of code.", "Makes a conditional line of code.", "A conditional statement checks specific condition(s) and performs a task based on the condition(s)."],
    "correct-answer": "A conditional statement checks specific condition(s) and performs a task based on the condition(s)." 
  },
  {
    "id": 7, 
    "category": "conditionals", 
    "question": "Are all values truthy?", 
    "answers": ["All values are truthy unless they are defined as falsy.", "Any value assigned to a variable is truthy.", "By default any value encountered in boolean context is truthy."],
    "correct-answer": "All values are truthy unless they are defined as falsy."
  },
  {
    "id": 8, 
    "category": "conditionals", 
    "question": "Will an 'if' statement be bypassed are coerced to false in Boolean contexts?", 
    "answers": ["False, our code with execute using instructions between an if statements curly braces.", "When an if statement encounters a falsy value that goes against our condition will be bypassed.", "All values in a conditional are truthy."], 
    "correct-answer": "When an if statement encounters a falsy value that goes against our condition will be bypassed." 
  },
  {
    "id": 9, 
    "category": "complex data types", 
    "question": "Why are arrays and objects considered complex data types?", 
    "answers": ["Due to the complexity it takes to create them.", "Because they are mutable and all complex data types are objects with methods.", "They allow us to store lots of information."], 
    "correct-answer": "Because they are mutable and all complex data types are objects with methods."
  },
  {
    "id": 10, 
    "category": "complex data types", 
    "question": "Why are complex data types like arrays and objects assigned by reference?", 
    "answers": [ "False. They are assigned by value.", "If assigned to a variable it can refer to all names used previously to create our object.", "When we create a variable and assign it to a pre-existing object, that variable will refer to that object in memory."], 
    "correct-answer": "When we create a variable and assign it to a pre-existing object, that variable will refer to that object in memory." 
  },
  {
    "id": 11, 
    "category": "complex data types", 
    "question": "Which of the following are considered complex data types.", 
    "answers": ["Arrays, Dates, Objects, JSON", "Booleans, Strings, Closures, JSX", "Numbers, Arrays", "Objects", "Null"], 
    "correct-answer": "Arrays, Dates, Objects, JSON" 
  },
  {
    "id": 12, 
    "category": "primitive data types", 
    "question": "Which of the following are primitive data types?", 
    "answers": [ "Numbers, Arrays", "Objects", "Null", "Strings, Numbers, Booleans", "Null", "Undefined", "Booleans, Strings, Closures, JSX"], 
    "correct-answer": " Strings, Numbers, Booleans, Null, Undefined"
  }, 
  {
    "id": 13, 
    "category": "primitive data types", 
    "question": "Which primitive values do not have object equivalent wrappers that wrap their value?", 
    "answers": ["Numbers and Booleans", "Symbol and Closure", "Null and Undefined"], 
    "correct-answer": "Null and Undefined" 
  },
  {
    "id": 14, 
    "category": "primitive data types", 
    "question": "Are primitive data types immutable?", 
    "answers": ["All primitives are immutable, a variable can be reassigned a new value, but the existing value can not be changed.", "Primitives are objects, which allows them to be mutated.", "Primitives can be updated throughout our code."], 
    "correct-answer": "All primitives are immutable, a variable can be reassigned a new value, but the existing value can not be changed."
  },
  {
    "id": 15, 
    "category": "scope", 
    "question": "What is scope?", 
    "answers": ["The environment where a variable can be accessed.", "The process where the interpreter compiles all function and variable declarations.", "A brand of mouthwash made by Proctor & Gamble."], 
    "correct-answer": "The environment where a variable can be accessed."
  },
  {
    "id": 16, 
    "category": "scope", 
    "question": "What are the three levels of scope that determines a variables accessibility?",
    "answers": [ "Local, Advantage, Road","Global, Function, Block", "Global, Local, Branch"], 
    "correct-answer": "Global, Function, Block"
  },
  {
    "id": 17, 
    "category": "scope", 
    "question": "What is the scope chain?", 
    "answers": ["The process where the interpreter compiles all function and variable declarations.", "When a variable declaration is assigned a value.", "Every line of code has a scope associated to it, our interpreter will traverse up parent scope until it finds the variable declaration."], 
    "correct-answer": "Every line of code has a scope associated to it, our interpreter will traverse up parent scope until it finds the variable declaration."
  },
  {
    "id": 18, 
    "category": "this", 
    "question": "Which of the following is not a rule that impacts the context to the keyword this?",
    "answers": ["Default this refers to the global window object.", "In function code invoked using the new operator, this refers to the newly created object.", "This will always refer to the current line of code that is executing by default."], 
    "correct-answer": "This will always refer to the current line of code that is executing by default."
  },
  {
    "id": 19,  
    "category": "this", 
    "question": "What does this refer to in Javascript?", 
    "answers": ["This refers to the current context or owner of code being executed.", "This will always refer to our variable assignments.", "This in Javascript is a reserved word used to destructure complex data types."], 
    "correct-answer": "This refers to the current context or owner of code being executed." 
  },
  {
    "id": 20, 
    "category": "classes", 
    "question": "What type of tool do classes allow us to implement?", 
    "answers": ["Reusable Code", "Inheritance", "Constructors"], 
    "correct-answer": "Inheritance"
  },
  {
    "id": 21, 
    "category": "classes", 
    "question": "What is a class?", 
    "answers": ["An object that inherits from a parent class.", "An instructional function.", "A blueprint of an object that provides what information it should contain and how it should interact with data."],
    "correct-answer": "A blueprint of an object that provides what information it should contain and how it should interact with data." 
  },
  {
    "id": 22, 
    "category": "classes", 
    "question": "What method must we use to invoke a classes constructor method?", 
    "answers": ["setTimeout()", "setState()", "super()"], 
    "correct-answer": "super()"
  },
  {
    "id": 23, 
    "category": "prototypal inheritance", 
    "question": "JavaScript is based on the prototype inheritance model. What does this mean?", 
    "answers": ["Prototypes help invoke functions.", "Every single JavaScript object has a property, called prototype, which points to a different object.", "Our objects inherit properties and methods from other function definitions."], 
    "correct-answer": "Every single JavaScript object has a property, called prototype, which points to a different object."
  },
  {
    "id": 24, 
    "category": "prototypal inheritance", 
    "question": "Why do we need built in methods for our data types.", 
    "answers": ["Without built in methods we would not be able to manipulate data.", "Built in methods allow us to create templates.", "Without built in methods we would not be able to use the prototype chain."], 
    "correct-answer": "Without built in methods we would not be able to manipulate data."
  },
  {
    "id": 25, 
    "category": "parameters vs. arguments", 
    "question": "What is the difference between the two?", 
    "answers": ["Parameters act as placeholders for values that will be needed for a function, and arguments are real values passed into functions that take parameters.", "Both terms are interchangeable.", "Parameters are set to invoke a function, and arguments are another way to refer to variable assignments." ],  
    "correct-answer": "Parameters act as placeholders for values that will be needed for a function, and arguments are real values passed into functions that take parameters."
  },
  {
    "id": 26, 
    "category": "parameters vs. arguments", 
    "question": "Can objects be passed into a function as an object?", 
    "answers": ["No, only primitive data types can be passed into an object.", "Primitives or objects can be passed into an object.", "Objects can only be passed as arguments in arrow function." ], 
    "correct-answer": "Primitives or Objects can be passed into an object."
  },
  {
    "id": 27, 
    "category": "dot notation vs bracket notation", 
    "question": "Between bot and bracket notation, which should we default to using?", 
    "answers": ["Dot is typically default, but recognize when to use bracket.", "Always default to bracket due to its flexibility.", "All of the above."], 
    "correct-answer": "Dot is typically default, but recognize when to use bracket."
  },
  {
    "id": 28, 
    "category": "dot notation vs bracket notation" , 
    "question": "What is a benefit from using bracket notation?", 
    "answers": ["If we know what our key is and it is not changing.", "Bracket Notation is great for creating dynamic ket value pairs.", "Grants access to values of an object."],  
    "correct-answer": "Bracket Notation is great for creating dynamic ket value pairs."
  },
  {
    "id": 29, 
    "category": "the event loop", 
    "question": "What could block the thread of an event loop?", 
    "answers": ["Creating and infinite loop or synchronous network calls.", "Using an anonymous function.", "Reassigning a variable in block scope."], 
    "correct-answer": "Creating and infinite loop or synchronous network calls."
  }
]; 

module.exports = { javascripty }; 
  