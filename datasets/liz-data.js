const terminalCommands = [
    {
      "id": 1,
      "prompt": "Make a directory",
      "answer": "mkdir",
      "save": false
    },
    {
      "id": 2,
      "prompt": "Change directory",
      "answer": "cd [folder]",
      "save": false
    },
    {
      "id": 3,
      "prompt": "Go to previous directory",
      "answer": "cd ..",
      "save": false
    },
    {
      "id": 4,
      "prompt": "List contents of directory",
      "answer": "ls",
      "save": false
    },
    {
      "id": 5,
      "prompt": "List contents of directory including hidden files",
      "answer": "ls -a",
      "save": false
    },
    {
      "id": 6,
      "prompt": "Open a file",
      "answer": "open [file]",
      "save": false
    },
    {
      "id": 7,
      "prompt": "Clear the screen",
      "answer": "clear",
      "save": false
    },
    {
      "id": 8,
      "prompt": "Create a new file",
      "answer": "touch [file]",
      "save": false
    },
    {
      "id": 9,
      "prompt": "Full path to working directory",
      "answer": "pwd",
      "save": false
    },
    {
      "id": 10,
      "prompt": "Remove a file",
      "answer": "rm [file]",
      "save": false
    },
    {
      "id": 11,
      "prompt": "Copy a file to file",
      "answer": "cp [file] [newfile]",
      "save": false
    },
    {
      "id": 12,
      "prompt": "Copy a file to directory",
      "answer": "cp [file] [dir]",
      "save": false
    },
    {
      "id": 13,
      "prompt": "Move a file to directory",
      "answer": "mv [file] [dir]",
      "save": false
    },
    {
      "id": 14,
      "prompt": "Remove directory",
      "answer": "rmdir [dir]",
      "save": false
    },
    {
      "id": 15,
      "prompt": "Remove directory and contents",
      "answer": "rm -R [dir]",
      "save": false
    },
    {
      "id": 16,
      "prompt": "Go to the beginning of the line you're currently typing on",
      "answer": "Ctrl + A",
      "save": false
    },
    {
      "id": 17,
      "prompt": "Go to the end of the line you're currently typing on",
      "answer": "Ctrl + E",
      "save": false
    },
    {
      "id": 18,
      "prompt": "Kill whatever you are running",
      "answer": "Ctrl + C",
      "save": false
    },
    {
      "id": 19,
      "prompt": "Create nested directories",
      "answer": "mkdir -p [dir]/[dir]",
      "save": false
    },
    {
      "id": 20,
      "prompt": "Copies file contents to clipboard",
      "answer": "pbcopy < [file]",
      "save": false
    },
    {
      "id": 21,
      "prompt": "Paste clipboard contents",
      "answer": "pbpaste",
      "save": false
    },
    {
      "id": 22,
      "prompt": "Paste clipboard contents into file",
      "answer": "pbpaste > [file]",
      "save": false
    }
  ]

const basicGitCommands = [
  {
    "id": 23,
    "prompt": "Create a new git repository",
    "answer": "git init",
    "save": false
  },
  {
    "id": 24,
    "prompt": "Checkout an existing remote repository",
    "answer": "git clone /path/to/repository",
    "save": false
  },
  {
    "id": 25,
    "prompt": "Connect your repo to a remote server",
    "answer": "git remote add origin <server>",
    "save": false
  },
  {
    "id": 26,
    "prompt": "Checkout a new branch",
    "answer": "git checkout -b branchName'",
    "save": false
  },
  {
    "id": 27,
    "prompt": "Add all your changes",
    "answer": "git add .",
    "save": false
  },
  {
    "id": 28,
    "prompt": "Commit your changes",
    "answer": "git commit -m 'Commit message'",
    "save": false
  },
  {
    "id": 29,
    "prompt": "Push changes to remote repository",
    "answer": "git push origin branchName",
    "save": false
  },
  {
    "id": 30,
    "prompt": "Merge local branch",
    "answer": "git merge branchName",
    "save": false
  }
]