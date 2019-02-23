const pvGitCommands = [
   {
    "gitCommand":"git config",
    "question":"What is this command used for?",
    "correctAnswer": "Create an alias (shortcut) for git status",
    "possibleAnswers": ["Create an alias (shortcut) for git status", "See where Git is located", "Initialize Git"],
    "id" : 1
   },
  {
    "gitCommand": "git init",
    "question": "What is this command used for?",
    "correctAnswer": "Initialize Git",
    "possibleAnswers": ["Remove files from Git", "Commit changes", "Initialize Git"],
    "id" : 2
  },
  {
    "gitCommand": "git clone",
    "question": "What is this command used for?",
    "correctAnswer": "Clone to localhost",
    "possibleAnswers": 
      ["True merge", "Clone to localhost", "Rename branch"],
    "id" : 3
  },
  {
    "gitCommand": "git add .",
    "question": "What is this command used for?",
    "correctAnswer": "Get everything ready to commit",
    "possibleAnswers": ["Remove files from Git", "Get everything ready to commit", "Restore file from a custom commit"],
    "id" : 4
  },
  {
    "gitCommand": "git commit -m",
    "question": "What is this command used for?",
    "correctAnswer": "Commit changes w/ a message",
    "possibleAnswers": ["Move or rename files", "Commit changes w/ a message", "Initialize Git"],
    "id" : 5
  },
  {
    "gitCommand": "git diff",
    "question": "What is this command used for?",
    "correctAnswer": "Compare modified files",
    "possibleAnswers": ["Create release version", "Show all released versions", "Compare modified files"],
    "id" : 6
  },
  {
    "gitCommand": "git reset",
    "question": "What is this command used for?",
    "correctAnswer": "Undo latest commit",
    "possibleAnswers": ["Undo latest commit", "Show remote details", "Show all branches"],
    "id" : 7
  },
  {
    "gitCommand": "git status",
    "question": "What is this command used for?",
    "correctAnswer": "Show the working tree status",
    "possibleAnswers": ["Remove files from Git", "Commit changes", "Show the working tree status"],
    "id" : 8
  },
  {
    "gitCommand": "git rm",
    "question": "What is this command used for?",
    "correctAnswer": "Remove files from the working tree and from the index",
    "possibleAnswers": ["True merge",
      "Remove files from the working tree and from the index",
      "Rename branch"],
    "id" : 9
  },
  {
    "gitCommand": "git log",
    "question": "What is this command used for?",
    "correctAnswer": "Show commit logs",
    "possibleAnswers": ["Remove files from Git", "Show commit logs", "True merge"],
    "id" : 9
  },
  {
    "gitCommand": "git show branch",
    "question": "What is this command used for?",
    "correctAnswer": "Show branches and their commits",
    "possibleAnswers": ["Rename branch", "Compare modified files", "Show branches and their commits"],
    "id" : 10
  },
  {
    "gitCommand": "git tag",
    "question": "What is this command used for?",
    "correctAnswer": "Create, list, delete or verify a tag object signed with GPG",
    "possibleAnswers": ["Create, list, delete or verify a tag object signed with GPG", "Commit changes", "Initialize Git"],
    "id" : 11
  },
  {
    "gitCommand": "git branch",
    "question": "What is this command used for?",
    "correctAnswer": "List, create, or delete branches",
    "possibleAnswers": ["Remove files from Git", "List, create, or delete branches", "Initialize Git"],
    "id" : 12
  },
  {
    "gitCommand": "git checkout",
    "question": "What is this command used for?",
    "correctAnswer": "",
    "possibleAnswers": ["Remove files from Git", "Get everything ready to commit", "Restore file from a custom commit"],
    "id" : 13
  },
  {
    "gitCommand": "git merge",
    "question": "What is this command used for?",
    "correctAnswer": "Switch branches or restore working tree files",
    "possibleAnswers": ["Initialize Git", "Restore file from a custom commit", "Switch branches or restore working tree files"],
    "id" : 14
  },
  {
    "gitCommand": "git remote",
    "question": "What is this command used for?",
    "correctAnswer": "Manage set of tracked repositories",
    "possibleAnswers": ["Rename branch", "Compare modified files", "Show branches and their commits"],
    "id" : 15
  },
  {
    "gitCommand": "git push",
    "question": "What is this command used for?",
    "correctAnswer": "Update remote refs along with associated objects",
    "possibleAnswers": ["Remove files from Git", "Update remote refs along with associated objects", "Show commit logs"],
    "id" : 16
  },
  {
    "gitCommand": "git pull",
    "question": "What is this command used for?",
    "correctAnswer": "Fetch from and integrate with another repository or a local branch",
    "possibleAnswers": ["Remove files from Git", "Update remote refs along with associated objects", "Fetch from and integrate with another repository or a local branch"],
    "id" : 17
  },
  {
    "gitCommand": "git stash",
    "question": "What is this command used for?",
    "correctAnswer": "Stash the changes in a dirty working directory away",
    "possibleAnswers": ["Stash the changes in a dirty working directory away", "Show remote details", "Show all branches"],
    "id" : 18
  },
  {
    "gitCommand": "git revert",
    "question": "What is this command used for?",
    "correctAnswer": "Revert some existing commits",
    "possibleAnswers": ["Stash the changes in a dirty working directory away", "Show remote details", "Revert some existing commits"],
    "id" : 19
  },
  {
    "gitCommand": "git archive",
    "question": "What is this command used for?",
    "correctAnswer": "Create an archive of files from a named tree",
    "possibleAnswers": ["Remove files from Git", "Create an archive of files from a named tree", "Initialize Git"],
    "id" : 20
  },
  {
    "gitCommand": "git merge --abort",
    "question": "What is this command used for?",
    "correctAnswer": "Stop merge (in case of conflicts)",
    "possibleAnswers": ["Initialize Git", "Restore file from a custom commit", "Stop merge (in case of conflicts)"],
    "id" : 21
  },
  {
    "gitCommand": "git checkout -b",
    "question": "What is this command used for?",
    "correctAnswer": "Create and checkout branch from a remote branch",
    "possibleAnswers": ["Remove files from Git", "Create and checkout branch from a remote branch", "Initialize Git"],
    "id" : 22
  },
  {
    "gitCommand": "git clean -f",
    "question": "What is this command used for?",
    "correctAnswer": "Delete untracked files (not staging)",
    "possibleAnswers": ["Create and checkout branch from a remote branch", "Delete untracked files (not staging)", "Restore file from a custom commit"],
    "id" : 23
  },
  {
    "gitCommand": "git mv",
    "question": "What is this command used for?",
    "correctAnswer": "Move or rename files",
    "possibleAnswers": ["Show remote details", "Revert some existing commits", "Move or rename files"],
    "id" : 24
  },
  {
    "gitCommand": "git stash list",
    "question": "What is this command used for?",
    "correctAnswer": "Show stash",
    "possibleAnswers": ["Remove files from Git", "Create an archive of files from a named tree", "Show stash"],
    "id" : 25
  },
  {
    "gitCommand": "git stash clear",
    "question": "What is this command used for?",
    "correctAnswer": "Delete complete stash",
    "possibleAnswers": ["Remove files from Git", "Delete complete stash", "Show stash"],
    "id" : 26
  },
  {
    "gitCommand": "nano .gitignore",
    "question": "What is this command used for?",
    "correctAnswer": "Add or edit gitignore",
    "possibleAnswers": ["Add or edit gitignore", "show stash", "Remove files from Git"],
    "id" : 27
  },
  {
    "gitCommand": "git log --graph",
    "question": "What is this command used for?",
    "correctAnswer": "Show history of commits as graph",
    "possibleAnswers": ["Push to master", "Move or rename files", "Show history of commits as graph"],
    "id" : 28
  },
  {
    "gitCommand": " git fetch upstream",
    "question": "What is this command used for?",
    "correctAnswer": "Download objects and refs from another repository",
    "possibleAnswers": ["Download objects and refs from another repository", "push to master", "Delete your project"],
    "id": 29
  },
  {
    "gitCommand": "git rm -r folder-name",
    "question": "What is this command used for?",
    "correctAnswer": "Delete everything you created",
    "possibleAnswers": ["merge to master", "push to master", "Delete everything you created"],
    "id": 30
  }
  ];
      

module.exports = { pvGitCommands };