
    
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
        var task = document.createElement("div");
        task.textContent = taskInput.value;
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            task.remove();
        };
        
        task.appendChild(deleteButton);
        taskList.appendChild(task);
        taskInput.value = "";
    } else {
        alert("Lütfen bir görev girin.");
    }
}





