import bonesImg from "../assets/bones.jpg"
import foodImg from "../assets/food.jpg"
import vestImg from "../assets/vest.jpg"
import leashImg from "../assets/leash.jpg"
import toyImg from "../assets/toy.jpg"
import bigBallImg from "../assets/big-ball.jpg"
import sweaterImg from "../assets/dog_sweater.jpg"
import coatImg from "../assets/raincoat.jpg"

const dataProducts = [
        { 
            id: 1,
            price: 21,
            image: bonesImg, 
            name: "Dog Kibble", 
            category: "FOOD"
        },

        { 
            id: 2, 
            price: 17,
            image: foodImg,
            name: "Chicken Treats",
            category: "FOOD"
        },
        
        { 
            id: 3, 
            price: 26, 
            image: vestImg, 
            name: "Dog Vest", 
            category: "ACCESSORIES"
        },

        { 
            id: 4, 
            price: 20,
            image: leashImg,
            name: "Leash", 
            category:"ACCESSORIES"
        },

        { 
            id: 5,
            price: 15,
            image: toyImg, 
            name: "Chew Toy",
            category:"TOYS"
        },

        { 
            id: 6, 
            price: 13, 
            image: bigBallImg,
            name: "Big Ball", 
            category:"TOYS" 
        },

        { 
            id: 7,
            price: 32,
            image: sweaterImg, 
            name: "Dog Sweater",
            category:"CLOTHES"
        },

        { 
            id: 8, 
            price: 36, 
            image: coatImg, 
            name: "Coat", 
            category:"CLOTHES"
        }
    ]

    export default dataProducts;


