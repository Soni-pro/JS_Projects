const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll(".input-box");

function showNotes(){   // this will run when we load the page , it shows all the content written before.
    notesContainer.innerHTML = notesContainer.innerHTML.length < 0 ? '' :localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    console.log(4);
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "./bin.png";
    notesContainer.appendChild(inputBox).appendChild(img);

});
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName == "P"){ 
        console.log('1');   // this will update storage/ localstorage when we'll update p tag
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            console.log('2');
            nt.onkeyup = function(){
                console.log('3');
                updateStorage();
            }
        })
    }

});

document.addEventListener("keydown", event=>{  // this will break line or insert enter in a paragrah and prevent its default behavior
    if(event.key == "Enter"){
        document.execCommand("insertLinkBreak");
        event.preventDefault();
    }
})