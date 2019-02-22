const prototypes = [
    {
        "id": 1,
        "prototype": "shift()",
        "answer": "Removes and return the first item in an Array",
        "method type": "mutator"
    },
    {
        "id": 2,
        "prototype": "copyWithin()",
        "answer": "shallow copies part of an array to another location in the same array and returns it, without modifying its size",
        "method type": "mutator"
    },
    {
        "id": 3,
        "prototype": "fill()",
        "answer": "fills all the elements of an array from a start index to an end index with a static value. If the end index is not included, it will modify all the elements from the start index to the end of the array. It returns the modified array",
        "method type": "mutator"
    },
    {
        "id": 4,
        "prototype": "pop()",
        "answer": "removes the last element from an array and returns that element. This method changes the length of the array",
        "method type": "mutator"
    },
    {
        "id": 5,
        "prototype": "push()",
        "answer": "adds one or more elements to the end of an array and returns the new length of the array.",
        "method type": "mutator"
    },
    {
        "id": 6,
        "prototype": "reverse()",
        "answer": "reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
        "method type": "mutator"
    },
    {
        "id": 7,
        "prototype": "sort()",
        "answer": "sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.",
        "method type": "mutator"
    },
    {
        "id": 8,
        "prototype": "splice()",
        "answer": "changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
        "method type": "mutator"
    },
    {
        "id": 9,
        "prototype": "unshift()",
        "answer": "adds one or more elements to the beginning of an array and returns the new length of the array.",
        "method type": "mutator"
    },
    {
        "id": 10,
        "prototype": "entries()",
        "answer": " returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        "method type": "iteration"
    },
    {
        "id": 11,
        "prototype": "filter()",
        "answer": "creates a new array with all elements that pass the test implemented by the provided function.",
        "method type": "iteration"
    },
    {
        "id": 12,
        "prototype": "every()",
        "answer": "tests whether all elements in the array pass the test implemented by the provided function.",
        "method type": "iteration"
    },
    {
        "id": 13,
        "prototype": "filter()",
        "answer": "creates a new array with all elements that pass the test implemented by the provided function.",
        "method type": "iteration"
    },
    {
        "id": 14,
        "prototype": "find()",
        "answer": "returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
        "method type": "iteration"
    },
    {
        "id": 15,
        "prototype": "findIndex()",
        "answer": "returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.",
        "method type": "iteration"
    },
    {
        "id": 16,
        "prototype": "forEach()",
        "answer": "executes a provided function once for each array element.",
        "method type": "iteration"
    },
    {
        "id": 17,
        "prototype": "keys()",
        "answer": "returns a new Array Iterator object that contains the keys for each index in the array.",
        "method type": "iteration"
    },
    {
        "id": 18,
        "prototype": "map()",
        "answer": "creates a new array with the results of calling a provided function on every element in the calling array.",
        "method type": "iteration"
    },
    {
        "id": 19,
        "prototype": "reduce()",
        "answer": "executes a reducer function (that you provide) on each member of the array resulting in a single output value.",
        "method type": "iteration"
    },
    {
        "id": 20,
        "prototype": "reduceRight()",
        "answer": "applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
        "method type": "iteration"
    },
    {
        "id": 21,
        "prototype": "some()",
        "answer": "tests whether at least one element in the array passes the test implemented by the provided function.",
        "method type": "iteration"
    },
    {
        "id": 22,
        "prototype": "values()",
        "answer": "returns a new Array Iterator object that contains the values for each index in the array.",
        "method type": "iteration"
    },
    {
        "id": 23,
        "prototype": "concat()",
        "answer": "is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
        "method type": "accessor"
    },
    {
        "id": 24,
        "prototype": "includes()",
        "answer": "determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
        "method type": "accessor"
    },
    {
        "id": 25,
        "prototype": "indexOf()",
        "answer": "returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        "method type": "accessor"
    },
    {
        "id": 26,
        "prototype": "join()",
        "answer": "creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.",
        "method type": "accessor"
    },
    {
        "id": 27,
        "prototype": "lastIndexOf()",
        "answer": "returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.",
        "method type": "accessor"
    },
    {
        "id": 28,
        "prototype": "slice()",
        "answer": "returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
        "method type": "accessor"
    },
    {
        "id": 29,
        "prototype": "toSource()",
        "answer": "returns a string representing the source code of the array.",
        "method type": "accessor"
    },
    {
        "id": 30,
        "prototype": "toString()",
        "answer": "returns a string representing the specified array and its elements.",
        "method type": "accessor"
    }
]