const mkCards = [
    {
      "id": 101,
      "category": "html",
      "question": "What does HTML stand for?",
      "correctAnswer": "Hyper Text Markup Language",
      "answers": [
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Material Language",
      "Hyper Text Markup Language"]
    },
    {
      "id": 102,
      "category": "html",
      "question": "How do you insert a comment in HTML?",
      "correctAnswer": "<!-- A SAMPLE COMMENT -->",
      "answers": [
      "<*-- A SAMPLE COMMENT --*>",
      "<?-- A SAMPLE COMMENT -->",
      "<!-- A SAMPLE COMMENT -->",
      "<-- A SAMPLE COMMENT --!>"]
    },
    {
      "id": 103,
      "category": "html",
      "question": "How do you insert a copyright symbol on a browser page?",
      "correctAnswer": "&copy;",
      "answers": [
      "&copy;",
      "&copyRight;",
      "&copy!",
      "&copySymbol;"]
    },
    {
      "id": 104,
      "category": "html",
      "question": "Who is making the Web standards?",
      "correctAnswer": "The World Wide Web Consortium",
      "answers": [
      "Miscrosoft",
      "Firefox",
      "The World Wide Web Consortium",
      "Internet Explorer"]
    },
    {
      "id": 105,
      "category": "html",
      "question": "What is the largest HTML element heading tag?",
      "correctAnswer": "<h1>",
      "answers": [
      "<h1>",
      "<h4>",
      "<head>",
      "<header>"]
    },
    {
      "id": 106,
      "category": "html",
      "question": "How do you create an anchor tag that creates a hyperlink?",
      "correctAnswer": "<a href='http://www.w3schools.com'>google.com</a>",
      "answers": [
      "<a url='http://www.w3schools.com'>google.com</a>",
      "<a link='http://www.w3schools.com'>google.com</a>",
      "<a script='http://www.w3schools.com'>google.com</a>",
      "<a href='http://www.w3schools.com'>google.com</a>"]
    },
    {
      "id": 107,
      "category": "html",
      "question": "Which HTML attribute can open a new tab in a browser?",
      "correctAnswer": "target=\"_blank\"",
      "answers": [
      "target=\"_blank\"",
      "newTab=\"_blank\"",
      "tab=\"_new\"",
      "target=\"_tab\""]
    },
    {
      "id": 108,
      "category": "html",
      "question": "Which element makes a numbered list?",
      "correctAnswer": "<ol>",
      "answers": [
      "<ul>",
      "<li>",
      "<ol>",
      "<order>"]
    },
    {
      "id": 109,
      "category": "html",
      "question": "What is the correct HTML for inserting an image?",
      "correctAnswer": "<img src=\"image.jpg\">",
      "answers": [
      "<img src=\"image.jpg\">",
      "<img link=\"image.jpg\">",
      "<image src=\"image.jpg\">",
      "<image link=\"image.jpg\">"]
    },
    {
      "id": 110,
      "category": "html",
      "question": "Which HTML element defines the title of a document?",
      "correctAnswer": "<title>",
      "answers": [
      "<header>",
      "<title>",
      "<head>",
      "<section>"]
    },
    {
      "id": 201,
      "category": "css",
      "question": "What does CSS stand for?",
      "correctAnswer": "Cascading Style Sheets",
      "answers": [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Stylist Sheets",
      "Cascading Style Sheets" ]
    },
    {
      "id": 202,
      "category": "css",
      "question": "Which tag is the correct place to refer to an external style sheet?",
      "correctAnswer": "<head>",
      "answers": [
      "<footer>",
      "<head>",
      "<body>",
      "<section>"]
    },
    {
      "id": 203,
      "category": "css",
      "question": "Which HTML tag is used to define an internal style sheet?",
      "correctAnswer": "<style>",
      "answers": [
      "<css>",
      "<script>",
      "<head>",
      "<style>"]
    },
    {
      "id": 204,
      "category": "css",
      "question": "Which is the correct CSS syntax?",
      "correctAnswer": "body{color: black;}",
      "answers": [
      "body:color=black;",
      "{body;color:black;}",
      "body{color: black;}",
      "{body:color=black;}"]
    },
    {
      "id": 205,
      "category": "css",
      "question": "How do you insert a comment in a CSS file?",
      "correctAnswer": "/* this is a comment */",
      "answers": [
      "// this is a comment",
      "*this is a comment*",
      "/* this is a comment */",
      "// this is a comment //"]
    },
    {
      "id": 206,
      "category": "css",
      "question": "Which property is used to change the background color?",
      "correctAnswer": "background-color",
      "answers": [
      "background-color",
      "color",
      "bgcolor",
      "back-color"]
    },
    {
      "id": 207,
      "category": "css",
      "question": "Which CSS property is used to change the text color of an element?",
      "correctAnswer": "color",
      "answers": [
      "fgcolor",
      "color",
      "text-color",
      "background-text"]
    },
    {
      "id": 208,
      "category": "css",
      "question": "Which CSS property controls the text size?",
      "correctAnswer": "font-size",
      "answers": [
      "text-style",
      "text-size",
      "font-size",
      "font-style"]
    },
    {
      "id": 209,
      "category": "css",
      "question": "How do you display hyperlinks without an underline?",
      "correctAnswer": "a {text-decoration:none;}",
      "answers": [
      "a {text-decoration:no-underline;}",
      "a {text-decoration:none;}",
      "a {decoration:no-underline;}",
      "a {underline:none;}"]
    },
    {
      "id": 210,
      "category": "css",
      "question": "Which property is used to change the font of an element?",
      "correctAnswer": "font-weight",
      "answers": [
      "font-weight",
      "font-family",
      "font-style",
      "font-text"]
    },
    {
      "id": 301,
      "category": "javascript",
      "question": "Inside which HTML element do we put JavaScript into?",
      "correctAnswer": "<script>",
      "answers": [
      "<script>",
      "<javascript>",
      "<html>",
      "<css>" ]
    },
    {
      "id": 302,
      "category": "javascript",
      "question": "How do you write \"Hello World\" in an alert box?",
      "correctAnswer": "alert(\"Hello World\");",
      "answers": [
      "msgBox(\"Hello World\");",
      "alert(\"Hello World\");",
      "console.log(\"Hello World\");",
      "alertBox(\"Hello World\");"]
    },
    {
      "id": 303,
      "category": "javascript",
      "question": "How do you create a function in JavaScript?",
      "correctAnswer": "function myFunction()",
      "answers": [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "function()"]
    },
    {
      "id": 304,
      "category": "javascript",
      "question": "How do you call a function named exampleFunction?",
      "correctAnswer": "exampleFunction()",
      "answers": [
      "new exampleFunction()",
      "run exampleFunction",
      "exampleFunction",
      "exampleFunction()"]
    },
    {
      "id": 305,
      "category": "javascript",
      "question": "How to write an IF statement in JavaScript?",
      "correctAnswer": "if (i == 5)",
      "answers": [
      "if (i == 5)",
      "if i == 5 then",
      "if i = 5 then",
      "if i = 5"]
    },
    {
      "id": 306,
      "category": "javascript",
      "question": "How does a WHILE loop start?",
      "correctAnswer": "while (i <= 5)",
      "answers": [
      "while (i <= 5; i++)",
      "while (i = 0; i <= 5)",
      "while i = 1 to 5",
      "while (i <= 5)"]
    },
    {
      "id": 307,
      "category": "javascript",
      "question": "How does a FOR loop start?",
      "correctAnswer": "for (i = 0; i <= 5; i++)",
      "answers": [
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)"]
    },
    {
      "id": 308,
      "category": "javascript",
      "question": "How can you add a comment in a JavaScript?",
      "correctAnswer": "//This is a comment",
      "answers": [
      "'This is a comment",
      "//This is a comment",
      "/*This is a comment*/",
      "<!--This is a comment-->"]
    },
    {
      "id": 309,
      "category": "javascript",
      "question": "Which event occurs when the user clicks on an HTML element?",
      "correctAnswer": "onclick",
      "answers": [
      "onhover",
      "onclick",
      "onmouseover",
      "event"]
    },
    {
      "id": 310,
      "category": "javascript",
      "question": "How do you declare a JavaScript variable?",
      "correctAnswer": "var exampleVar",
      "answers": [
      "v exampleVar",
      "variable exampleVar",
      "var exampleVar",
      "new exampleVar"]
    }
]

module.exports = {
  mkCards
};