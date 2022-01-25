import { useState } from "react";

const Input = () => {
    const [info, setInfo] = useState("");
    return ( 
        <div>
            <p>Welcome to my project</p>
            <input value={info} onChange={e => setInfo(e.target.value)}></input>
            <button onClick={() => setInfo("Nguyen van BBB")}>Submit</button>
        </div>
     );
}
 
export default Input;