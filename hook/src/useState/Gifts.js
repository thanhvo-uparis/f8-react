import { useState } from 'react';

const cadeau = [
    "IPhone X10",
    "Tablette Samsung",
    "Clavier XD"
];

const Gifts = () => {
    const [gift, setGift] = useState();

    const random = () => {
        const math = Math.floor(Math.random() * 3);
        setGift(cadeau[math])
    }
    return ( 
        <div>
            <p>Welcome to my project</p>
            <h3>{gift || "No reward yet"}</h3>
            <button onClick={() => random()}>Get Reward</button>
        </div>
     );
}
 
export default Gifts;

