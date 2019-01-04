const questionData = [
  {
    "question": "What is a package?",
    "correctAnswer": "One or more modules grouped together that solve a problem.",
    "incorrectAnswers": [
      "An app used in React to create components.",
      "A feature specific to Node.js.",
      "Code that can't be re-used once it has executed."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 100
  },
  {
    "question": "What is a module?",
    "correctAnswer": "A file or directory that is loaded by Node.js.",
    "incorrectAnswers": [
      "It's the same as a package.",
      "A React component required in every web application.",
      "A file that creates a fetch call to a dataset."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 100
  },
  {
    "question": "What is the biggest benefit to using NPM packages?",
    "correctAnswer": "It's an easier way to implement pre-written code.",
    "incorrectAnswers": [
      "It improves the security of your web application.",
      "It looks impressive to prospective employers.",
      "It is designed to improve cross-compatibility between browsers."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 100
  },
  {
    "question": "Which official website is used to browse packages, documentation and support for NPM?",
    "correctAnswer": "npmjs.com",
    "incorrectAnswers": [
      "nodepackagemanager.com",
      "npm.com",
      "npm-docs.com"
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 200
  },
  {
    "question": "Are Node.js and NPM the same?",
    "correctAnswer": "No, Node.js is a runtime environment, and NPM is a package manager.",
    "incorrectAnswers": [
      "No, Node.js is a package manager, and NPM is a runtime environment.",
      "Yes, the two terms are used interchangeably.",
      "Yes, however, each refers to the operating system they are used on."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 200
  },
  {
    "question": "NPM stands for:",
    "correctAnswer": "Node Package Manager.",
    "incorrectAnswers": [
      "Node Pipeline Manager.",
      "New Popular Manager.",
      "Novice Package Maintenance."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 200
  },
  {
    "question": "What is a package.json file?",
    "correctAnswer": "A file that holds a project's data and dependencies.",
    "incorrectAnswers": [
      "A special type of NPM package that improves performance.",
      "A duplicate of package-lock.json to be read by older browsers.",
      "A file that usually indicates a security vulnerability."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 300
  },
  {
    "question": "What is a package-lock.json file?",
    "correctAnswer": "A dependency log usually committed to version control to ensure compatibility.",
    "incorrectAnswers": [
      "A carbon-copy of the package.json file.",
      "A deprecated technology used for Internet Explorer compatibility.",
      "A file that should never be shared with other users."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 300
  },
  {
    "question": "What is the main reason we need a package.json file?",
    "correctAnswer": "So a project can be installed without having its dependencies bundled with the app.",
    "incorrectAnswers": [
      "Because it is required by the W3C.",
      "So our project can be used without its dependencies, and instead scan for its own.",
      "Because a project's libraries are able to be compressed into a single file."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 300
  },
  {
    "question": "How do I install NPM modules locally (in the current directory)?",
    "correctAnswer": "npm install",
    "incorrectAnswers": [
      "npm install local",
      "npm init",
      "npm install -here"
    ],
    "category": "Commands",
    "difficulty": "Easy",
    "pointsValue": 350
  },
  {
    "question": "Which file holds the scripts property in order to execute the relevant code?",
    "correctAnswer": "package.json",
    "incorrectAnswers": [
      "package-lock.json",
      ".gitignore",
      ".DS_Store"
    ],
    "category": "Concepts",
    "difficulty": "Moderate",
    "pointsValue": 400
  },
  {
    "question": "What is the main difference between a dependency and a devDependency?",
    "correctAnswer": "Dependencies are used while the app runs; devDependencies are used in development.",
    "incorrectAnswers": [
      "Dependencies are used in development; devDependencies are used while the app runs.",
      "devDependencies are only used if the developer needs more functionality from a module.",
      "Dependencies are mainly used for testing, while devDependencies are used for everything else."
    ],
    "category": "Concepts",
    "difficulty": "Moderate",
    "pointsValue": 400
  },
  {
    "question": "Which of these should be a devDependency?",
    "correctAnswer": "ESLint.",
    "incorrectAnswers": [
      "React.",
      "Redux.",
      "Axios."
    ],
    "category": "Concepts",
    "difficulty": "Moderate",
    "pointsValue": 400
  },
  {
    "question": "Which of these should be a dependency (not a devDependency)?",
    "correctAnswer": "React.",
    "incorrectAnswers": [
      "ESLint.",
      "Babel.",
      "Enzyme."
    ],
    "category": "Concepts",
    "difficulty": "Moderate",
    "pointsValue": 500
  },
  {
    "question": "Which of these folders or files should not be pushed to version control?",
    "correctAnswer": "node_modules",
    "incorrectAnswers": [
      "src",
      "package-lock.json",
      ".gitignore"
    ],
    "category": "Concepts",
    "difficulty": "Moderate",
    "pointsValue": 500
  },
  {
    "question": "What is stored inside of my project's node_modules folder?",
    "correctAnswer": "All installed modules, including their dependencies.",
    "incorrectAnswers": [
      "All current components of a React project, so NPM can find them for us.",
      "All error logs that result from modules with compatibility issues.",
      "Files that describe a module's license."
    ],
    "category": "Commands",
    "difficulty": "Moderate",
    "pointsValue": 500
  },
  {
    "question": "How do I initialize a project and create a package.json file?",
    "correctAnswer": "npm init",
    "incorrectAnswers": [
      "init npm",
      "npm install",
      "init npm --save-dev"
    ],
    "category": "Commands",
    "difficulty": "Moderate",
    "pointsValue": 600
  },
  {
    "question": "Which of these options allow an NPM module to be installed globally?",
    "correctAnswer": "-g",
    "incorrectAnswers": [
      "-l",
      "-all",
      "-glbl"
    ],
    "category": "Commands",
    "difficulty": "Moderate",
    "pointsValue": 600
  },
  {
    "question": "How can I install Redux locally?",
    "correctAnswer": "npm install --save redux",
    "incorrectAnswers": [
      "npm redux -install",
      "npm redux",
      "install redux --save"
    ],
    "category": "Commands",
    "difficulty": "Moderate",
    "pointsValue": 600
  },
  {
    "question": "How can I install ESLint locally as a devDependency?",
    "correctAnswer": "npm install eslint --save-dev",
    "incorrectAnswers": [
      "npm install --save-dev -eslint",
      "npm install eslint -save",
      "install eslint -dev"
    ],
    "category": "Commands",
    "difficulty": "Moderate",
    "pointsValue": 650
  },
  {
    "question": "What is a peer dependency?",
    "correctAnswer": "Dependencies that are not meant to interact with other similar dependencies.",
    "incorrectAnswers": [
      "Dependencies that rely solely on another dependency in order to work correctly.",
      "A special type of devDependency that is pushed to version control.",
      "A dependency that tracks other modules in order to anticipate conflicts."
    ],
    "category": "Concepts",
    "difficulty": "Challenging",
    "pointsValue": 700
  },
  {
    "question": "How can I add myself as a user in order to publish my own NPM module?",
    "correctAnswer": "npm adduser",
    "incorrectAnswers": [
      "adduser npm",
      "npm add-user",
      "npm user-add"
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 700
  },
  {
    "question": "I'd like to update my NPM packages, but I'm not sure how...",
    "correctAnswer": "npm update",
    "incorrectAnswers": [
      "update npm -all",
      "update -npm",
      "npm -updt -a"
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 700
  },
  {
    "question": "Which negative scenario would a peer dependency solve?",
    "correctAnswer": "A module that uses the same dependencies, which rely on different versions.",
    "incorrectAnswers": [
      "A React project that has too many modules used within multiple components.",
      "A module that has a dependency which relies on a specific browser configuration.",
      "Any module that directly affects the DOM at the same time as another module."
    ],
    "category": "Concepts",
    "difficulty": "Challenging",
    "pointsValue": 800
  },
  {
    "question": "I'm ready to publish my NPM package, which command is correct?",
    "correctAnswer": "npm publish --access=public",
    "incorrectAnswers": [
      "publish npm --access=public",
      "npm publish --u-public",
      "npm publish -f -p"
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 800
  },
  {
    "question": "How should I bump my NPM existing package with my new version of it?",
    "correctAnswer": "npm version patch -m",
    "incorrectAnswers": [
      "npm patch -f",
      "npm ver -m",
      "npm push origin master"
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 800
  },
  {
    "question": "What is Semantic Versioning (SemVer)?",
    "correctAnswer": "A package naming convention that easily denotes new version changes.",
    "incorrectAnswers": [
      "A package naming convention that displays its popularity at-a-glance.",
      "An NPM package that ensures all other packages are up to date.",
      "A seldom-used NPM package which is used to push new versions automatically."
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 900
  },
  {
    "question": "In semantic versioning, the number in the middle position indicates:",
    "correctAnswer": "New features that are backwards-compatible.",
    "incorrectAnswers": [
      "Any change that may break a package that are not backwards-compatible.",
      "Any bug fixes that are backwards-compatible.",
      "The number of compatibility issues with the package's dependencies."
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 900
  },
  {
    "question": "Which type of licenses are most often preferable when creating an NPM package?",
    "correctAnswer": "Open-source licenses, such as ISC or GPL.",
    "incorrectAnswers": [
      "Any license is fine; it doesn't matter.",
      "Closed-source licenses, because NPM packages are known for being proprietary.",
      "Licenses are no longer included in NPM packages, since we assume packages are open-source."
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 900
  },
  {
    "question": "In relation to NPM packages, what is a package scope?",
    "correctAnswer": "A way to group similar NPM packages together to avoid naming conflicts.",
    "incorrectAnswers": [
      "A way that NPM tracks of context of 'this' within Javascript objects.",
      "An NPM package to help manage the file size of NPM packages.",
      "A useful visualization of how NPM looks for packages within the node_modules folder."
    ],
    "category": "Commands",
    "difficulty": "Challenging",
    "pointsValue": 1000
  }
 ]
 
 module.exports = {
   questionData
 }