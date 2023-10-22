
import { getProductsFromStorage, setToStorage } from './local-storage.js';


const products = getProductsFromStorage();
const inputName = document.querySelector("#i1")
const inputPrice = document.querySelector("#i2")
export function addProduct() {
  if (inputName.value.trim() == "" || inputPrice.value.trim() == "")
    return;
  const newProduct = {
    id: products.length,
    name: inputName.value,
    price: inputPrice.value,
  };
  products.push(newProduct);
  setToStorage();
  createTaskHTML(products);
}
const originalprod = {
  id: 900,
  name: "pen",
  price: "2",
}
products.push(originalprod);


function createTaskHTML(products) {
  const itemsContainer = document.querySelector(".items")
  const itemsHtmlContent = products.map(product => `
        <div class="item" id="${product.id}">
                <p>${product.name}</p>
                <p>${product.price}</p>
                <button class="b1" >x</button>
        </div>
    `)





  itemsContainer.innerHTML = itemsHtmlContent.join("")


  inputName.value = "";
  inputPrice.value = "";
  var tot = 2;
  var ct = 0;
  products.forEach(product => {
    if (ct != 0) {
      tot += parseInt(product.price);
      console.log((tot));
    }
    ct++;
    });
  const spanPrice = document.querySelector("#price");
  spanPrice.innerHTML = tot;
  

  const buttons = document.querySelectorAll('.b1');

    // Add a click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove the parent div when the button is clicked
        const parentDiv = this.parentNode;
        parentDiv.remove();
      });
    });
}