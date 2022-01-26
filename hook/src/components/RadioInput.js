import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "HTML/CSS",
    },
    {
        id: 2,
        name: "Javascript",
    },
    {
        id: 3,
        name: "NextJs",
    }
];

const RadioInput = () => {

    const handleSubmit = () => {
        return (
            <div>
                {console.log({id: check})}
            </div>
        )
    }

    const [check, setCheck] = useState();

    return ( 
        <div>
            <h3>Welcome to my project</h3>
            {courses.map(course => {
                return (
                    <div key={course.id}>
                        <input type="radio" onClick={() => setCheck(course.id)} checked={course.id === check}></input>
                        <label>{course.name}</label>
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Submit</button>
        
        </div>
     );
}
 
export default RadioInput;