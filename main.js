let skills = ["Coding", "Math", "Messing Around"];

let dp = document.querySelector("div.container");
let btnAction = document.querySelector("#btnToggleSkill");
btnAction.addEventListener("click", toggleSkills);

let skillContainer = document.createElement("div");
skillContainer.setAttribute('id', 'skill-container');
dp.appendChild(skillContainer);

let showStatus = false;

function toggleSkills() {
    if (showStatus) {
        removeItems(skillContainer, skills);
        showStatus = false;
    } else if (!showStatus) {
        addItems(skillContainer, skills);
        showStatus = true;
    }
}

function addItems(element, items) {
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        li.style.fontSize = "20px";
        element.appendChild(li);
    }
}

function removeItems(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}