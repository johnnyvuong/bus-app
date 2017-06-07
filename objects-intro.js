var title = document.getElementById("title");
title.textContent = "Hello World";

var descrip = document.getElementById("description");
descrip.textContent = "How is the weather today?"


//random object
var newStuffObject = {
    title: "Kia Ora",
    description: "Today it is raining."
}

//this is a function that triggers when the button is click, it loads new content from an object.
function loadNew() {
    title.textContent = newStuffObject.title;
    descrip.textContent = newStuffObject.description;
}
