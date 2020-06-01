import React, {useState} from "react"

export default function FormElements(props){

    const [taskValue, setTaskValue] = useState("");
    const [taskPriority, setTaskPriority] = useState(1);

    const handleChangeTask = (event) => {
        setTaskValue(event.target.value)
    };
    const handleChangePriority = (event) => {
        setTaskPriority(event.target.value)
    };
        return (
            <form action="#">
                <input onChange={(event) => handleChangeTask(event)} className={"taskName"} type="text" placeholder={"Task Content"}/>
                <span >Priority: </span>
                <input onChange={(event) => handleChangePriority(event)} className={"taskPriority"} type="number" min={1} max={10}/>
                <button className={"addTaskBtn"}>Add Task To List</button>
            </form>
        )
}