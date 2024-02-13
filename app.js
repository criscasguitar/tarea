document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    const completeAllBtn = document.getElementById('complete');
    const deleteCompletedBtn = document.getElementById('delete');
    const toggleThemeBtn = document.getElementById('changeTheme');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            toggleTaskStatus(e.target);
        } else if (e.target.classList.contains('delete')) {
            deleteTask(e.target.parentElement);
        }
    });

    completeAllBtn.addEventListener('click', completeAllTasks);
    deleteCompletedBtn.addEventListener('click', deleteCompletedTasks);
    toggleThemeBtn.addEventListener('click', toggleTheme);

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function toggleTaskStatus(task) {
        task.classList.toggle('completed');
    }

    function deleteTask(task) {
        task.remove();
    }

    function completeAllTasks() {
        const tasks = document.querySelectorAll('li');
        tasks.forEach(task => task.classList.add('completed'));
    }

    function deleteCompletedTasks() {
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach(task => task.remove());
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }
});