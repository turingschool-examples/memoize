const vocabulary = [{
    "js": {
        "variables": {
            "definition": "containers for storing values",
            "vocabulary": {
                "var": "This variable can be reassigned and redeclared. Function scoped.",
                "let": "This variable can be reassigned but not re-declared. Block Scoped.",
                "const": "This variable can not be reassigned and can not be accessed before they appear within the code."
            }
        },
        "data_types": {
            "definition": "There are seven basic ___ in Javascript",
            "vocabulary": {
                "number": "This basic datatype represents both integer and floating point numbers",
                "string": "This basic datatype can be used to hold data that as text",
                "boolean": "This datatype can only have two values, true/false",
                "null": "This basic datatype represents the intentional abscence of a value",
                "undefined": "This basic datatype represents an unassigned value or unintentional abscence of a value",
                "object": "This basic datatype is used to store a collection of data",
                "symbol": "This basic datatype can be used to create anonymous properties on objects"
            }
        },
        "arrays": {
            "definition": "Holds iterable, ordered, collection of data",
            "vocabulary": {
                "concat": "Join several arrays into one",
                "from": "Creates new, shallow-copied instance from an array-like or iterable object",
                "isArray": "Method determines whether the passed value is an Array",
                "copyWithin": "Copies part of an array to another location in the same array and returns it, without modifying its size",
                "every": "Method tests whether all elements in the array pass the test implemented by the provided function",
                "fill": "Method fills all the elements of an array from a start index to an end index with a static value. The end index is not included",
                "filter": "Method creates a new array with all elements that pass the test implemented by the provided function",
                "find": "Method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned",
                "findIndex": "Method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1",
                "forEach": "Method executes a provided function once for each array element",
                "includes": "Method determines whether an array includes a certain value among its entries, returning true or false as appropriate",
                "indexOf": "Method returns the first index at which a given element can be found in the array, or -1 if it is not present",
                "join": "Method creates and returns a new string by concatenating all of the elements in an array-like object, separated by commas or a specified separator string.",
                "lastIndexOf": "Method returns the last index at which a given element can be found in the array, or -1 if it is not present",
                "map": "Method creates a new array with the results of calling a provided function on every element in the calling array",
                "pop": "Method removes the last element from an array and returns that element. This method changes the length of the array",
                "push": "Method adds one or more elements to the end of an array and returns the new length of the array",
                "reduce": "Method executes a reducer function (that you provide) on each member of the array resulting in a single output value",
                "reduceRight": "Method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value",
                "reverse": "Method reverses an array in place. The first array element becomes the last, and the last array element becomes the first",
                "shift": "Method removes the first element from an array and returns that removed element. This method changes the length of the array",
                "slice": "Method returns a copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified",
                "some": "Method tests whether at least one element in the array passes the test implemented by the provided function",
                "sort": "Method sorts the elements of an array in place and returns the array",
                "splice": "Method changes the contents of an array by removing or replacing existing elements and/or adding new elements",
                "unshift": "Method adds one or more elements to the beginning of an array and returns the new length of the array"
            },
            "number": {
                "definition": "JavaScript object is a wrapper object allowing you to work with numerical values",
                "vocabulary": {
                    "isFinite": "Method determines whether the passed value is a finite number",
                    "isInteger": "Method determines whether the passed value is an integer",
                    "isNan": "Method determines whether the passed value is NaN and its type is Number",
                    "isSafeInteger": "Method determines whether the provided value is a number that is a safe integer(a number between ± 9 quadrillion) or if precision will be lost.",
                    "parseFloat": "Method parses a string argument and returns a floating point number",
                    "parseInt": "Method parses a string argument and returns an integer",
                    "toExponential": "Method returns a string representing the Number object in exponential notation",
                    "toFixed": "Method formats a number using fixed-point notation"
                }
            },
            "map": {
                "definition": "Object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.",
                "vocabulary": {
                    "clear": "Method removes all elements from a Map object",
                    "delete": "Method removes the specified element from a Map object",
                    "entries": "Method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order",
                    "forEach": "Method executes a provided function once per each key/value pair in the Map object, in insertion order",
                    "get": "Method returns a specified element from a Map object",
                    "has": "Method returns a boolean indicating whether an element with the specified key exists or not",
                    "keys": "Method returns a new Iterator object that contains the keys for each element in the Map object in insertion order",
                    "set": "Method adds or updates an element with a specified key and value to a Map object.",
                    "values": "Method returns a new Iterator object that contains the values for each element in the Map object in insertion order"
                }
            },
            "string": {
                "definition": "global object is a constructor for strings or a sequence of characters",
                "vocabulary": {
                    "fromCharCode": "Method returns a string created from the specified sequence of UTF-16 code units",
                    "fromCodePoint": "Method returns a string created by using the specified sequence of code points",
                    "charAt": "Method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string",
                    "charCodeAt": "Method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index",
                    "concat": "Method concatenates the string arguments to the calling string and returns a new string",
                    "endsWith": "Method determines whether a string ends with the characters of a specified string, returning true or false as appropriate",
                    "includes": "Method determines whether one string may be found within another string, returning true or false as appropriate",
                    "indexOf": "Method returns the index within the calling String object of the first occurrence of the specified value, -1 otherwise",
                    "lastIndexOf": "Method returns the index within the calling String object of the last occurrence of the specified value",
                    "match": "Method retrieves the matches when matching a string against a regular expression",
                    "padEnd": "Method pads the end of the current string with a given string (repeated, if needed) so that the resulting string reaches a given length",
                    "padStart": "Method pads the start of the current string with a given string (repeated, if needed) so that the resulting string reaches a given length",
                    "repeat": "Method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together",
                    "replace": "Method returns a new string with some or all matches of a pattern replaced by a replacement",
                    "search": "Method executes a search for a match between a regular expression and this String object",
                    "slice": "Method extracts a section of a string and returns it as a new string, without modifying the original string",
                    "split": "Method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split",
                    "startsWith": "Method determines whether a string begins with the characters of a specified string, returning true or false as appropriate",
                    "substring": "Method returns the part of the string between the start and end indexes, or to the end of the string",
                    "trim": "Method removes whitespace from both ends of a string"
                },
                "set": {
                    "definition": "Object lets you store unique values of any type, whether primitive values or object references",
                    "vocabulary": {
                        "size": "Returns the number of elements in a Set object",
                        "add": "Method appends a new element with a specified value to the end of a Set object",
                        "clear": "Method removes all elements from a Set object",
                        "delete": "Method removes the specified element from  Set object",
                        "has": "Method returns a boolean indicating whether an element with the specified value exists in a Set object or not"
                    }
                }
            }
        }
    }
}]


module.exports = vocabulary;
