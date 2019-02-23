const practiceQuestions = [
  {
		"id": 1,
		"question": "What does OOP stand for?",
		"correctAnswer": "Object Oriented Programming",
		"wrongAnswers": [
			"Object Oriented Poop",
			"Only Ogre Pants",
			"Object Orientation Painstaking"
		],
		"category": "oop"
	},
	{
		"id": 2,
		"question": "Which terminal command creates a new directory?",
		"correctAnswer": "mkdir",
		"wrongAnswers": [
			"mv",
			"cd",
			"git init"
		],
		"category": "terminal"
	},
	{
		"id": 3,
		"question": "What is NPM, really?",
		"correctAnswer": "Node Package Manager",
		"wrongAnswers": [
			"No Problem Man",
			"New Programming Methods",
			"Nonsense Portion Manhattan"
		],
		"category": "oop"
	},
	{
		"id": 4,
		"question": "Which one of these is NOT a reason you would you want a package.json file?",
		"correctAnswer": "It holds our javascript files",
		"wrongAnswers": [
			"It keeps track of our dependencies",
			"It lets us write npm scripts",
			"It is the instruction manual NPM follows when we run npm install"
		],
		"category": "oop"
	},
	{
		"id": 5,
		"question": "What is a webpack?",
		"correctAnswer": "a build tool that takes multiple JavaScript modules and bundles them up into a single, unified file.",
		"wrongAnswers": [
			"A backpack with webs in it",
			"A module that runs our CSS javascripts",
			"A package installer/remover"
		],
		"category": "oop"
	},
	{
		"id": 6,
		"question": "What is an example of a string?",
		"correctAnswer": "'Bye, I'm going to Chicago!'",
		"wrongAnswers": [
			"2",
			"true",
			"!"
		],
		"category": "data types"
	},
	{
		"id": 7,
		"question": "What is git?",
		"correctAnswer": "A version control system",
		"wrongAnswers": [
			"A digging app",
			"Goarder Initializer Terminal",
			"A computer stand"
		],
		"category": "git"
	},
	{
		"id": 8,
		"question": "What is the command to initialize git",
		"correctAnswer": "git init",
		"wrongAnswers": [
			"init git",
			"git commit",
			"git pull"
		],
		"category": "git"
	},
	{
		"id": 9,
		"question": "Which command shows unstaged work?",
		"correctAnswer": "git status",
		"wrongAnswers": [
			"git proof",
			"git commit",
			"git commit -m"
		],
		"category": "git"
	},
	{
		"id": 10,
		"question": "Which command prepares unstaged work to for a commit?",
		"correctAnswer": "git add",
		"wrongAnswers": [
			"git stage",
			"git status",
			"git add plus"
		],
		"category": "git"
	},
	{
		"id": 11,
		"question": "Which command will show you the specific changes in any unstaged code?",
		"correctAnswer": "git diff",
		"wrongAnswers": [
			"git changes",
			"show diff",
			"show change"
		],
		"category": "git"
	},
	{
		"id": 12,
		"question": "What can git remote -v do?",
		"correctAnswer": "Show you the url of your github repository",
		"wrongAnswers": [
			"It shows you remote control git commands",
			"Set a local repository",
			"Initialize a remote repository"
		],
		"category": "git"
	},
	{
		"id": 13,
		"question": "What is the command to make a new file?",
		"correctAnswer": "touch",
		"wrongAnswers": [
			"mkfl",
			"new file",
			"mv"
		],
		"category": "terminal"
	},
	{
		"id": 14,
		"question": "What is the terminal command to delete a file?",
		"correctAnswer": "rm",
		"wrongAnswers": [
			"delete",
			"dlt",
			"return key"
		],
		"category": "terminal"
	},
	{
		"id": 15,
		"question": "Can you use tab to autocomplete a filename?",
		"correctAnswer": "true",
		"wrongAnswers": [
			"false"
		],
		"category": "terminal"
	},
	{
		"id": 16,
		"question": "What is the terminal command to switch branches in your local repository?",
		"correctAnswer": "git checkout",
		"wrongAnswers": [
			"git change branch",
			"git switch",
			"git [name of branch]"
		],
		"category": "git"
	},
	{
		"id": 17,
		"question": "Which array prototype returns undefined?",
		"correctAnswer": "for(each)",
		"wrongAnswers": [
			"map",
			"filter",
			"sort"
		],
		"category": "array prototypes"
	},
	{
		"id": 18,
		"question": "Which array prototype returns an array of the same length",
		"correctAnswer": "map",
		"wrongAnswers": [
			"for(each)",
			"slice",
			"find"
		],
		"category": "array prototypes"
	},
	{
		"id": 19,
		"question": "Which array prototype returns the first item matching set conditions?",
		"correctAnswer": "find",
		"wrongAnswers": [
			"filter",
			"sort",
			"for(each)"
		],
		"category": "array prototypes"
	},
	{
		"id": 20,
		"question": "Which array prototype returns only all of the items in an array matching set conditions?",
		"correctAnswer": "filter",
		"wrongAnswers": [
			"sort",
			"for(each)",
			"map"
		],
		"category": "array prototypes"
	},
	{
		"id": 21,
		"question": "Which array prototype makes organizing an array from highest to lowest values easier?",
		"correctAnswer": "sort",
		"wrongAnswers": [
			"for(each)",
			"find",
			"split"
		],
		"category": "array prototypes"
	},
	{
		"id": 22,
		"question": "Which array prototype can take in a string and return an array of each letter/space in the string?",
		"correctAnswer": "split",
		"wrongAnswers": [
			"find",
			"forEach",
			"splice"
		],
		"category": "array prototypes"
	},
	{
		"id": 23,
		"question": "Which array prototype isn't a mutator method?",
		"correctAnswer": "slice",
		"wrongAnswers": [
			"splice",
			"map",
			"sort"
		],
		"category": "array prototypes"
	},
	{
		"id": 24,
		"question": "Which array prototype method merges two arrays and returns one combined array",
		"correctAnswer": "concat",
		"wrongAnswers": [
			"filter",
			"map",
			"forEach"
		],
		"category": "array prototypes"
	},
	{
		"id": 25,
		"question": "Which array prototype method returns a single array out of nested arrays?",
		"correctAnswer": "flat",
		"wrongAnswers": [
			"filter",
			"reduce",
			"map"
		],
		"category": "array prototypes"
	},
	{
		"id": 26,
		"question": "Which array prototype method returns a single string of an array",
		"correctAnswer": "join",
		"wrongAnswers": [
			"filter",
			"forEach",
			"sort"
		],
		"category": "array prototypes"
	},
	{
		"id": 27,
		"question": "What values does the array prototype method 'includes' return?",
		"correctAnswer": "true or false",
		"wrongAnswers": [
			"an item in an array",
			"undefined",
			"the number of times an item appears in an array"
		],
		"category": "array prototypes"
	},
	{
		"id": 28,
		"question": "Which array prototype method returns the first item in an array by mutating the array?",
		"correctAnswer": "shift",
		"wrongAnswers": [
			"slice",
			"forEach",
			"unshift"
		],
		"category": "array prototypes"
	},
	{
		"id": 29,
		"question": "Which array prototype method adds an element to the beginning of an array?",
		"correctAnswer": "unshift",
		"wrongAnswers": [
			"pop",
			"slice",
			"shift"
		],
		"category": "array prototypes"
	},
	{
		"id": 30,
		"question": "Which array prototype property returns the number of items in an array",
		"correctAnswer": "length",
		"wrongAnswers": [
			"map",
			"forEach",
			"count"
		],
		"category": "array prototypes"
	}
]

module.exports = {
  practiceQuestions
}
