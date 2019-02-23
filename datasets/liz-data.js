const terminalAndGit = [
    {
      "id": 1,
      "prompt": "Make a directory",
      "possibleChoices": ["cdir", "mkdir", "newdir"],
      "correctAnswer": "mkdir",
      "save": false
    },
    {
      "id": 2,
      "prompt": "Change directory",
      "possibleChoices": ["change", "cngdir", "cd"],
      "correctAnswer": "cd",
      "save": false
    },
    {
      "id": 3,
      "prompt": "Go to previous directory",
      "possibleChoices": ["cd ..", "cd .", "prev .."],
      "correctAnswer": "cd ..",
      "save": false
    },
    {
      "id": 4,
      "prompt": "List contents of directory",
      "possibleChoices": ["list", "all", "ls"],
      "correctAnswer": "ls",
      "save": false
    },
    {
      "id": 5,
      "prompt": "List contents of directory including hidden files",
      "possibleChoices": ["ls -h", "ls -a", "ls -hf"],
      "correctAnswer": "ls -a",
      "save": false
    },
    {
      "id": 6,
      "prompt": "Open a file",
      "possibleChoices": ["op [file]", "of", "open [file]"],
      "correctAnswer": "open [file]",
      "save": false
    },
    {
      "id": 7,
      "prompt": "Clear the terminal screen",
      "possibleChoices": ["blank", "cl", "clear"],
      "correctAnswer": "clear",
      "save": false
    },
    {
      "id": 8,
      "prompt": "Create a new file",
      "possibleChoices": ["create [file]", "new [file]", "touch [file]"],
      "correctAnswer": "touch [file]",
      "save": false
    },
    {
      "id": 9,
      "prompt": "Full path to working directory",
      "possibleChoices": ["pwd", "path", "fpd"],
      "correctAnswer": "pwd",
      "save": false
    },
    {
      "id": 10,
      "prompt": "Remove a file",
      "possibleChoices": ["del [file]", "rmfile [file]", "rm [file]"],
      "correctAnswer": "rm [file]",
      "save": false
    },
    {
      "id": 11,
      "prompt": "Copy a file to file",
      "possibleChoices": ["cdir", "cp [file] [newfile]", "copy [file] [newfile]"],
      "correctAnswer": "cp [file] [newfile]",
      "save": false
    },
    {
      "id": 12,
      "prompt": "Copy a file to directory",
      "possibleChoices": ["cpf", "cp [file] [newfile]", "cp [file] [dir]"],
      "correctAnswer": "cp [file] [dir]",
      "save": false
    },
    {
      "id": 13,
      "prompt": "Move a file to directory",
      "possibleChoices": ["mv [file] [dir]", "move [file] [newfile]", "new [file] [dir]"],
      "correctAnswer": "mv [file] [dir]",
      "save": false
    },
    {
      "id": 14,
      "prompt": "Remove directory",
      "possibleChoices": ["remove [dir]", "rmdir [dir]", "del [dir]"],
      "correctAnswer": "rmdir [dir]",
      "save": false
    },
    {
      "id": 15,
      "prompt": "Remove directory and contents",
      "possibleChoices": ["rm -R [dir]", "rmdir -A [dir]", "del -R [dir]"],
      "correctAnswer": "rm -R [dir]",
      "save": false
    },
    {
      "id": 16,
      "prompt": "Go to the beginning of the line you're currently typing on",
      "possibleChoices": ["Ctrl + A", "Ctrl + left", "Ctrl + D"],
      "correctAnswer": "Ctrl + A",
      "save": false
    },
    {
      "id": 17,
      "prompt": "Go to the end of the line you're currently typing on",
      "possibleChoices": ["Ctrl + E", "Ctrl + right", "Ctrl + M"],      
      "correctAnswer": "Ctrl + E",
      "save": false
    },
    {
      "id": 18,
      "prompt": "Kill whatever you are running",
      "possibleChoices": ["Ctrl + C", "q", "Ctrl + Q"],   
      "correctAnswer": "Ctrl + C",
      "save": false
    },
    {
      "id": 19,
      "prompt": "Create nested directories",
      "possibleChoices": ["mkdir -p [dir]/[dir]", "mkdir [dir]/[dir]", "mkdir -n [dir]/[dir]"], 
      "correctAnswer": "mkdir -p [dir]/[dir]",
      "save": false
    },
    {
      "id": 20,
      "prompt": "Copies file contents to clipboard",
      "possibleChoices": ["copy [file]", "pbcopy < [file]", "copy < [file]"],
      "correctAnswer": "pbcopy < [file]",
      "save": false
    },
    {
      "id": 21,
      "prompt": "Paste clipboard contents",
      "possibleChoices": ["paste", "pbpaste", "pasteNew"],
      "correctAnswer": "pbpaste",
      "save": false
    },
    {
      "id": 22,
      "prompt": "Paste clipboard contents into file",
      "possibleChoices": ["pbpaste > [file]", "paste > [file]", "pasteNew > [file]"],
      "correctAnswer": "pbpaste > [file]",
      "save": false
    },
    {
      "id": 23,
      "prompt": "Create a new git repository",
      "possibleChoices": ["git init", "git repo", "git new"],
      "correctAnswer": "git init",
      "save": false
    },
    {
      "id": 24,
      "prompt": "Checkout an existing remote repository",
      "possibleChoices": ["git clone", "git copy", "git remote"],
      "correctAnswer": "git clone",
      "save": false
    },
    {
      "id": 25,
      "prompt": "Connect your repo to a remote server",
      "possibleChoices": ["git remote add origin", "git add remote", "git new remote origin"],
      "correctAnswer": "git remote add origin",
      "save": false
    },
    {
      "id": 26,
      "prompt": "Checkout a new branch",
      "possibleChoices": ["git -n branch", "git checkout -b", "git check branch"],
      "correctAnswer": "git checkout -b'",
      "save": false
    },
    {
      "id": 27,
      "prompt": "Add all your changes",
      "possibleChoices": ["git add .", "git add ..", "git add changes"],
      "correctAnswer": "git add .",
      "save": false
    },
    {
      "id": 28,
      "prompt": "Commit your changes with a message",
      "possibleChoices": ["git commit -m", "git commit", "git new commit -m"],
      "correctAnswer": "git commit -m",
      "save": false
    },
    {
      "id": 29,
      "prompt": "Push changes to remote repository",
      "possibleChoices": ["git push remote", "git push origin", "git origin remote"],
      "correctAnswer": "git push origin",
      "save": false
    },
    {
      "id": 30,
      "prompt": "Merge local branch",
      "possibleChoices": ["git merge branchName", "git branch merge", "git origin merge"],
      "correctAnswer": "git merge branchName",
      "save": false
    }
]

module.exports = {
  terminalAndGit
}