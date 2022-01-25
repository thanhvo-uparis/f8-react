import { useState } from "react";

const Form = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const login = () => {
        console.log({
            name,
            email
        })
    }

    return ( 
        <div>
            <p>Welcome To Page Login</p>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <input value={email} onChange={e => setEmail(e.target.value)}></input>
            <button onClick={login}>Login</button>
        </div>
     );
}
 
export default Form;