const fs = require('fs');
const path = require('path');

const taskFilePath = path.join(__dirname, 'tasks.json');

function loadTask() {
    if (!fs.existsSync(taskFilePath)) {
        fs.writeFileSync(taskFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(taskFilePath, 'utf8');
    return data ? JSON.parse(data) : [];
}

function saveTasks(tasks) {
    fs.writeFileSync(taskFilePath, JSON.stringify(tasks, null, 2));
}

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        addTask(args);
        break; 
    case 'update':
        updateTask(args);
        break;
    case 'delete':
        deleteTask(args);
        break;
    case 'list':
        listTasks(args);
        break;
    default:
        console.log('Unknown command. Available commands are add, update, delete, list.');
}

function addTask(args) {
    const [description] = args;
    const tasks = loadTask();

    const newTask = {
        id: Date.now().toString(),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(), 
        updatedAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasks(tasks);  

    console.log('Task added:', newTask);
}

function updateTask(args) {
    const [taskId, newDescription, newStatus] = args;
    const tasks = loadTask();

    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        console.log('Task not found.');
        return;
    }

    task.description = newDescription || task.description;
    task.status = newStatus || task.status;
    task.updatedAt = new Date().toISOString();

    saveTasks(tasks);

    console.log('Task updated:', task);
}

function deleteTask(args) {
    const [taskId] = args;
    const tasks = loadTask();

    const initialLength = tasks.length;
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    if (updatedTasks.length === initialLength) {
        console.log('Task not found.');
    } else {
        saveTasks(updatedTasks);
        console.log('Task deleted:', taskId);
    }
}

function listTasks(args) {
    const [status] = args;
    const tasks = loadTask();

    const filteredTasks = status
        ? tasks.filter(task => task.status === status)
        : tasks;

    console.log('Tasks:');
    filteredTasks.forEach(task => {
        console.log(`- ${task.id}: ${task.description} [${task.status}]`);
    });
}
