import Filter from "./Filter"
const AllCategories = () => {
    return ( 
    <div >
        <h3 className="filter">Looking to spoil your dog? What are you shopping for to pamper your furry best friend?</h3>
        
        <div className="button-container">
            {["FOOD", "ACCESSORIES", "TOYS", "CLOTHES", "ALL"].map(category =>(
                <Filter key={category} category = {category}/>
            ))}

        </div>
    </div>)
}

export default AllCategories
