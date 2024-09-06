/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let topicList = document.querySelector(".topics-list");
let newTopicForm = document.querySelector(".new-topic-form");

const addTopicToPage = (topicName, topicListElement) => {
  let newTopicElement = `<li class="list-group-item">${topicName}</li>`;

  topicListElement.innerHTML += newTopicElement;
  console.log(topicListElement.innerHTML);
};

newTopicForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let topicInput = event.target.elements["new-topic"];
  let newTopic = topicInput.value;
  if (newTopic === "") {
    topicInput.classList.add("is-invalid");
  } else {
    topicInput.classList.remove("is-invalid");
    addTopicToPage(newTopic, topicList);
  }
});
