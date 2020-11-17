document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // create variable for form and add event listener to form

  const form = document.querySelector("#create-task-form")


  form.addEventListener("submit", addToDo)

  // create function addToDo that creates todo for event listener

  function addToDo(event) {
    event.preventDefault()
    const input = event.target["new-task-description"].value

    // create variable for ul, create and append lis to ul
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.textContent = input
    ul.append(li)

    event.target.reset()
  }
});


/*
As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
*/
