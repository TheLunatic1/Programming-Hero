const mainContainer = document.getElementById('dom-list');

const placesSection = document.createElement('section');

//h1
const h1 = document.createElement('h1');
h1.textContent = "Places to Visit";
placesSection.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Paris";

ul.appendChild(li1);
placesSection.appendChild(ul);

mainContainer.appendChild(placesSection);
console.log("Hello, DOM!");


//easy
const books = document.createElement('section');
books.innerHTML = `
<h2>Books to Read</h2>
<ul>
  <li>The Great Gatsby</li>
  <li>To Kill a Mockingbird</li>
  <li>1984</li>
</ul>
`
mainContainer.appendChild(books);