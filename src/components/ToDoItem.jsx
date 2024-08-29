import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

import "./ToDoItem.css";
export default function ToDoItem() {
    let [todo, setTodo] = useState("");

    // let [tasks, setTasks] = useState([]);

    let [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    let handleTodo = (e) => {
        setTodo(e.target.value);
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
                task.id !== currId
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