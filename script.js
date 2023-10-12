const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === '') {
        alert("Você precisa escrever alguma coisa!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();

var timer;
var ele = document.getElementById('timer');

(function () {
    var sec = 0;
    var min = 0;

    timer = setInterval(() => {
        sec++;

        if (sec >= 60) {
            sec = 0;
            min++;
        }

        var formattedMin = min < 10 ? '0' + min : min;
        var formattedSec = sec < 10 ? '0' + sec : sec;
        ele.innerHTML = formattedMin + ':' + formattedSec;
    }, 1000); // Atualiza a cada 1 segundo
})();

function pause() {
    clearInterval(timer);
}