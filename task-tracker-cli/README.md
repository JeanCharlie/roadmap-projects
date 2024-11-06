# Task Tracker CLI

**A simple command-line interface (CLI) application to help you manage tasks efficiently.**  
This project allows you to add, update, delete, and view tasks directly from the command line, with task data stored in a JSON file.


## Features

- **Add Tasks**: Create new tasks with a unique ID, description, and timestamps.
- **Update Tasks**: Modify task details, including description and status.
- **Delete Tasks**: Remove tasks from the list.
- **Task Status Management**: Mark tasks as `todo`, `in-progress`, or `done`.
- **Task Filtering**: View tasks by their status, such as completed or pending tasks.
- **Data Persistence**: All tasks are saved in a JSON file, allowing for data persistence between sessions.


## Installation

1. **Clone the Repository**

```bash
git clone https://github.com/JeanCharlie/roadmap-projects.git
cd task-tracker-cli
```

2. **Install Dependencies**

This project only uses core Node.js modules, so there are no external dependencies required.

3. **Run the CLI** 

```bash
node index.js
```

## Usage
To run commands, navigate to the project folder and use the following format:

```bash
node index.js <command> [arguments]
```

### Example

```bash
node index.js add "Learn Node.js basics"
```

## Commands

| Command                               | Description |
|---------------------------------------|-------------|
| `add <description>`                   | Adds a new task with the given description. |
| `update <id> <description> <status>`  | Updates the description or status of a task by ID. |
| `delete <id>`                         | Deletes the task with the specified ID. |
| `list [status]`                       | Lists tasks filtered by status (`todo`, `in-progress`, `done`). |


### Command Details

1. **Add a Task**

```bash
node index.js add "Your task description"
```

- **Example**: node index.js add "Finish writing the documentation"


2. **Update a Task**

```bash
node index.js update <id> "New description" <status>
```

- **Example**: node index.js update 12345 "Revise project code" in-progress
  

3. **Delete a Task**

```bash
node index.js delete <id>
```

- **Example**: node index.js delete 12345 


4. **List Tasks**

```bash
node index.js list [status]
```

- **Example**: node index.js list done


## Project Structure
- **index.js**: Main entry file containing the CLI commands and logic for task management.
- **tasks.json**: JSON file where task data is stored. This file is created automatically if it doesn't exist.
  

## Error Handling

The Task Tracker CLI includes basic error handling:

- **Invalid Commands**: Provides feedback if an unknown command is entered.
- **File Operations**: Checks for the existence of tasks.json and creates it if needed.
- **Missing Arguments**: Prompts the user if required arguments are missing for a command.


## Future Improvements

- **Add Due Dates**: Allow users to set due dates for tasks.
- **Task Priorities**: Enable prioritization (high, medium, low).
- **Enhanced CLI Interface**: Implement more intuitive command parsing.
- **Task Archiving**: Allow users to archive completed tasks.
  

## License
This project is licensed under the MIT License. See the LICENSE file for more details.




