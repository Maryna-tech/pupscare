import foodImg from "../assets/food.jpg"
import bonesImg from "../assets/bones.jpg"
import vestImg from "../assets/vest.jpg"
import leashImg from "../assets/leash.jpg"
import toyImg from "../assets/toy.jpg"
import bigBallImg from "../assets/big-ball.jpg"
import sweaterImg from "../assets/dog_sweater.jpg"
import coatImg from "../assets/raincoat.jpg"

export const products = {
    food: [
        { id: 1, name: "Dog Kibble", price: 20.99, image: bonesImg },
        { id: 2, name: "Chicken Treats", price: 15.99, image: foodImg }
    ],

    accessories: [
        { id: 3, name: "Dog Vest", price: 25.99, image: vestImg },
        { id: 4, name: "Leash", price: 18.99, image: leashImg }
    ],

    toys: [
        { id: 5, name: "Chew Toy", price: 10.99, image: toyImg },
        { id: 6, name: "Big Ball", price: 12.99, image: bigBallImg }
    ],

    clothes: [
        { id: 7, name: "Dog Sweater", price: 30.99, image: sweaterImg },
        { id: 8, name: "Coat", price: 35.99, image: coatImg }
    ]
};
