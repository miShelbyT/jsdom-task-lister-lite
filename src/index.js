document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // create variable for form and add event listener to form

  const form = document.querySelector("#create-task-form")

  // create variable for ul, which will eventually have li appended
  const ul = document.querySelector("ul")

  // create variable for #tasks so I can add event listener and delete uls
  const tasks = document.querySelector("#tasks")

  tasks.addEventListener("click", deleteToDo)

  form.addEventListener("submit", addToDo)

  // create function addToDo that creates todo for event listener

  function addToDo(event) {
    event.preventDefault()
    const input = event.target["new-task-description"].value

    // create and append li's to ul
    
    const li = document.createElement("li")
    li.textContent = input
    ul.append(li)

    event.target.reset()
  }
});

function deleteToDo(event) {
  event.target.remove()
}


/*
As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
*/
