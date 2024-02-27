const inputBox = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}

tasklist.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});