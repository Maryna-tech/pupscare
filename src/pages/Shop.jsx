import Cart from "../Components_redux/Cart/Cart"
import Products from "../Components_redux/ProductsComponents/Products"
import AllCategories from "../Components_redux/Filter/AllCategories"

function Shop() {
  return (
    <div >
      <div className = "store-container">
        <h2 className = "animate__animated animate__fadeInLeftBig">🦴 Dog Shop</h2>
      <div>
        <AllCategories/>
        <Cart/>
      </div>
      <div >
        <Products/>
      </div>
    </div>
    </div>
  );
}


export default Shop
