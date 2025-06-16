const CarouselItem = ({ image }) => (
  <div className="p-2">
    <div className="shadow slide-item transition-all">
      <img
        src={image.dogImage}
        alt={`Dog ${image.id}`}
        className="object-cover h-48 w-full rounded"
        width = "420px" 
        height = "390px"
      />
    </div>
  </div>
);

export default CarouselItem
