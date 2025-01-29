import { useState } from 'react';
import './List.css';

function List() {
    const listItems = [
        {
            id: 1,
            taskName: "This is the first task",
            completed: false,
        },
        {
            id: 2,
            taskName: "Here's the second one",
            completed: false,
        },
        {
            id: 3,
            taskName: "Three",
            completed: true,
        }
    ];

    // listState is the name of the state
    // setListState is the name of the function we're going to run when we update the state
    // useState() is creating the state with an optional default value
    const [listState, setListState] = useState(listItems);
    const [taskInput, setTaskInput] = useState("");

    console.log(listState);

    function addTask() {
        const newTask = {
            id: listState[listState.length - 1].id + 1,
            taskName: taskInput,
            completed: false,
        }

        // This is taking our current todos, and adding the newTask to the end of it
        setListState((todos) => [...todos, newTask]);
        setTaskInput("");
    }

    return (
        <>
            <h1>
                <input />
            </h1>
            <ul>
                {listState.map((item) => (
                    <li key={item.id}>
                        <input 
                            type='checkbox'
                            checked={item.completed}
                            onChange={() => {
                                // loops through the listState
                                const updatedList = listState.map((task) => 
                                    // checks to see if the current task in the loop is the one they clicked on
                                    // if it is, change its completed status to the opposite of what it currently is
                                    // otherwise, don't change it
                                    task.id === item.id ? { ...task, completed: !task.completed } : task
                                );
                                // finally, update our state with the new list
                                setListState(updatedList);
                            }}
                        />
                        {item.taskName}
                    </li>
                ))}
            </ul>
            <input
                placeholder='Enter task name here'
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyDown={(e) => e.key == "Enter" ? addTask() : undefined}
             />
            <button onClick={addTask}>Add Task</button>
        </>
    )
}

export default List;