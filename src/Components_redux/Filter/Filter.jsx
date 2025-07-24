import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from "../../redux/productsSlice"

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector (getSelectedCategory);

    return ( 
    <div className = "button-container">
    <button onClick = {() =>{dispatch(filterCategory (category))}} className = {selectedCategory === category? "categoryButtonSelected categoryButton" : "categoryButton"}>{category}</button>
    </div>)
}

export default Filter