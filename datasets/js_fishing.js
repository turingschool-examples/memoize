const topics = {

  "javascript": {
    "variables": {
      "description": "containers for storing values",
      "vocabulary": {
        "var": "This variable can be reassigned and redeclared. Function scoped.",
        "let": "This variable can be reassigned but not re-declared. Block Scoped.",
        "const": "This variable can not be reassigned and can not be accessed before they appear within the code."
      }
    },
    "basic_data_types": {
      "description": "There are seven of these datatypes in Javascript",
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
      "description": "Holds iterable, ordered, collection of data",
      "vocabulary": {
        "concat_(Array)": "Join several arrays into one",
        "from": "Creates new, shallow-copied instance from an array-like or iterable object",
        "isArray": "Method determines whether the passed value is an Array",
        "copyWithin": "Copies part of an array to another location in the same array and returns it, without modifying its size",
        "every": "Method tests whether all elements in the array pass the test implemented by the provided function",
        "fill": "Method fills all the elements of an array from a start index to an end index with a static value. The end index is not included",
        "filter": "Method creates a new array with all elements that pass the test implemented by the provided function",
        "find": "Method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned",
        "findIndex": "Method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1",
        "forEach_(Array)": "Method executes a provided function once for each array element",
        "includes_(Array)": "Method determines whether an array includes a certain value among its entries, returning true or false as appropriate",
        "indexOf_(Array)": "Method returns the first index at which a given element can be found in the array, or -1 if it is not present",
        "join": "Method creates and returns a new string by concatenating all of the elements in an array-like object, separated by commas or a specified separator string.",
        "lastIndexOf_(Array)": "Method returns the last index at which a given element can be found in the array, or -1 if it is not present",
        "map": "Method creates a new array with the results of calling a provided function on every element in the calling array",
        "pop": "Method removes the last element from an array and returns that element. This method changes the length of the array",
        "push": "Method adds one or more elements to the end of an array and returns the new length of the array",
        "reduce": "Method executes a reducer function (that you provide) on each member of the array resulting in a single output value",
        "reduceRight": "Method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value",
        "reverse": "Method reverses an array in place. The first array element becomes the last, and the last array element becomes the first",
        "shift": "Method removes the first element from an array and returns that removed element. This method changes the length of the array",
        "slice_(Array)": "Method returns a copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified",
        "some": "Method tests whether at least one element in the array passes the test implemented by the provided function",
        "sort": "Method sorts the elements of an array in place and returns the array",
        "splice": "Method changes the contents of an array by removing or replacing existing elements and/or adding new elements",
        "unshift": "Method adds one or more elements to the beginning of an array and returns the new length of the array"
      }
    },
    "number": {
      "description": "JavaScript object is a wrapper object allowing you to work with numerical values",
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
      "description": "Object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.",
      "vocabulary": {
        "clear_(Map)": "Method removes all elements from a Map object",
        "delete_(Map)": "Method removes the specified element from a Map object",
        "entries": "Method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order",
        "forEach_(Map)": "Method executes a provided function once per each key/value pair in the Map object, in insertion order",
        "get": "Method returns a specified element from a Map object",
        "has_(Map)": "Method returns a boolean indicating whether an element with the specified key exists or not",
        "keys": "Method returns a new Iterator object that contains the keys for each element in the Map object in insertion order",
        "set": "Method adds or updates an element with a specified key and value to a Map object.",
        "values": "Method returns a new Iterator object that contains the values for each element in the Map object in insertion order"
      }
    },
    "string": {
      "description": "global object is a constructor for strings or a sequence of characters",
      "vocabulary": {
        "fromCharCode": "Method returns a string created from the specified sequence of UTF-16 code units",
        "fromCodePoint": "Method returns a string created by using the specified sequence of code points",
        "charAt": "Method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string",
        "charCodeAt": "Method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index",
        "concat_(String)": "Method concatenates the string arguments to the calling string and returns a new string",
        "endsWith": "Method determines whether a string ends with the characters of a specified string, returning true or false as appropriate",
        "includes_(String)": "Method determines whether one string may be found within another string, returning true or false as appropriate",
        "indexOf_(String)": "Method returns the index within the calling String object of the first occurrence of the specified value, -1 otherwise",
        "lastIndexOf_(String)": "Method returns the index within the calling String object of the last occurrence of the specified value",
        "match": "Method retrieves the matches when matching a string against a regular expression",
        "padEnd": "Method pads the end of the current string with a given string (repeated, if needed) so that the resulting string reaches a given length",
        "padStart": "Method pads the start of the current string with a given string (repeated, if needed) so that the resulting string reaches a given length",
        "repeat": "Method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together",
        "replace": "Method returns a new string with some or all matches of a pattern replaced by a replacement",
        "search": "Method executes a search for a match between a regular expression and this String object",
        "slice_(String)": "Method extracts a section of a string and returns it as a new string, without modifying the original string",
        "split": "Method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split",
        "startsWith": "Method determines whether a string begins with the characters of a specified string, returning true or false as appropriate",
        "substring": "Method returns the part of the string between the start and end indexes, or to the end of the string",
        "trim": "Method removes whitespace from both ends of a string"
      }
    },
    "set": {
      "description": "Object lets you store unique values of any type, whether primitive values or object references",
      "vocabulary": {
        "size": "Returns the number of elements in a Set object",
        "add": "Method appends a new element with a specified value to the end of a Set object",
        "clear_(Set)": "Method removes all elements from a Set object",
        "delete_(Set)": "Method removes the specified element from  Set object",
        "has_(Set)": "Method returns a boolean indicating whether an element with the specified value exists in a Set object or not"
      }
    },
    "arithmetic_operators": {
      "description": "take numerical values (either literals or variables) as their operands and return a single numerical value",
      "vocabulary": {
        "addition": "This operator returns the sum of numeric operands or string concatenation",
        "subtraction": "This operator returns the difference between two numeric operands",
        "division": "This operator returns the quotient of a divisor and a dividend",
        "multiplicaton": "This operator returns the product of its operands",
        "remainder(%)": "This operator returns the remainder between a divsor and dividend",
        "exponentiation": "This operator returns the result of raising the first operand to the power of the second operand",
        "increment(++)": "This operator increments its operand by one",
        "decrement": "This operator decrements by one its operand",
        "unary_negation": "This operator precedes its operand and negates it",
        "unary_plus": "This operator precedes its operand and attempts to convert it into a number"
      }
    }
  },
  "cascading_style_sheets": {
    "background": {
      "description": "A shorthand property for setting all background properties in one declaration",
      "vocabulary": {
        "background-attachment": {
          "description": "Sets whether a background image is fixed or scrolls with the rest of the page",
          "values": ["scroll", "fixed"]
        },
        "background-color": {
          "description": "Sets the background color of an element",
          "values": ["color-rgb", "color-hex", "color-name", "transparent"]
        },
        "background-image": {
          "description": "Sets an image as the background",
          "values": ["url", "none"]
        },
        "background-position": {
          "description": "Sets the starting position of a background image",
          "values": ["top left", "top center", "top right", "center left", "center center", "center right", "bottom left", "bottom center", "bottom right", "x% y%", "xpos ypos"]
        },
        "background-repeat": {
          "description": "Sets if/how a background image will be repeated",
          "values": ["repeat", "repeat-x", "repeat-y", "no-repeat"]
        }
      }
    },
    "border": {
      "description": "A shorthand property for setting all of the properties for the four borders in one declaration",
      "vocabulary": {
        "border-bottom": {
          "description": "A shorthand property for setting all of the properties for the bottom border in one declaration",
          "values": ["border-bottom-width", "border-width", "border-style", "border-color"]
        },
        "border-bottom-color": {
          "description": "Sets the color of the bottom border",
          "values": ["Any hex, rgb, or named color on https://www.w3schools.com/colors/colors_names.asp"]
        },
        "border-bottom-style": {
          "description": "Sets the style of the bottom border",
          "values": ["none", "dotted", "inset", "dashed solid", "dashed double none", "dashed groove none dotted"]
        },
        "border-bottom-width": {
          "description": "Sets the width of the bottom border",
          "values": ["thin", "medium", "thick", "length"]
        },
        "border-color": {
          "description": "Sets the color of the four borders, can have from oen to four colors",
          "values": ["Any hex, rgb, or named color on https://www.w3schools.com/colors/colors_names.asp"]
        },
        "border-left": {
          "description": "A shorthand property for setting all of the properties for the left border in one declaration",
          "values": ["border-left-width", "border"]
        },
        "border-left-color": {
          "description": "Sets the color of the left border",
          "values": ["border-left-width", "border-style", "border-color"]
        },
        "border-left-style": {
          "description": "Sets the style of the left border",
          "values": ["border-style"]
        },
        "border-left-width": {
          "description": "Sets the width",
          "values": ["Sets the width of the left border"]
        },
        "border-right": {
          "description": "A shorthand property for setting all of the properties for the right border in one declaration",
          "values": ["border-right-width", "border-style", "border-color"]
        },
        "border-right-color": {
          "description": "Sets the color of the right border",
          "values": ["border-color"]
        },
        "border-right-width": {
          "description": "Sets the width of the right border",
          "values": ["thin, medium, thick, length"]
        },
        "border-style": {
          "description": "Sets the style of the four borders, can have from one to four styles",
          "values": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
        },
        "border-top": {
          "description": "A shorthand property for setting all of the properties for the top border in one declaration",
          "values": ["border-top-width", "width", "border-style", "border-color"]
        },
        "border-top-color": {
          "description": "Sets the color of the top border",
          "values": ["border-color"]
        },
        "border-top-style": {
          "description": "Sets the color of the top border",
          "values": ["border-style"]
        },
        "border-top-width": {
          "description": "Sets the width of the top border",
          "values": ["thin", "medium", "thick", "length"]
        },
        "border-width": {
          "description": "A shorthand property for setting the width of the four borders in one declaration, can have from one to four values",
          "values": ["thin", "medium", "thick", "length"]
        }
      }
    },
    "classification": {
      "description": "These type of properties allow you to specify how and where to display an element",
      "vocabulary": {
        "clear": {
          "description": "Sets the sides of an element where other floating elements are not allowed",
          "values": ["left", "right", "both", "none"]
        },
        "cursor": {
          "description": "Specifies the type of cursor to be displayed",
          "values": ["url", "auto", "crosshair", "default", "pointer", "move", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "text", "wait", "help"]
        },
        "display": {
          "description": "Sets how/if an element is displayed",
          "values": ["none", "inline", "block", "list-item", "run-in", "compact", "marker", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption"]
        },
        "float": {
          "description": "Sets where an image or a text will appear in another element",
          "values": ["left", "right", "none"]
        },
        "position": {
          "description": "Places an element in a static, relative, absolute, or fixed position",
          "values": ["static", "relative", "absolute", "fixed"]
        },
        "visibility": {
          "description": "Sets if an element should be visible or invisible",
          "values": ["visible", "hidden", "collapse"]
        }
      }
    },
    "dimension": {
      "description": "These type of properties allow you to specify size and space an element takes up",
      "vocabulary": {
        "height": {
          "description": "Sets the height of an element",
          "values": ["auto", "length", "%"]
        },
        "line-height": {
          "description": "Sets the distance between lines",
          "values": ["normal", "number", "length", "%"]
        },
        "max-height": {
          "description": "Sets the maximum height of an element",
          "values": ["none", "length", "%"]
        },
        "max-width": {
          "description": "Sets the maximum width of an element",
          "values": ["none", "length", "%"]
        },
        "min-height": {
          "description": "Sets the minimum height of an element",
          "values": ["length", "%"]
        },
        "min-width": {
          "description": "Sets the minimum width of an element",
          "values": ["length", "%"]
        },
        "width": {
          "description": "Sets the width of an element",
          "values": ["auto", "length", "%"]
        }
      }
    },
    "font": {
      "description": "properties for manipulating font of text",
      "vocabulary": {
        "font": {
          "description": "A shorthand property for setting all of the properties for a font in one declaration",
          "values": ["font-style", "font-variant", "font-weight", "font-size/line-height", "font-family", "caption", "icon", "menu", "message-box", "small-caption", "status-bar"]
        },
        "font-family": {
          "description": "A prioritized list of font family names and/or generic family names for an element",
          "values": ["family-name", "generic-family"]
        },
        "font-size": {
          "description": "Sets the size of a font",
          "values": ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "smaller", "larger", "length", "%"]
        },
        "font-size-adjust": {
          "description": "Specifies an aspect value for an element that will preserve the x-height of the first-choice font",
          "values": ["none", "number"]
        },
        "font-stretch": {
          "description": "Condenses or expands the current font-family",
          "values": ["normal", "wider", "narrower", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"]
        },
        "font-style": {
          "description": "Sets the style of the font",
          "values": ["normal", "italic", "oblique"]
        },
        "font-variant": {
          "description": "Displays text in a small-caps font or a normal font",
          "values": ["normal", "small-caps"]
        },
        "font-weight": {
          "description": "Sets the weight of a font",
          "values": ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
        }
      }
    },
    "generated_content": {
      "description": " text/image content that is added to a document via css psuedo-elements",
      "vocabulary": {
        "content": {
          "description": "Generates content in a document. Used with the ::before and ::after pseudo-elements",
          "values": ["string", "url", "counter(name)", "counter(name, list-style-type", "counters(name, string)", "counters(name,string,list-style-type"]
        },
        "counter-increment": {
          "description": "Sets how much the counter increments on each occurrence of a selector",
          "values": ["none", "identifier", "number"]
        },
        "counter-reset": {
          "description": "Sets the value the counter is set to on each occurrence of a selector",
          "values": ["none", "identifier", "number"]
        },
        "quotes": {
          "description": "Sets the type of quotation marks",
          "values": ["none", "string string"]
        }
      }
    },
    "list_and_marker": {
      "description": "properties that style lists",
      "vocabulary": {
        "list-style": {
          "description": "A shorthand property for setting all of the properties for a list in one declaration",
          "values": "list-style-type"
        },
        "list-style-image": {
          "description": "Sets an image as the list-item marker",
          "values": ["none", "url"]
        },
        "list-style-position": {
          "description": "Sets where the list-item marker is placed in the list",
          "values": ["inside", "outside"]
        },
        "list-style-type": {
          "description": "Sets the type of the list-item marker",
          "values": ["none", "disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-roman", "upper-roman", "lower-alpha", "upper-alpha", "lower-greek", "lower-latin", "upper-latin", "hebrew", "armenian", "georgian", "cjk-ideographic", "hiragana", "katakana", "hiragana-iroha", "katakana-iroha"]
        },
        "marker-offset": {
          "description": "defines the distance between the nearest border edges of a marker and its associated principal box",
          "values": ["auto", "length"]
        }
      }
    },
    "margin": {
      "description": "properties that manipulate the margin of an element",
      "vocabulary": {
        "margin": {
          "description": "A shorthand property for setting the margin properties in one declaration",
          "values": ["margin-top", "margin-right", "margin-bottom", "margin-left"]
        },
        "margin-bottom": {
          "description": "Sets the bottom margin of an element",
          "values": ["auto", "length", "%"]
        },
        "margin-left": {
          "description": "Sets the left margin of an element",
          "values": ["auto", "length", "%"]
        },
        "margin-right": {
          "description": "Sets the right margin of an element",
          "values": ["auto", "length", "%"]
        },
        "margin-top": {
          "description": "Sets the top margin of an element",
          "values": ["auto", "length", "%"]
        }
      }
    },
    "outlines": {
      "description": "properties that change the outline style of elements",
      "vocabulary": {
        "outline": {
          "description": "A shorthand property for setting all the outline properties in one declaration",
          "values": ["outline-color", "outline-style", "outline-width"]
        },
        "outline-color": {
          "description": "Sets the color of the outline around an element",
          "values": ["color", "invert"]
        },
        "outline-style": {
          "description": "Sets the style of the outline around an element",
          "values": ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
        },
        "outline-width": {
          "description": "Sets the width of the outline around an element",
          "values": ["thin", "medium", "thick", "length"]
        }
      }
    },
    "padding": {
      "description": "properties that manipulate the padding of elements",
      "vocabulary": {
        "padding": {
          "description": "A shorthand property for setting all of the padding properties in one declaration",
          "values": ["padding-top", "padding-right", "padding-bottom", "padding-left"]
        },
        "padding-bottom": {
          "description": "Sets the bottom padding of an element",
          "values": ["length", "%"]
        },
        "padding-left": {
          "description": "Sets the left padding of an element",
          "values": ["length", "%"]
        },
        "padding-right": {
          "description": "Sets the right padding of an element",
          "values": ["length", "%"]
        },
        "padding-top": {
          "description": "Sets the top padding of an element",
          "values": ["length", "%"]
        }
      }
    },
    "positioning": {
      "description": "properties that adjust positioning and overflow of elements",
      "vocabulary": {
        "bottom": {
          "description": "Sets how far the bottom edge of an element is above/below the bottom edge of the parent element",
          "values": ["auto", "%", "length"]
        },
        "clip": {
          "description": "Sets the shape of an element. The element is clipped into this shape, and displayed",
          "values": ["shape", "auto"]
        },
        "left": {
          "description": "Sets how far the left edge of an element is to the right/left of the left edge of the parent element",
          "values": ["auto", "%", "length"]
        },
        "right": {
          "description": "Sets how far the right edge of an element is to the left/right of the right edge of the parent element",
          "values": ["auto", "%", "length"]
        },
        "overflow": {
          "description": "Sets what happens if the content of an element overflow its area",
          "values": ["visible", "hidden", "scroll", "auto"]
        },
        "position": {
          "description": "Places an element in a static, relative, absolute, or fixed position",
          "values": ["static", "relative", "absolute", "fixed"]
        },
        "top": {
          "description": "Sets how far the top edge of an element is above/below the top edge of the parent element",
          "values": ["auto", "static", "%"]
        },
        "vertical-align": {
          "description": "Sets the vertical alignment of an element",
          "values": ["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom", "length", "%"]
        },
        "z-index": {
          "description": "Sets the stack order of an element",
          "values": ["auto", "number"]
        }
      }
    },
    "table": {
      "description": "propeties that manipulate table elements",
      "vocabulary": {
        "border-collapse": {
          "description": "Sets whether the table borders are collapsed into a single border or detached as in standard HTML",
          "values": ["collapse", "separate"]
        },
        "border-spacing": {
          "description": "Sets the distance that separates cell borders (only for the “separated borders” model)",
          "values": ["length", "length"]
        },
        "caption-side": {
          "description": "Sets the position of the table caption",
          "values": ["top", "bottom", "left", "right"]
        },
        "empty-cells": {
          "description": "Sets whether or not to show empty cells in a table (only for the “separated borders” model)",
          "values": ["show", "hide"]
        },
        "table-layout": {
          "description": "Sets the algorithm used to display the table cells, rows, and columns",
          "values": ["auto", "fixed"]
        }
      }
    },
    "text": {
      "description": "properties that adjust the style of text, not related to the font properties",
      "vocabulary": {
        "color": {
          "description": "Sets the color of some text",
          "values": ["color"]
        },
        "direction": {
          "description": "Sets the text direction",
          "values": ["ltr", "rtl"]
        },
        "line-height": {
          "description": "Sets the distance between lines",
          "values": ["normal", "number", "length"]
        },
        "letter-spacing": {
          "description": "Increase or decrease the space between characters",
          "values": ["normal", "length"]
        },
        "text-align": {
          "description": "Aligns the text in an element",
          "values": ["left", "right", "center", "justify"]
        },
        "text-decoration": {
          "description": "Adds decoration to text",
          "values": ["none", "underline", "overline", "line-through", "blink"]
        },
        "text-indent": {
          "description": "Indents the first line of text in an element",
          "values": ["length", "%"]
        },
        "text-shadow": {
          "description": "Adds a shadow to text",
          "values": ["none", "color", "length"]
        },
        "text-transform": {
          "description": "Controls the letters in an element",
          "values": ["none", "capitalize", "uppercase", "lowercase"]
        },
        "white-space": {
          "description": "Sets how white space inside an element is handled",
          "values": ["normal", "length"]
        }
      }
    }
  },
  "html_elements": {
    "document_metadata": {
      "description": "Metadata contains information about the page. This includes information about styles, scripts and data to help software (search engines, browsers, etc.) use and render the page",
      "vocabulary": {
        "base": "Element specifies the base URL to use for all relative URLs contained within a document. There can be only one in a document",
        "head": "Element provides general information (metadata) about the document, including its title and links to its scripts and style sheets",
        "link": "Element specifies relationships between the current document and an external resource",
        "meta": "Element represents metadata that cannot be represented by other HTML meta-related elements",
        "style": "Element contains style information for a document, or part of a document",
        "title": "Element defines the document's title that is shown in a browser's title bar or a page's tab"
      }
    },
    "sectioning_root": {
      "description": "Elements that hold the content of the document",
      "vocabulary": {
        "body": "Element represents the content of an HTML document. There can be only one of this element in a document."
      }
    },
    "content_sectioning": {
      "description": "Content sectioning elements allow you to organize the document content into logical pieces",
      "vocabulary": {
        "address": "Element indicates that the enclosed HTML provides contact information for a person or people, or for an organization",
        "article": "Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable",
        "aside": "Element represents a portion of a document whose content is only indirectly related to the document's main content",
        "footer": "Element represents a footer for its nearest sectioning content or sectioning root element",
        "h1-h6": "Elements represent six levels of section headings",
        "hgroup": " element represents a multi-level heading for a section of a document. It groups a set of <h1>–<h6> elements",
        "main": "Element represents the dominant content of the <body> of a document, and directly related to or expands upon the central topic of document",
        "nav": "Element represents a section of a page whose purpose is to provide navigation links",
        "section": "Element represents a standalone section — which doesn't have a more specific semantic element to represent it"
      }
    },
    "text_content": {
      "description": "Elements to organize blocks or sections of content placed between the opening <body> and closing </body> tags",
      "vocabulary": {
        "blockquote": "Element indicates that the enclosed text is an extended quotation",
        "dd": "Element provides the details about or the definition of the preceding term (<dt>) in a description list (<dl>)",
        "div": "Element is the generic container for flow content. It has no effect on the content or layout until styled using CSS",
        "dl": "Element represents a description list",
        "dt": "Element specifies a term in a description or definition list, and as such must be used inside a <dl> element",
        "figcaption": "Element represents a caption or legend for the rest of the contents its parent <figure> element, if any",
        "figure": "Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit",
        "hr": "Element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic with a section",
        "li": "Element is used to represent an item in a list",
        "main": "Element represents the dominant content of the <body> of a document",
        "ol": "Element represents an ordered list of items, typically rendered as a numbered list",
        "p": "Element represents a paragraph",
        "pre": "Element represents preformatted text which is to be presented exactly as written in the HTML file",
        "ul": "Element represents an unordered list of items, typically rendered as a bulleted list"
      }
    },
    "inline_text_semantics": {
      "description": "Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text",
      "vocabulary": {
        "a": "Element creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL",
        "abbr": "Element represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation",
        "b": "Element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance",
        "bdi": "Element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text",
        "bdo": "Element overrides the current directionality of text, so that the text within is rendered in a different direction",
        "br": "Element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant",
        "cite": "Element is used to describe a reference to a cited creative work, and must include either the title or author or the URL of that work",
        "code": "Element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code",
        "dfn": "Element is used to indicate the term being defined within the context of a definition phrase or sentence",
        "em": "Element marks text that has stress emphasis",
        "i": "Element represents a range of text that is set off from the normal text for some reason",
        "kbd": "Element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device",
        "mark": "Element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context",
        "q": "Element indicates that the enclosed text is a short inline quotation",
        "rb": "Element is used to delimit the base text component of a  <ruby> annotation",
        "rp": "Element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element",
        "rt": "Element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography",
        "s": "Element renders text with a strikethrough, or a line through it, used to represent things that are no longer relevant or no longer accurate",
        "samp": "Element is used to enclose inline text which represents sample (or quoted) output from a computer program",
        "small": "Element makes the text font size one size smaller",
        "span": "Element is a generic inline container for phrasing content, which does not inherently represent anything, can be used for styling purposes",
        "strong": "indicates that its contents have strong importance, seriousness, or urgency",
        "sub": "Element specifies inline text which should be displayed as subscript for solely typographical reasons",
        "time": "Element represents a specific period in time",
        "u": "Element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation",
        "var": "represents the name of a variable in a mathematical expression or a programming context",
        "wbr": "Element represents a word break opportunity—a position within text where the browser may optionally break a line"
      }
    },
    "image_and_multimedia": {
      "description": "HTML supports various multimedia resources such as images, audio, and video",
      "vocabulary": {
        "area": "Element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element",
        "audio": "Element is used to embed sound content in documents",
        "img": "Element embeds an image into the document",
        "map": "Element is used with <area> elements to define an image map",
        "track": "Element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks(subtitles)",
        "video": "Element embeds a media player which supports video playback into the document"
      }
    },
    "embedded_content": {
      "description": "In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with",
      "vocabulary": {
        "embed": "Element embeds external content at the specified point in the document",
        "iframe": "Element represents a nested browsing context, embedding another HTML page into the current one",
        "object": "Element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin",
        "param": "Element defines parameters for an <object> element",
        "picture": "Element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios",
        "source": "Element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element"
      }
    },
    "scripting": {
      "description": "In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability",
      "vocabulary": {
        "canvas": "Element with either the canvas scripting API or the WebGL API to draw graphics and animations",
        "noscript": "Element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser",
        "script": "Element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code"
      }
    },
    "demarcating_edits": {
      "description": "These elements let you provide indications that specific parts of the text have been altered",
      "vocabulary": {
        "del": "Element represents a range of text that has been deleted from a document",
        "ins": "Element represents a range of text that has been added to a document"
      }
    },
    "table_content": {
      "description": "The elements here are used to create and handle tabular data",
      "vocabulary": {
        "caption": "Element specifies the caption (or title) of a table, and if used is always the first child of a <table>",
        "col": " element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element",
        "colgroup": "Element defines a group of columns within a table",
        "table": "Element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data",
        "tbody": "Element encapsulates a set of table row (<tr> elements), indicating that they comprise the body of the table",
        "td": "Element defines a cell of a table that contains data. It participates in the table model",
        "tfoot": "Element defines a set of rows summarizing the columns of the table",
        "th": "Element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes",
        "thead": "Element defines a set of rows defining the head of the columns of the table",
        "tr": "Element defines a row of cells in a table"
      }
    },
    "forms": {
      "description": "HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application",
      "vocabulary": {
        "buttons": "Element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality",
        "datalist": "Element contains a set of <option> elements that represent the values available for other controls",
        "fieldset": "Element is used to group several controls as well as labels (<label>) within a web form",
        "form": "Element represents a document section that contains interactive controls for submitting information to a web server",
        "input": "Element is used to create interactive controls for web-based forms in order to accept data from the user",
        "label": "Element represents a caption for an item in a user interface",
        "legend": "Element represents a caption for the content of its parent <fieldset>",
        "meter": "Element represents either a scalar value within a known range or a fractional value",
        "optgroup": "Element creates a grouping of options within a <select> element",
        "option": "Element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element",
        "output": "Element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action",
        "progress": "Element displays an indicator showing the completion progress of a task, typically displayed as a progress bar",
        "select": "Element represents a control that provides a menu of options",
        "textarea": "Element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form"
      }
    },
    "interactive_elements": {
      "description": "HTML offers a selection of elements which help to create interactive user interface objects",
      "vocabulary": {
        "details": "creates a disclosure widget in which information is visible only when the widget is toggled into an \"open\" state",
        "dialog": "Element represents a dialog box or other interactive component, such as an inspector or window",
        "menu": "Element represents a group of commands that a user can perform or activate",
        "menuitem": "Element represents a command that a user is able to invoke through a popup menu",
        "summary": "Element specifies a summary, caption, or legend for a <details> element's disclosure box"
      }
    }
  },
  "mod_one_vocab": {
    "js_1": {
      "description": "Learn the fundaments of Javascript",
      "vocabulary": {
        "data_type": "A kind of data, defined by the values it can hold and the operations that can be done on it",
        "primitive_type": "A kind of data type. Primitives in Javascript are [string, number, boolean, null, undefined, symbol]",
        "variable": "A container for a value. The main building block for all programming",
        "declare": "Creating a new variable (distinct from assignment)",
        "assignment": "Assigning a value to a variable",
        "type_coercion": "The process of converting a value from one type to another (such as a number to a string)",
        "concatenation": "The binding of multiple strings together using the + string operator",
        "interpolation": "The process of injecting a variable directly into a string",
        "template_literal": "Template literals are string literals that provide an easy way to interpolate a variable or expression into a string",
        "statement": "An executable piece of code",
        "expression": "An executable piece of code that resolves to a single value. The result of which may be assigned to a variable",
        "operator": "Symbols that are used to assign, compare, and perform operations",
        "conditional": "An expression that evaluates to true or false, or a control flow statement that executes code",
        "function": "A predefined and reusable group of behavior",
        "invoke": "running a function",
        "parameters": "The variables declared in a function definition",
        "arguments": "The variables passed to a function when it’s called/invoked"
      }
    },
    "js_2": {
      "description": "Learn about scope, context in Javascript",
      "vocabulary": {
        "anonymous_function": "a function without a name",
        "scope": "Determines the accessibility/visibility of variables and functions",
        "hoisting": "The process of implicitly moving the declaration of variables and functions to the top of their scope",
        "literal": "A way of declaring a data structure and its values at the same time",
        "array": "Used to store a collection of data items/multiple values under a single variable name",
        "loops": " A quick and easy way to do something repeatedly",
        "control_flow": "The order in which the computer executes statements in a script",
        "dry": "Programming principle that means Don't Repeat Yourself"
      }
    },
    "js_3": {
      "description": "Learn the fundaments of Javascript interacting with a WebPage",
      "vocabulary": {
        "html_element": "A building block that makes up the structure of a web page",
        "css_selector": "A way to identify a set elements, typically using a tag, class or id",
        "interface": "a shared boundary across which two separate components exchange information",
        "dom": "Document Object Model, the JS interface used to interact with HTML",
        "event": "Any event which takes place in the DOM, these can be generated by users or the browser",
        "event_handler": "A function that will run when a specific event occurs"
      }
    },
    "js_4": {
      "description": "Learn the advanced Javascript",
      "vocabulary": {
        "object": "A bundle of behavior (methods) and state (properties)",
        "key": "The name used to reference a Value on an Object",
        "value": "The data referenced by a Key",
        "property": "Another word for the ‘Key’ portion of a key-value pair on an object",
        "method": "A function on an Object",
        "dot_notation": "Notation to access a Value on an Object, explicitly specifies the Key",
        "bracket_notation": "Notation to access a Value on an Object, usually specifies a Key via a variable",
        "this": " A variable that changes depending on the context in which it’s used",
        "class": " A constructor that allows us to create multiple instances",
        "instance": "An object of a certain type"
      }
    }
  }
}

module.exports = topics;