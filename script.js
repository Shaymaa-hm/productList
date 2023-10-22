// Import necessary functions and variables
import { addProduct } from './helpers.js';

localStorage.setItem("backgroundColor", "red");
// const addTaskInput = document.querySelector(".input-area input");
const addProductBtn = document.querySelector("#create");


// Event listeners
addProductBtn.addEventListener('click', addProduct);



