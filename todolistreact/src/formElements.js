import React, {useState} from "react"

export default function FormElements(props){

    const [taskValue, setTaskValue] = useState("");
    const [taskPriority, setTaskPriority] = useState(1);
    const [tasks, setTasks] = useState([]);

    const handleChangeTask = (event) => {
        setTaskValue(event.target.value)
    };
    const handleChangePriority = (event) => {
        setTaskPriority(event.target.value)
    };
    const addTask = (event) => {
        event.preventDefault();
        setTasks([...tasks, {title: taskValue, priority: taskPriority}]);
        setTaskValue("");
        setTaskPriority(1);
        event.target.previousElementSibling.value = "";
        event.target.previousElementSibling.previousElementSibling.previousElementSibling.value = "";

    };
    const removeTask = (event,index) => {
        event.preventDefault();
        let filteredTasks = tasks.filter((task,i)=> i!==index);
        setTasks(filteredTasks);
    };
        return (
            <>
            <form action="#">
                <input onChange={(event) => handleChangeTask(event)} className={"taskName"} type="text" placeholder={"Task Content"}/>
                <span >Priority: </span>
                <input onChange={(event) => handleChangePriority(event)} className={"taskPriority"} type="number" min={1} max={10}/>
                <button onClick={(event) => addTask(event)} className={"addTaskBtn"}>Add Task To List</button>
            </form>
            <ul>
                {tasks.map((task,index)=> <ListElement onDelete={removeTask} id={index} key={index} task={task.title} priority={task.priority} />)}
            </ul>
            </>
        )
}

function ListElement(props) {

    return (
        <li>{props.task}
        <p>Task priority: {props.priority}</p>
        <button onClick={(event) => props.onDelete(event,props.id)}>Delete Task</button>
        </li>
    )

}
