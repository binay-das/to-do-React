import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

// import closeImg from "../assets/close.png"

import "./ToDoItem.css";

export default function ToDoItem() {
    let [todo, setTodo] = useState("");
    let [tasks, setTasks] = useState([]);

    let handleTodo = (e) => {
        setTodo(e.target.value);
    }

    let update = () => {
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
            <h3>Tasks to do: </h3>
            <div className="input">
                <TextField value={todo} onChange={handleTodo} id="outlined-basic" label="New Task" variant="outlined" />
                <Button onClick={update} variant="contained">Add</Button>
            </div>

            <ol className='list'>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <span className={task.done ? "done" : null}>{task.task}</span>
                            <div className="img-div">
                                <img src="/assets/check.png" onClick={() => markAsDone(task.id)} alt="" />
                                <img src="/assets/close.png" onClick={() => deleteTask(task.id)} alt="" />
                            </div>
                            {/* <Button onClick={() => deleteTask(task.id)} variant="contained">Delete</Button>
                            <Button onClick={() => markAsDone(task.id)} variant="contained">Done</Button> */}
                        </li>

                    ))
                }
            </ol>
        </div>
    );
}