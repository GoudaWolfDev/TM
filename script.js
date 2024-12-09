// عناصر HTML
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// تحميل المهام من LocalStorage عند فتح الصفحة
document.addEventListener('DOMContentLoaded', loadTasks);

// إضافة مهمة جديدة
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('الرجاء إدخال مهمة!');
        return;
    }

    addTask(taskText);
    saveTask(taskText);
    taskInput.value = ''; // تفريغ حقل الإدخال
});

// وظيفة لإضافة مهمة إلى القائمة
function addTask(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'حذف';
    deleteButton.className = 'delete-task';
    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
        deleteTask(taskText);
    });

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteButton);
    taskList.appendChild(taskDiv);
}

// حفظ المهمة في LocalStorage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// تحميل المهام من LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
}

// حذف مهمة من LocalStorage
function deleteTask(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskToDelete);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


