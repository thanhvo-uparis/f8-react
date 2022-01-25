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

const checked = () => {
    return (
        <div>
            {console.log("test")}
        </div>
    )
}

const RadioInput = () => {
    const [name, setName] = useState();
    return ( 
        <div>
            <h3>Welcome to my project</h3>
            {courses.map(course => {
                return (
                    <div>
                        <input type="radio" onClick={checked}></input>
                        <label>{course.name}</label>
                   </div>
                )
            })}
        </div>
     );
}
 
export default RadioInput;