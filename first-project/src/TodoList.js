import { useState } from "react";
import "./TodoList.css";

function TodoList() {
    const tasks = [
        "Task 1",
        "Task 2",
        "Task 3"
    ];

    const [list, setList] = useState(tasks);
    const [taskName, setTaskName] = useState("");

    function addTask() {
        if (taskName == "") {
            alert("You must enter a task name");
        } else {
            // prevList is the current state of the list
            // ...prevList makes a copy of the current list
            // taskName is our task we created and it will add that to the current state
            setList(prevList => [...prevList, taskName]);
            setTaskName("");
        }
    }

    function deleteTask(taskIndex) {
        // Filters out the current list to only items that don't equal the index of the item they clicked on
        setList(prevList => prevList.filter((item, index) => index != taskIndex));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <img src="/logo192.png" />
            <ul>
                {/* Loops through the list state and makes an li for each one */}
                {list.map((item, index) => (
                    <li>
                        {item}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input onChange={e => setTaskName(e.target.value)} value={taskName} />
            <button onClick={addTask}>Add task</button>
        </div>
    )
}

export default TodoList;