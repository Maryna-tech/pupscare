import dataProducts from "../../data_redux/dataProducts"
import { getSelectedCategory } from "../../redux/productsSlice"
import { useSelector } from "react-redux"
import Product from "./Product"

const Products = () => {
    const selectedCategory = useSelector (getSelectedCategory);
    return (
        <div>
            {dataProducts
            .filter(product => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === product.category;
            })
            .map(product => (
                <Product key={product.id} product={product}/>
        ))}
        </div>
        )
}

export default Products;