document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.querySelector('#add-task-btn')
    const taskInput = document.querySelector('#todo-input')
    const ul = document.querySelector('#todo-list')

    addTaskButton.addEventListener('click', function () {
        const task = taskInput.value.trim()
        if (task == '') {
            alert("Please enter a task")
        } else {
            createTask(task)
        }
    }, false)

    function clearInput() {
        taskInput.value = ""
    }

    taskInput.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            addTaskButton.click()
        }
    }, false)

    function createTask(task) {
        const li = document.createElement('li')
        const button = document.createElement('button')

        li.textContent = `${task}`
        button.textContent = 'Delete'

        li.appendChild(button)
        ul.appendChild(li)
        saveTask()
        clearInput()
    }

    ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed')
            saveTask()
        } else if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove()
            saveTask()
        }
    }, false)


    function saveTask() {
        localStorage.setItem('tasks', ul.innerHTML)
    }

    function displayTask() {
        ul.innerHTML = localStorage.getItem('tasks')
    }

    displayTask()

})

let lightMode = document.querySelector(".light-mode");
let darkMode = document.querySelector(".dark-mode");
let body = document.querySelector(".body");

darkMode.addEventListener("click", () => {
    lightMode.style.display = "block";
    darkMode.style.display = "none";
    body.classList.add("change-mode");
})

lightMode.addEventListener("click", () => {
    darkMode.style.display = "block";
    lightMode.style.display = "none";
    body.classList.remove("change-mode");
})