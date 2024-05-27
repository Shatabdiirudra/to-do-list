function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDate = document.getElementById('dueDate');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createTextNode(`${taskInput.value} (Due: ${dueDate.value})`);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button'); 
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

  
    taskInput.value = '';
    dueDate.value = '';
}

