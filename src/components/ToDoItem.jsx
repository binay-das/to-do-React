import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';


// import closeImg from "../assets/close.png"

import "./ToDoItem.css";
let lightUrl = "../assets/lightTheme.png";
let darkUrl = "../assets/darkTheme.png";

export default function ToDoItem() {
    let [todo, setTodo] = useState("");
    let [tasks, setTasks] = useState([]);

    let handleTodo = (e) => {
        setTodo(e.target.value);
    }

    let [theme, setTheme] = useState(false);
    let themeToggle = () => {
        setTheme(!theme);
        console.log(theme);
    }

    let update = () => {
        if (todo.trim() === "") {
            alert("Task cannot be empty");
            return;
        }
        setTasks((prevTask) => {
            return [...prevTask, {
                task: todo,
                id: uuidv4(),
                done: false,
            }];
        });

        setTodo("");
    }

    let deleteTask = (currId) => {
        setTasks(
            tasks.filter((task) =>
                task.id != currId
            ));
    }

    let markAsDone = (currId) => {
        setTasks(
            tasks.map((task) => {
                if (task.id == currId) {
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task;
            })
        )
    }

    return (
        <div className='container'>
            {/* <div className="mode">
                {theme ? <img onClick={themeToggle} src={lightUrl} alt="light_mode" /> : <img onClick={themeToggle} src={darkUrl} alt="dark_mode" />}
                
            </div> */}
            <h1>Tasks to do: </h1>
            <div className="input">
                <TextField sx={{width: 300}} value={todo} onChange={handleTodo} id="outlined-basic" label="New Task" variant="outlined" />
                <Button onClick={update} variant="contained">Add</Button>
            </div>

            <ul className='list'>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <span id='text-field' className={task.done ? "done" : null}>{task.task}</span>
                            {/* <div className="img-div">
                                <img src="/assets/check.png" onClick={() => markAsDone(task.id)} alt="" />
                                <img src="/assets/close.png" onClick={() => deleteTask(task.id)} alt="" />
                            </div> */}

                            <div className="btn-div">
                                <Button onClick={() => markAsDone(task.id)} variant="contained">Done</Button>
                                <Button onClick={() => deleteTask(task.id)} variant="contained">Delete</Button>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}