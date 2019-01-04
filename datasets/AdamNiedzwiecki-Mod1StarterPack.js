const data = [

  {
    "id": 1,
    "question": "A function on an Object",
    "answers": ["Property", "Anonymous Function", "Method"],
    "correctAnswer": "Method",
    "category": "Javascript"
  },
  {
    "id": 2,
    "question": "A way of declaring a data structure and its values at the same time",
    "answers": ["Literal", "Variable", "Const"],
    "correctAnswer": "Literal",
    "category": "JavaScript"
  },
  {
    "id": 3,
    "question": "The process of implicitly moving the declaration of variables and functions to the top of their scope",
    "answers": ["Hoisting", "Refactoring", "Conditionals"],
    "correctAnswer": "Hoisting",
    "category": "JavaScript"
  },
  {
    "id": 4,
    "question": "Used to store a collection of data items/multiple values under a single variable name",
    "answers": ["Console", "Array", "Dataset"],
    "correctAnswer": "Array",
    "category": "JavaScript"
  },
  {
    "id": 5,
    "question": "How do you access values in an Array?",
    "answers": ["Index", "Area", "Conditional Rendering"],
    "correctAnswer": "Index",
    "category": "JavaScript"
  },
  {
    "id": 6,
    "question": "Which of the following is NOT a data type?",
    "answers": ["String", "Number", "Header"],
    "correctAnswer": "Header",
    "category": "JavaScript"
  },
  {
    "id": 7,
    "question": "A variable that changes depending on the context in which it’s used",
    "answers": ["this", "Property", "Key"],
    "correctAnswer": "this",
    "category": "JavaScript"
  },
  {
    "id": 8,
    "question": "A constructor that allows us to create multiple instances",
    "answers": ["React", "Class", "Double Constructor"],
    "correctAnswer": "Class",
    "category": "JavaScript"
  },
  {
    "id": 9,
    "question": "Which of the following is NOT a way to access properties or methods in an object?",
    "answers": ["Bracket Notation", "Dot Notation", "Number Notation"],
    "correctAnswer": "Number Notation",
    "category": "JavaScript"
  },
  {
    "id": 10,
    "question": "The process of injecting a variable directly into a string",
    "answers": ["Interpolation", "Conditional", "Concatenation"],
    "correctAnswer": "Interpolation",
    "category": "JavaScript"
  },
  {
    "id": 11,
    "question": "Will show you the full list of commits and authors for your repo",
    "answers": ["git commit", "git stash", "git log"],
    "correctAnswer": "git log",
    "category": "Git Commands"
  },
  {
    "id": 12,
    "question": "Pushes your local changes up to your remote",
    "answers": ["git merge", "git push", "git checkout"],
    "correctAnswer": "git push",
    "category": "Git Commands"
  },
  {
    "id": 13,
    "question": "Shows the current status of your repo",
    "answers": ["git status", "status show", "git show"],
    "correctAnswer": "git status",
    "category": "Git Commands"
  },
  {
    "id": 14,
    "question": "Takes all unstaged work and stages it",
    "answers": ["git add", "git add origin", "git add ."],
    "correctAnswer": "git add .",
    "category": "Git Commands"
  },
  {
    "id": 15,
    "question": "Shows you the changes in your unstaged code",
    "answers": ["git difference", "git diff", "git unstaged"],
    "correctAnswer": "git diff",
    "category": "Git Commands"
  },
  {
    "id": 16,
    "question": "A building block that makes up the structure of a web page",
    "answers": ["HTML Property", "HTML Element", "HTML Block"],
    "correctAnswer": "HTML Element",
    "category": "HTML"
  },
  {
    "id": 17,
    "question": "What does HTML stand for?",
    "answers": ["HyperText Mirror Language", "HyperText Method Language", "HyperText Markup Language"],
    "correctAnswer": "HyperText Markup Language",
    "category": "HTML"
  },
  {
    "id": 18,
    "question": "This element occupies the entire width of its parent element",
    "answers": ["Inline", "Block", "Standard"],
    "correctAnswer": "Block",
    "category": "HTML"
  },
  {
    "id": 19,
    "question": "Which of the following is NOT a way to identify HTML Elements",
    "answers": ["Id", "Markup", "Class"],
    "correctAnswer": "Markup",
    "category": "HTML"
  },
  {
    "id": 20,
    "question": "These type of tags provide additional meaning through descriptive naming",
    "answers": ["Semantic ", "Still", "Announced"],
    "correctAnswer": "Semantic",
    "category": "HTML"
  },
  {
    "id": 21,
    "question": "What does CSS stand for?",
    "answers": ["Creative Style Sheets", "Cascading Style Sheets", "Center Styling Sheet"],
    "correctAnswer": "Cascading Style Sheets",
    "category": "CSS"
  },
  {
    "id": 22,
    "question": "This positioning completely removes an element from the normal flow",
    "answers": ["Absolute", "Fixed", "Relative"],
    "correctAnswer": "Absolute",
    "category": "CSS"
  },
  {
    "id": 23,
    "question": "A CSS feature that makes it possible to apply styling based on boolean logic",
    "answers": ["Response", "Markup", "Media Query"],
    "correctAnswer": "Media Query",
    "category": "CSS"
  },
  {
    "id": 24,
    "question": "A set of styles that applies default styling",
    "answers": ["CSS Reset", "Defaulting", "Style File"],
    "correctAnswer": "CSS Reset",
    "category": "CSS"
  },
  {
    "id": 25,
    "question": "How does the browser decide which CSS values are most relevant?",
    "answers": ["Relationship", "Contents", "Specificity"],
    "correctAnswer": "Specificity",
    "category": "CSS"
  },
  {
    "id": 26,
    "question": "Who is the Executive Director at Turing?",
    "answers": ["Sal Espinosa", "George Turing", "Jeff Casimir"],
    "correctAnswer": "Jeff Casimir",
    "category": "Around The Basement"
  },
  {
    "id": 27,
    "question": "Who do you Slack if you spill something on campus?",
    "answers": ["Ramiro Vaca", "Louisa Barrett", "Jake From State Farm"],
    "correctAnswer": "Ramiro Vaca",
    "category": "Around The Basement"
  },
  {
    "id": 28,
    "question": "Which of the following is not a traditonal day for Wrap up?",
    "answers": ["Tuesday", "Wednesday", "Thursday"],
    "correctAnswer": "Wednesday",
    "category": "Around The Basement"
  },
  {
    "id": 29,
    "question": "What time does STACK close?",
    "answers": ["5:00", "6:30", "7:00"],
    "correctAnswer": "7:00",
    "category": "Around The Basement"
  },
  {
    "id": 30,
    "question": "When should you wash your dirty dishes?",
    "answers": ["On Friday afternoon", "Only when they smell", "ALWAYS"],
    "correctAnswer": "ALWAYS",
    "category": "Around The Basement"
  }
];

module.exports = { data };
