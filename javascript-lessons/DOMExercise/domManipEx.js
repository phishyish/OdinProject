// your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// // Add a:
// // 1) a <p> with red text that says “Hey I’m red!”
// const paragraph = document.createElement("p");
// paragraph.classList.add("paragraph");
// paragraph.style.color = "red";
// paragraph.textContent = "Hey I'm red!";


// container.appendChild(paragraph);

// // 2) an <h3> with blue text that says “I’m a blue h3!”
// const headerThree = document.createElement("h3");
// headerThree.classList.add("h3");  
// headerThree.style.color = "blue";
// headerThree.textContent = "I’m a blue h3!";
// container.appendChild(headerThree);  // Append to container

// // 3) a <div> with a black border and pink background color with the following elements inside of it:
//     // another <h1> that says “I’m in a div”
//     // a <p> that says “ME TOO!”
//     // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
// const div = document.createElement("div");
// div.style.cssText = "border: 2px solid black; background: pink;";
// div.textContent ='Test';


// const divH1 = document.createElement("h1");
// divH1.textContent = "I’m in a div";
// div.appendChild(divH1);

// const divParagraph = document.createElement("p");
// divParagraph.textContent = "ME TOO!";
// div.appendChild(divParagraph);

// container.appendChild(div);

// The button code.
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});









