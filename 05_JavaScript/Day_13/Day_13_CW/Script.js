// Targeting the container and paragraph
const container = document.getElementById("container");
const paragraph = document.getElementById("paragraph");

// 1. Creating and appending an element on button click
document.getElementById("create-btn").addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.id = "newDiv";
  const textNode = document.createTextNode("This is a newly created div.");
  newDiv.appendChild(textNode);
  container.appendChild(newDiv);
  alert("New element created and appended!");
});

// 2. Inserting an element before another on button click
document.getElementById("insert-btn").addEventListener("click", () => {
  const newHeading = document.createElement("h2");
  newHeading.textContent = "Inserted Subheading";
  container.insertBefore(newHeading, paragraph);
  alert("New element inserted before the paragraph!");
});

// 3. Replacing an element on button click
document.getElementById("replace-btn").addEventListener("click", () => {
  const replacementParagraph = document.createElement("p");
  replacementParagraph.textContent = "This paragraph replaced the original one.";
  container.replaceChild(replacementParagraph, paragraph);
  alert("Paragraph replaced!");
});

// 4. Removing an element on button click
document.getElementById("remove-btn").addEventListener("click", () => {
  const removeDiv = document.getElementById("newDiv");
  if (removeDiv) {
    container.removeChild(removeDiv);
    alert("Element removed!");
  } else {
    alert("No element to remove!");
  }
});
