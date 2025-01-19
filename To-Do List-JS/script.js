const input_box = document.getElementById("task");
const taskList = document.getElementById('taskList');

function addTask() {
    if(input_box.value === '') {
        alert("Write something !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        taskList.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = '';
    saveData();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data");
}

showData();