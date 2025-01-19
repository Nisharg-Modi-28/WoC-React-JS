const input_box = document.getElementById("task");
const taskList = document.getElementById('taskList');

function addTask() {
    if(input_box === '') {
        alert("Write something !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        taskList.appendChild(li);
    }
}