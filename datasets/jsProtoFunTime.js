const problems = [
 {
   "question": "You are given the following array of numbers: [1, 3, 5, 6, 7, 9]. You are only interested in numbers that are divisible by 3. Return a new array or numbers that contains only the numbers divisible by 3.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "filter",
   "input": [1, 3, 5, 6, 7, 9],
   "result": [3, 6, 9],
   "difficulty": 2
 },
 {
   "question": "You are given the following array of words to use in Scrabble: ['dog', 'fright', 'silly', 'chair', 'kittens', 'pizza']. You only want to use a few of your letters though so you would like to filter out the longer words. Return a new array of only words with fewer than 5 letters.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "filter",
   "input": ["dog", "fright", "silly", "chair", "kittens", "pizza"],
   "result": ["dog", "silly", "chair", "pizza"],
   "difficulty": 3
 },
 {
   "question": "You are given the following array of numbers: [-1, 8, 3, -5, 2, 9]. You don't only like positive numbers so you want to filter out all the negativity. Return a new array with only positive numbers.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "filter",
   "input": [-1, 8, 3, -5, 2, 9],
   "result": [8, 3, 2, 9],
   "difficulty": 2
 },
 {
   "question": "You are given the following array: [50, 40, 30, 20, 10]. You want to find the first number that is less than 35. Return the first number in this array that is less than 35.",
   "inputDataType": "array",
   "outputDataType": "number",
   "method": "find",
   "input": [50, 40, 30, 20, 10],
   "result": "30",
   "difficulty": 2
 },
 {
   "question": "You are very tired from working on your project at Turing all week and don't want to read through a very long string you were given. The string is as follows: 'These are all the people in this list: Bob, Caroyln, Carson, Mildred, Andre, and Frankenstein'. Like I said, you are very tired. You only need to determine if this string includes the name of your BFF 'Carson'. Use a prototype method to determine if this string includes your friend's name.",
   "inputDataType": "string",
   "outputDataType": "boolean",
   "method": "includes",
   "input": "These are all the people in this list: Bob, Caroyln, Carson, Mildred, Andre, and Frankenstein'",
   "result": true,
   "difficulty": 1
 },
 {
   "question": "You were given the following array of numbers that are the combination to a lock: [5, 2, 3, 4]. You can't remember if the number 6 is in the combination and you don't have access to the values in the array anymore. Use a prototype method to find out if the number 6 is included in the combination.",
   "inputDataType": "array",
   "outputDataType": "boolean",
   "method": "includes",
   "input": [5, 2, 3, 4],
   "result": false,
   "difficulty": 1
 },
 {
   "question": "You are given the following array: [9, 5, 10, 1, 3, 3, 3, 4]. You want to find the index of the first instance of the number 3 in the array. Return the index of this first instance of the number 3.",
   "inputDataType": "array",
   "outputDataType": "number",
   "method": "indexOf",
   "input": [9, 5, 10, 1, 3, 3, 3, 4],
   "result": "4",
   "difficulty": 2
 },
 {
   "question": "You are given the following string: 'My favorite color is red'. You would like to find the index at the beginning of the word 'red'. Return the index of the beginning of the word 'red'.",
   "inputDataType": "string",
   "outputDataType": "number",
   "method": "indexOf",
   "input": "My favorite color is red",
   "result": "21",
   "difficulty": 2
 },
 {
   "question": "You are given the following array: ['Hi', 'my', 'friend']. Return a string of words separated by spaces, like this 'Hi my friend'.",
   "inputDataType": "array",
   "outputDataType": "string",
   "method": "join",
   "input": ["Hi", "my", "friend"],
   "result": "Hi my friend",
   "difficulty": 2
 },
 {
   "question": "You are given the following array of your friends ages: [18, 29, 56, 5, 77, 1]. You have a wide variety or friends! All your friends have celebrated their birthdays this year so you want to return an updated array of ages that reflects them all aging by one year.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "map",
   "input": [18, 29, 56, 5, 77, 1],
   "result": [19, 30, 57, 6, 78, 2],
   "difficulty": 2
 },
 {
   "question": "You are given the following array of strings: ['1', '2', '3', '4', '5']. These strings are actually numbers you want to work with so you need to convert them. Return a new array of numbers like this:  [1, 2, 3, 4, 5]",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "map",
   "input": ["1", "2", "3", "4", "5"],
   "result": [1, 2, 3, 4, 5],
   "difficulty": 2
 },
 {
   "question": "You are given the following object: { monday: 'blue', tuesday: 'red', wednesday: 'green', thursday: 'yellow', friday: 'purple' }. You would like to separate out the keys in this object. Return an array of this object's keys.",
   "inputDataType": "object",
   "outputDataType": "array",
   "method": "Object.keys",
   "input": "{ monday: 'blue', tuesday: 'red', wednesday: 'green', thursday: 'yellow', friday: 'purple' }.",
   "result": ["monday", "tuesday", "wednesday", "thursday", "friday"],
   "difficulty": 2
 },
 {
   "question": "You are given the following object of animals and their sounds: { dog: 'woof', cat: 'meow', cow: 'moo', duck: 'quack' }. From this object, return an array of strings of all the object keys.",
   "inputDataType": "object",
   "outputDataType": "array",
   "method": "Object.keys",
   "input": "{ dog: 'woof', cat: 'meow', cow: 'moo', duck: 'quack' }",
   "result": ["dog", "cat", "cow", "duck"],
   "difficulty": 2
 },
 {
   "question": "You are given the following array of names: ['Sally', 'Timmy', 'Tammy']. Bobby wants to join the group again so we need to add him at the end of the array. Return a modified array with Bobby in it.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "push",
   "input": ["Sally", "Timmy", "Tammy"],
   "result": ["Sally", "Timmy", "Tammy", "Bobby"],
   "difficulty": 1
 },
 {
   "question": "You are given the following array of numbers: [1, 2, 3, 4, 5]. From this array, return the sum of all the numbers in the array, which is 15.",
   "inputDataType": "array",
   "outputDataType": "number",
   "method": "reduce",
   "input": [1, 2, 3, 4, 5],
   "result": "15",
   "difficulty": 3
 },
 {
   "question": "You are given the following array or strings: ['a', '1', 'b', '2', 'c', '3']. You don't care about all of these strings but some of these strings can be changed into numbers so you want to know the sum of all the numbers in the array. Return the sum of these numbers, which is 6.",
   "inputDataType": "array",
   "outputDataType": "number",
   "method": "reduce",
   "input": ["a", "1", "b", "2", "c", "3"],
   "result": "6",
   "difficulty": 3
 },
 {
   "question": "You are given the following array of strings: ['World', 'Hello']. The order is backwards, return a new array with the strings in the reverse order.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "reverse",
   "input": ["World", "Hello"],
   "result": ["Hello", "World"],
   "difficulty": 1
 },
 {
   "question": "You are given to following array of numbers: [1, 3, 5, 7, 9, 11]. Modify this array so that the numbers are listed in reverse order.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "reverse",
   "input": [1, 3, 5, 7, 9, 11],
   "result": [11, 9, 7, 5, 3, 1],
   "difficulty": 1
 },
 {
   "question": "You are given the following array of names: ['Bobby', 'Sally', 'Timmy', 'Tammy']. Bobby has left the group so we need to remove him from the array. Return a modified array without Bobby in it.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "shift",
   "input": ["Bobby", "Sally", "Timmy", "Tammy"],
   "result": ["Sally", "Timmy", "Tammy"],
   "difficulty": 1
 },
 {
   "question": "You are given to following array of pizza toppings: ['sausage', 'onion', 'green pepper', 'pepperoni', 'cheese']. Modify this array so that the toppings are listed in alphabetical order.",
   "inputDataType": "array",
   "outputDataType": "array",
   "method": "sort",
   "input": ["sausage", "onion", "green pepper", "pepperoni", "cheese"],
   "result": [ "cheese", "green pepper", "onion", "pepperoni", "sausage"],
   "difficulty": 1
 },
 {
   "question": "You are given the following string that is a message written in a secret code: 'Hibmybfriend'. To decipher the message, you must remove the letter b from inbetween the words. Return an array that contains each word as a string in the array.",
   "inputDataType": "string",
   "outputDataType": "array",
   "method": "split",
   "input": "Hibmybfriend",
   "result": ["Hi", "my", "friend"],
   "difficulty": 2
 },
 {
   "question": "You are given the following string: 'Hello World'. Using this input string, separate each word and create an array of strings that looks like this: ['Hello', 'World'].",
   "inputDataType": "string",
   "outputDataType": "array",
   "method": "split",
   "input": "Hello World",
   "result": ["Hello", "World"],
   "difficulty": 1
 },
 {
   "question": "You are given the following string: 'bibliography'. Return an array of strings for each letter in this string that looks like this: ['b', 'i', 'b', 'l', 'i', 'o', 'g', 'r', 'a', 'p', 'h', 'y'].",
   "inputDataType": "string",
   "outputDataType": "array",
   "method": "split",
   "input": "bibliography",
   "result": ["b", "i", "b", "l", "i", "o", "g", "r", "a", "p", "h", "y"],
   "difficulty": 1
 },
 {
   "question": "You are given the following string: 'My favorite activities are: coding, sleeping, hiking, and knitting'. You just started Turing so your favorite activity is only coding now. Return a new string that shortens this string to remove all the activities after coding.",
   "inputDataType": "string",
   "outputDataType": "string",
   "method": "substring",
   "input": "My favorite activities are: coding, sleeping, hiking, and knitting'",
   "result": "My favorite activities are: coding'",
   "difficulty": 3
 },
 {
   "question": "You are given the following really long number: 1894562. You want to display this number on your webpage but it looks silly without commas. Return this number as a string with the appropriate commas.",
   "inputDataType": "number",
   "outputDataType": "string",
   "method": "toLocaleString",
   "input": "1894562",
   "result": "1,894,562",
   "difficulty": 2
 },
 {
   "question": "You are given the following string: 'cRAzY CasE'. You want to convert all the letters to lower case so it is more readable. Return a new string with all characters in lower case.",
   "inputDataType": "string",
   "outputDataType": "string",
   "method": "toLowerCase",
   "input": "cRAzY CasE",
   "result": "crazy case",
   "difficulty": 1
 },
 {
   "question": "You are given the following string: 'I AM HUNGRY'. You are not actually very hungry and you want to be polite so you would like to modify this string to all lower case letters. Return a string that is all lower case.",
   "inputDataType": "string",
   "outputDataType": "string",
   "method": "toLowerCase",
   "input": "I AM HUNGRY",
   "result": "i am hungry",
   "difficulty": 1
 },
 {
   "question": "You are given the following number: 35. You need to convert this number as a string to insert it into your HTML. Return this number as a string.",
   "inputDataType": "number",
   "outputDataType": "string",
   "method": "toString",
   "input": "35",
   "result": "35",
   "difficulty": 1
 },
 {
   "question": "You are given the following string: 'i am hungry'. You are VERY hungry however so you would like to modify this string to be all upper case letters. Return a string that is all upper case.",
   "inputDataType": "string",
   "outputDataType": "string",
   "method": "toUpperCase",
   "input": "i am hungry",
   "result": "I AM HUNGRY",
   "difficulty": 1
 },
 {
   "question": "You are given a sign that reads: 'happy birthday sonny!'. The sign isn't very exciting because it is in all lower case. Return a new string with all upper case letters so that we can really celebrate.",
   "inputDataType": "string",
   "outputDataType": "string",
   "method": "toUpperCase",
   "input": "happy birthday sonny!",
   "result": "HAPPY BIRTHDAY SONNY!",
   "difficulty": 1
 },
 {
   "question": "You are given the following string '  what is happening on each side of this string?    '. You need to get rid of this weird extra whitespace. Return a new string without the whitespace at the beginning and end of the string.",
   "inputDataType": "string",
   "outputDataType": "string",
   "method": "trim",
   "input": "  what is happening on each side of this string?    ",
   "result": "what is happening on each side of this string?",
   "difficulty": 1
 }
]

module.exports = { problems }