const questions = [
  {
    "question": "This method removes the last element of an array and returns the removed element.",
    "id": "1",
    "category": "Array"
  },
  {
    "question": "This method adds one or more elements to the end of an array and returns the new length of the array.",
    "id": "2",
    "category": "Array"
  },
  {
    "question": "This method reverses an array and mutates the original array.",
    "id": "3",
    "category": "Array"
  },
  {
    "question": "This method removes the first element from an array and returns that element.",
    "id": "4",
    "category": "Array"
  },
  {
    "question": "This method adds one or more elements to the beginning of an array and returns the new length of the array.",
    "id": "5",
    "category": "Array"
  },
  {
    "question": "This method reorders an array according to each character's Unicode code point value.",
    "id": "6",
    "category": "Array"
  },
  {
    "question": "This method is used to merge two or more arrays into a new array. It does not mutate the existing arrays.",
    "id": "7",
    "category": "Array"
  },
  {
    "question": "This method creates and returns a new string, separated by commas or a specified separator argument.",
    "id": "8",
    "category": "Array"
  },
  {
    "question": "This method returns a string representing the elements of the array.",
    "id": "9",
    "category": "Array"
  },
  {
    "question": "This method takes in a callback to test each array element. Elements evaluated as true will be returned in a new array.",
    "id": "10",
    "category": "Array"
  },
  {
    "question": "This method returns the value of the first element in the array that satisfies a provided testing function.",
    "id": "11",
    "category": "Array"
  },
  {
    "question": "This method takes in a callback and will execute a specified function for each element of an array. It returns undefined.",
    "id": "12",
    "category": "Array"
  },
  {
    "question": "This method takes in an accumulator and current element. It executes a provided function and returns the accumulator.",
    "id": "13",
    "category": "Array"
  },
  {
    "question": "This method executes a provided function on every element in the calling array and returns a new array of equal length.",
    "id": "14",
    "category": "Array"
  },
  {
    "question": "This method tests whether at least one element in the array passes the test implemented by the provided function.",
    "id": "15",
    "category": "Array"
  },
  {
    "question": "This method returns a shallow copy of a portion of an array into a new array selected from begin to end (end not included).",
    "id": "16",
    "category": "Array"
  },
  {
    "question": "This method mutates the contents of an array by removing existing elements and/or adding new elements.",
    "id": "17",
    "category": "Array"
  },
  {
    "question": "This method determines whether an array includes a certain element, returning true or false as appropriate.",
    "id": "18",
    "category": "Array"
  },
  {
    "question": "This method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
    "id": "19",
    "category": "Array"
  },
  {
    "question": "This method tests whether all elements in an array pass the test implemented by the provided function.",
    "id": "20",
    "category": "Array"
  },
  {
    "question": "This method takes in an index returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",
    "id": "21",
    "category": "String"
  },
  {
    "question": "This method takes in a regular expression and retrieves the matches from a specific string.",
    "id": "22",
    "category": "String"
  },
  {
    "question": "This method separates a string into an array of strings.",
    "id": "23",
    "category": "String"
  },
  {
    "question": "This method returns the part of the string between provided start and end indexes, or to the end of the string.",
    "id": "24",
    "category": "String"
  },
  {
    "question": "This method returns a new string with all characters converted to uppercase.",
    "id": "25",
    "category": "String"
  },
  {
    "question": "This method returns a new string with all characters converted to lowercase.",
    "id": "26",
    "category": "String"
  },
  {
    "question": "This method removes whitespace from both ends of a string.",
    "id": "27",
    "category": "String"
  },
  {
    "question": "This method executes a search for a match between a regular expression and a string and returns the index of the match.",
    "id": "28",
    "category": "String"
  },
  {
    "question": "This method returns a new string with some or all matches of a pattern replaced by a replacement.",
    "id": "29",
    "category": "String"
  },
  {
    "question": "This method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
    "id": "30",
    "category": "String"
  },
  {
    "question": "This method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
    "id": "31",
    "category": "String"
  }
];

const answers = [
  {
    "answer": ".pop()",
    "id": "1",
    "category": "Array"
  },
  {
    "answer": ".push()",
    "id": "2",
    "category": "Array"
  },
  {
    "answer": ".reverse()",
    "id": "3",
    "category": "Array"
  },
  {
    "answer": ".shift()",
    "id": "4",
    "category": "Array"
  },
  {
    "answer": ".unshift()",
    "id": "5",
    "category": "Array"
  },
  {
    "answer": ".sort()",
    "id": "6",
    "category": "Array"
  },
  {
    "answer": ".concat()",
    "id": "7",
    "category": "Array"
  },
  {
    "answer": ".join()",
    "id": "8",
    "category": "Array"
  },
  {
    "answer": ".toString()",
    "id": "9",
    "category": "Array"
  },
  {
    "answer": ".filter()",
    "id": "10",
    "category": "Array"
  },
  {
    "answer": ".find()",
    "id": "11",
    "category": "Array"
  },
  {
    "answer": ".forEach()",
    "id": "12",
    "category": "Array"
  },
  {
    "answer": ".reduce()",
    "id": "13",
    "category": "Array"
  },
  {
    "answer": ".map()",
    "id": "14",
    "category": "Array"
  },
  {
    "answer": ".some()",
    "id": "15",
    "category": "Array"
  },
  {
    "answer": ".slice()",
    "id": "16",
    "category": "Array"
  },
  {
    "answer": ".splice()",
    "id": "17",
    "category": "Array"
  },
  {
    "answer": ".includes()",
    "id": "18",
    "category": "Array"
  },
  {
    "answer": ".indexOf()",
    "id": "19",
    "category": "Array"
  },
  {
    "answer": ".every()",
    "id": "20",
    "category": "Array"
  },
  {
    "answer": ".charAt()",
    "id": "21",
    "category": "String"
  },
  {
    "answer": ".match()",
    "id": "22",
    "category": "String"
  },
  {
    "answer": ".split()",
    "id": "23",
    "category": "String"
  },
  {
    "answer": ".substring()",
    "id": "24",
    "category": "String"
  },
  {
    "answer": ".toUpperCase()",
    "id": "25",
    "category": "String"
  },
  {
    "answer": ".toLowerCase()",
    "id": "26",
    "category": "String"
  },
  {
    "answer": ".trim()",
    "id": "27",
    "category": "String"
  },
  {
    "answer": ".search()",
    "id": "28",
    "category": "String"
  },
  {
    "answer": ".replace()",
    "id": "29",
    "category": "String"
  },
  {
    "answer": ".repeat",
    "id": "30",
    "category": "String"
  },
  {
    "answer": ".startsWith()",
    "id": "31",
    "category": "String"
  }
];



module.exports = {
  questions,
  answers
};