const terminalAndGit = [
  {
    "id": 1,
    "prompt": "Make a directory",
    "possibleChoices": ["cdir", "mkdir", "newdir"],
    "correctAnswer": "mkdir"
  },
  {
    "id": 2,
    "prompt": "Change directory",
    "possibleChoices": ["change", "cngdir", "cd"],
    "correctAnswer": "cd"
  },
  {
    "id": 3,
    "prompt": "Go to previous directory",
    "possibleChoices": ["cd ..", "cd .", "prev .."],
    "correctAnswer": "cd .."
  },
  {
    "id": 4,
    "prompt": "List contents of directory",
    "possibleChoices": ["list", "all", "ls"],
    "correctAnswer": "ls"
  },
  {
    "id": 5,
    "prompt": "List contents of directory including hidden files",
    "possibleChoices": ["ls -h", "ls -a", "ls -hf"],
    "correctAnswer": "ls -a"
  },
  {
    "id": 6,
    "prompt": "Open a file",
    "possibleChoices": ["op [file]", "of", "open [file]"],
    "correctAnswer": "open [file]"
  },
  {
    "id": 7,
    "prompt": "Clear the terminal screen",
    "possibleChoices": ["blank", "clear", "cl"],
    "correctAnswer": "clear"
  },
  {
    "id": 8,
    "prompt": "Create a new file",
    "possibleChoices": ["touch [file]", "new [file]", "make [file]"],
    "correctAnswer": "touch [file]"
  },
  {
    "id": 9,
    "prompt": "Full path to working directory",
    "possibleChoices": ["pwd", "path", "fpd"],
    "correctAnswer": "pwd"
  },
  {
    "id": 10,
    "prompt": "Remove a file",
    "possibleChoices": ["del [file]", "rmfile [file]", "rm [file]"],
    "correctAnswer": "rm [file]"
  },
  {
    "id": 11,
    "prompt": "Copy a file to file",
    "possibleChoices": ["cdir", "cp [file] [newfile]", "copy [file] [newfile]"],
    "correctAnswer": "cp [file] [newfile]"
  },
  {
    "id": 12,
    "prompt": "Copy a file to directory",
    "possibleChoices": ["cpf", "cp [file] [newfile]", "cp [file] [dir]"],
    "correctAnswer": "cp [file] [dir]"
  },
  {
    "id": 13,
    "prompt": "Move a file to directory",
    "possibleChoices": ["mv [file] [dir]", "move [file] [newfile]", "new [file] [dir]"],
    "correctAnswer": "mv [file] [dir]"
  },
  {
    "id": 14,
    "prompt": "Remove directory",
    "possibleChoices": ["remove [dir]", "rmdir [dir]", "del [dir]"],
    "correctAnswer": "rmdir [dir]"
  },
  {
    "id": 15,
    "prompt": "Remove directory and contents",
    "possibleChoices": ["rm -R [dir]", "rmdir -A [dir]", "del -R [dir]"],
    "correctAnswer": "rm -R [dir]"
  },
  {
    "id": 16,
    "prompt": "Go to the beginning of the line you're currently typing on",
    "possibleChoices": ["Ctrl + D", "Ctrl + left", "Ctrl + A"],
    "correctAnswer": "Ctrl + A"
  },
  {
    "id": 17,
    "prompt": "Go to the end of the line you're currently typing on",
    "possibleChoices": ["Ctrl + right", "Ctrl + E", "Ctrl + M"],      
    "correctAnswer": "Ctrl + E"
  },
  {
    "id": 18,
    "prompt": "Kill whatever you are running",
    "possibleChoices": ["Ctrl + C", "q", "Ctrl + Q"],   
    "correctAnswer": "Ctrl + C"
  },
  {
    "id": 19,
    "prompt": "Create nested directories",
    "possibleChoices": ["mkdir -n [dir]/[dir]", "mkdir [dir]/[dir]", "mkdir -p [dir]/[dir]"], 
    "correctAnswer": "mkdir -p [dir]/[dir]"
  },
  {
    "id": 20,
    "prompt": "Copies file contents to clipboard",
    "possibleChoices": ["copy [file]", "pbcopy < [file]", "copy < [file]"],
    "correctAnswer": "pbcopy < [file]"
  },
  {
    "id": 21,
    "prompt": "Paste clipboard contents",
    "possibleChoices": ["pbpaste", "paste", "pasteNew"],
    "correctAnswer": "pbpaste"
  },
  {
    "id": 22,
    "prompt": "Paste clipboard contents into file",
    "possibleChoices": ["pasteNew > [file]", "paste > [file]", "pbpaste > [file]"],
    "correctAnswer": "pbpaste > [file]"
  },
  {
    "id": 23,
    "prompt": "Create a new git repository",
    "possibleChoices": ["git init", "git repo", "git new"],
    "correctAnswer": "git init"
  },
  {
    "id": 24,
    "prompt": "Checkout an existing remote repository",
    "possibleChoices": ["git copy", "git clone", "git remote"],
    "correctAnswer": "git clone"
  },
  {
    "id": 25,
    "prompt": "Connect your repo to a remote server",
    "possibleChoices": ["git new remote origin", "git add remote", "git remote add origin"],
    "correctAnswer": "git remote add origin"
  },
  {
    "id": 26,
    "prompt": "Checkout a new branch",
    "possibleChoices": ["git -n branch", "git checkout -b", "git check branch"],
    "correctAnswer": "git checkout -b"
  },
  {
    "id": 27,
    "prompt": "Add all your changes",
    "possibleChoices": ["git add .", "git add ..", "git add changes"],
    "correctAnswer": "git add ."
  },
  {
    "id": 28,
    "prompt": "Commit your changes with a message",
    "possibleChoices": ["git commit", "git commit -m", "git new commit -m"],
    "correctAnswer": "git commit -m"
  },
  {
    "id": 29,
    "prompt": "Push changes to remote repository",
    "possibleChoices": ["git push remote", "git push origin", "git origin remote"],
    "correctAnswer": "git push origin"
  },
  {
    "id": 30,
    "prompt": "Merge local branch",
    "possibleChoices": ["git merge branchName", "git branch merge", "git origin merge"],
    "correctAnswer": "git merge branchName"
  }
]

module.exports = {
terminalAndGit
}