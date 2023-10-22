const products = getProductsFromStorage();
function getProductsFromStorage() {
    const productsAsJSON = localStorage.getItem("storedProducts");
    if (productsAsJSON == null)
        return [];
    return JSON.parse(productsAsJSON);
  }
  function setToStorage() {
    localStorage.setItem("storedProducts", JSON.stringify(products));
  }
  
  export{getProductsFromStorage,setToStorage}