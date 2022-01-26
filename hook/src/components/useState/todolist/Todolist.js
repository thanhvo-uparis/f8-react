import {useState} from 'react';

const Todolist = () => {
    const addItem = () => {
        setTasks(prev => [...prev, job]);
        setJob("");
        // tasks.push(task);
        // console.log(tasks)
    }

    const [job, setJob] = useState("");
    const [tasks, setTasks] = useState([]);
    return (
        <div>
           <h3>Welcome to my Todo List</h3> 
           <input onChange={e => setJob(e.target.value)} value={job} type="text"></input>
           <button onClick={addItem}>ADD</button>
           {tasks.map((task, index) => (
               <ul key={index}>
                    <li>
                        {task}
                    </li>
               </ul>
           ))}
        </div>
    );
}
 
export default Todolist;