import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoItem() {
    let [todo, setTodo] = useState("");
    let [tasks, setTasks] = useState([]);

    let handleTodo = (e) => {
        setTodo(e.target.value);
    }

    // let todos = ["eat", "sleep", "code", "repeat"];

    // const list = todos.map((todo, key) => {
    //     return <li key={uuidv4()}>{todo}</li>
    // });

    let update = () => {
        setTasks((prevTask) => {
            return [...prevTask, {
                task: todo,
                id: uuidv4(),
                done: false,
            }];
        });
        // console.log(todo);
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
        <div>
            <h3>ToDo</h3>
            <div className="input">
                <TextField value={todo} onChange={handleTodo} id="outlined-basic" label="New Task" variant="outlined" />
                <Button onClick={update} variant="contained">Add</Button>
            </div>

            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <span className={task.done ? "done" : null}>{task.task}</span>
                            <Button onClick={() => deleteTask(task.id)} variant="contained">Delete</Button>
                            <Button onClick={() => markAsDone(task.id)} variant="contained">Done</Button>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}