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
            <div className={"mainContent"}>
            <form className={"mainForm"} action="#">
                <h4>Task Name</h4>
                <input onChange={(event) => handleChangeTask(event)} className={"taskName"} type="text" placeholder={"Task Content"}/>
                <h6 >Priority: </h6>
                <input onChange={(event) => handleChangePriority(event)} className={"taskPriority"} placeholder={"(1-10)"} type="number" min={1} max={10}/>
                <button onClick={(event) => addTask(event)} className={"addTaskBtn"}>Add Task To List</button>
            </form>
            <ul className={"tasksList"}>
                {tasks.map((task,index)=> <ListElement onDelete={removeTask} id={index} key={index} task={task.title} priority={task.priority} />)}
            </ul>
            </div>
        )
}

function ListElement(props) {

    return (
        <li>
            <h2>{props.task}</h2>
        <p>Task priority: {props.priority}</p>
        <button onClick={(event) => props.onDelete(event,props.id)}>Delete Task</button>
        </li>
    )

}
