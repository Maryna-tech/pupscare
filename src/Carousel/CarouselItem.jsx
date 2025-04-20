const CarouselItem =({image})=>(
    <div>
        <div className="shadow slide-item transition-all">
            <img src={image} id= "slide-image"className="object-cover h-48 rounded" alt="dog" width="420px" height="390px"/>
        </div>
    </div>
)

export default CarouselItem
