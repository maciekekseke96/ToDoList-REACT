import React, {useState} from "react"

export default function FormElements(props){

    const [taskValue, setTaskValue] = useState("");

    const handleChange = (event) => {
        setTaskValue(event.target.value)
    };
        return (
            <form action="#">
                <input onChange={(event) => handleChange(event)} className={"taskName"} type="text" placeholder={"Task Content"}/>
                <span >Priority: </span>
                <input className={"taskPriority"} type="number" min={1} max={10}/>
                <button className={"addTaskBtn"}>Add Task To List</button>
            </form>
        )
}