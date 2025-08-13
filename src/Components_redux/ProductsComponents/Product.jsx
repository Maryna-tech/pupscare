import { useState } from "react"
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"

const Product = ({product}) => {
    const [quantity, setQuantity] = useState (1)
    const dispatch = useDispatch ()
    return (
    <div className="product_cart" >
        <img src= {product.image} alt="product"/>
        <h3>{product.name}</h3>
        <h5>£ {product.price}</h5>

        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

        <button onClick={() =>{dispatch(addItemToCart ({product, quantity}))}}>Add to cart</button>
    </div>)
}

export default Product