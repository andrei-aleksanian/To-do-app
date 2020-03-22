const addForm = document.querySelector('.add');
const toDoList = document.querySelector("#toDoList");
const searchToDO = document.querySelector("#searchToDo");

// Adding a new list element every time form is submitted
function renderTemplate(toDoText){
    const html = `
              <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${toDoText}</span>
                  <i class="far fa-trash-alt delete"></i>
              </li>
              `;

    toDoList.innerHTML += html;
}

searchToDO.addEventListener("submit", e =>{
    e.preventDefault();
});

// On every press search for the element, hide ones that don't match
searchToDO.search.addEventListener("keyup", e =>{
    let toDoElements = Array.from(toDoList.children);

    let text = searchToDO.search.value.trim();
    text = text.toLowerCase();


    for(let i = 0; i < toDoElements.length; i++){
        if(toDoElements[i].textContent.toLowerCase().includes(text)){
            toDoList.children[i].classList.remove("searchHide");
        }else{
            toDoList.children[i].classList.add("searchHide");
        }
    }

});

// Add new list element on form submission
addForm.addEventListener("submit", e => {
    e.preventDefault();

    // Remove p tag if we submit the form
    if(toDoList.children[0].tagName === "P"){
        toDoList.children[0].remove();
    }

    const toDoText = addForm.addToDo.value.trim();
    renderTemplate(toDoText);

    // Clear the form text
    addForm.addToDo.value="";
});

// Checking if user clicks on the trash bin icon
toDoList.addEventListener("click", e =>{
    e.preventDefault();

    // If he clicks, remove the list element
    const elementClasses = Array.from(e.target.classList);
    if(elementClasses.includes("delete")){
        e.target.parentElement.remove();
    }

    // Add a p tag, saying All done! if the to do list is empty
    if (toDoList.children.length === 0){
        let allDone = document.createElement("p");
        allDone.innerText = "All done!";
        toDoList.appendChild(allDone);
    }
});

