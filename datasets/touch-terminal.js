const terminalCommands = [
  {
    "answer": "ls",
    "question": "Lists the names of files in your current working directory"
  },
  {
    "answer": "cd",
    "question": "This command changes your working directory"
  },
  {
    "answer": "pwd",
    "question": "Displays the path to your current working directory"
  },
  {
    "answer": "mkdir",
    "question": "Makes a new directory"
  },
  {
    "answer": "rmdir",
    "question": "Removes an empty directory"
  },
  {
    "answer": "touch",
    "question": "Creates a new file within your current directory"
  },
  {
    "answer": "open",
    "question": "Opens a file"
  },
  {
    "answer": "clear",
    "question": "Clears the screen"
  },
  {
    "answer": "reset",
    "question": "Resets the terminal display"
  },
  {
    "answer": "cd ..",
    "question": "Move one directory up"
  },
  {
    "answer": "rm",
    "question": "Remove a file"
  },
  {
    "answer": "rm -r",
    "question": "Remove a directory and contents"
  },
  {
    "answer": "rm -f",
    "question": "Force remove a file"
  },
  {
    "answer": "cp",
    "question": "Copy a file"
  },
  {
    "answer": "mv",
    "question": "Move a file"
  },
  {
    "answer": "mkdir -p",
    "question": "Create nested directories"
  },
  {
    "answer": "pbcopy <",
    "question": "Copies file contents to clipboard"
  },
  {
    "answer": "pbpaste",
    "question": "Paste clipboard contents"
  },
  {
    "answer": "cat",
    "question": "Concatenate to screen"
  },
  {
    "answer": "!!",
    "question": "Execute the last command typed"
  }
]

const gitCommands = [{
    "answer": "git init",
    "question": "Create a new local repository"
  },
  {
    "answer": "git add",
    "question": "Add files to staging"
  },
  {
    "answer": "git commit -m",
    "question": "Commit changes"
  },
  {
    "answer": "git push origin master",
    "question": "Send changes to the master branch of your remote repositiory"
  },
  {
    "answer": "git status",
    "question": "Lists the files that you have changed and those that have yet to be added"
  },
  {
    "answer": "git remote add origin",
    "question": "Connect to a remote repository"
  },
  {
    "answer": "git checkout -b",
    "question": "Create a new branch and switch to it"
  },
  {
    "answer": "git checkout",
    "question": "Switch from your current branch to another"
  },
  {
    "answer": "git branch",
    "question": "Lists all the branches in your repository"
  },
  {
    "answer": "git branch -d",
    "question": "Delete a branch"
  },
  {
    "answer": "git push --all origin",
    "question": "Push all branches to your remote repository"
  },
  {
    "answer": "git pull",
    "question": "Fetch and merge the changes on the remote server to your working directory"
  },
  {
    "answer": "git merge",
    "question": "Merge another branch into your current branch"
  },
  {
    "answer": "git diff",
    "question": "Preview changes"
  },
  {
    "answer": "git stash",
    "question": "Stash all your changes"
  },
  {
    "answer": "git fetch",
    "question": "Fetch all branches from your remote repository"
  },
  {
    "answer": "git checkout --",
    "question": "Replace the changes in your working tree with the last commit"
  },
  {
    "answer": "git log",
    "question": "Show commit logs"
  },
  {
    "answer": "git stash clear",
    "question": "Remove all stashed entries"
  },
  {
    "answer": "git branch -a",
    "question": "List all branches, local and remote"
  },
  {
    "answer": "git push origin --delete",
    "question": "Delete a remote branch"
  },
  {
    "answer": "git log --summary",
    "question": "View detailed changes"
  }
]

module.exports = { terminalCommands, gitCommands }
