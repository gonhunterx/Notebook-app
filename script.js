const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('p'); // create a new paragraph
    let img = document.createElement('img'); // create img 
    inputBox.className = "input-box"; // add class to paragraph
    inputBox.setAttribute("contenteditable", "true"); // add contenteditable attribute to paragraph
    img.src = "delete.png"; // add src to img
    notesContainer.appendChild(inputBox).appendChild(img); // append, meaning to display, paragraph and img to notesContainer
})

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak"); // insert line break when enter key is pressed
        event.preventDefault(); // prevent default behavior of enter key  
    }
})