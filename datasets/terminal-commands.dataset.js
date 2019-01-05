const hhTerminalCommands = [
    {
        "id": 1,
        "description": "Reset terminal screen",
        "command": "reset"      
    },
    {
        "id": 2,
        "description": "Clear screen",
        "command": "clear"      
    },
    {
        "id": 3,
        "description": "Print working directory",
        "command": "pwd"      
    },
    {
        "id": 4,
        "description": "Show short listing",
        "command": "ls"     
    },
    {
        "id": 5,
        "description": "Show long listing",
        "command": "ls -l"      
    },
    {
        "id": 6,
        "description": "Show hidden files",
        "command": "ls -a"      
    },
    {
        "id": 7,
        "description": "Show long listing and hidden files",
        "command": "ls -la"     
    },
    {
        "id": 8,
        "description": "Create new folder/directory",
        "command": "mkdir [directory]"      
    },
    {
        "id": 9,
        "description": "Create 3 new directories at once",
        "command": "mkdir [directory1] [directory2] [directory3]"      
    },
    {
        "id": 10,
        "description": "Create new file",
        "command": "touch [file].[file extension]"     
    },
    {
        "id": 11,
        "description": "Open file",
        "command": "open [file]"      
    },
    {
        "id": 12,
        "description": "Remove directory",
        "command": "rm [directory]"     
    },
    {
        "id": 13,
        "description": "Remove directory and all contents",
        "command": "rm -R [directory]"      
    },
    {
        "id": 14,
        "description": "Remove file",
        "command": "rm [file]"   
    },
    {
        "id": 15,
        "description": "Force remove file",
        "command": "rm -f [file]"     
    },
    {
        "id": 16,
        "description": "Change directory",
        "command": "cd [directory]"      
    },
    {
        "id": 17,
        "description": "Change directory 1 level up/backwards",
        "command": "cd .."      
    },
    {
        "id": 18,
        "description": "Change directory 2 levels up/backwards",
        "command": "cd ../.."     
    },
    {
        "id": 19,
        "description": "Change directory 3 levels up/backwards",
        "command": "cd ../../.."      
    },
    {
        "id": 20,
        "description": "Change back to home/root directory",
        "command": "cd ~"      
    },
    {
        "id": 21,
        "description": "Copy file to different file",
        "command": "cp [file1] [file2]"      
    },
    {
        "id": 22,
        "description": "Copy file to directory",
        "command": "cp [file] [directory]"     
    },
    {
        "id": 23,
        "description": "Move file to directory",
        "command": "mv [file] [directory]"      
    },
    {
        "id": 24,
        "description": "Remove empty directory",
        "command": "rmdir [directory]"      
    },
    {
        "id": 25,
        "description": "Open file in Sublime",
        "command": "sublime [file]"      
    },
    {
        "id": 26,
        "description": "Open all files in Sublime",
        "command": "sublime ."      
    },
    {
        "id": 27,
        "description": "Open file in VS Code",
        "command": "code [file]"      
    },
    {
        "id": 28,
        "description": "Open all files in VS Code",
        "command": "code ."      
    },
    {
        "id": 29,
        "description": "Display running processes",
        "command": "top"      
    },
    {
        "id": 30,
        "description": "Quit subscreen and return to Terminal",
        "command": "q"      
    }
]

module.exports = {
    hhTerminalCommands
}
