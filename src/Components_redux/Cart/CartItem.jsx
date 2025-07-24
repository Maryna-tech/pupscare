import { useDispatch } from "react-redux";
import dataProducts from "../../data_redux/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    console.log (cartItem)

    const products = dataProducts.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();
    console.log(products)

    return(<div>
        <p>{products.name}</p>
        <p>{cartItem.quantity} item(s)</p>
        <p>Price: £{products.price *cartItem.quantity}</p>

        <span className="remove-btn" onClick={()=> dispatch (removeItemFromCart ({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="busket"/> 
        </span>
        </div>
    )
}

export default CartItem;