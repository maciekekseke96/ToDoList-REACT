import React, { useState } from "react";

export default function FormElements(props) {
  const [taskValue, setTaskValue] = useState("");
  const [taskPriority, setTaskPriority] = useState(1);
  const [tasks, setTasks] = useState([]);

  const handleChangeTask = (event) => {
    setTaskValue(event.target.value);
  };
  const handleChangePriority = (event) => {
    setTaskPriority(event.target.value);
  };
  const addTask = (event) => {
    if (taskValue.length !== 0 && taskPriority > 0 && taskPriority < 11) {
      event.preventDefault();
      setTasks([...tasks, { title: taskValue, priority: taskPriority }]);
      setTaskValue("");
      setTaskPriority(1);
      event.target.previousElementSibling.value = "";
      event.target.previousElementSibling.previousElementSibling.previousElementSibling.value =
        "";
    } else {
      alert(
        "Please check your task's content or priority. Content should not be empty and priority should be between 1 and 10"
      );
    }
  };
  const removeTask = (event, index) => {
    event.preventDefault();
    let filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks(filteredTasks);
  };
  const sortDesc = (event) => {
    event.preventDefault();
    let sortedTask = [...tasks];
    sortedTask.sort(function (a, b) {
      return b.priority - a.priority;
    });
    setTasks(sortedTask);
  };
  return (
    <div className={"mainContent"}>
      <form className={"mainForm"} action="#">
        <h4>Task Name</h4>
        <input
          onChange={(event) => handleChangeTask(event)}
          className={"taskName"}
          type="text"
          placeholder={"Task Content"}
        />
        <h6>Priority: </h6>
        <input
          onChange={(event) => handleChangePriority(event)}
          className={"taskPriority"}
          placeholder={"(1-10)"}
          type="number"
          min={1}
          max={10}
        />
        <button onClick={(event) => addTask(event)} className={"addTaskBtn"}>
          Add Task To List
        </button>
      </form>
      <ul className={"tasksList"}>
        {tasks.map((task, index) => (
          <ListElement
            onDelete={removeTask}
            id={index}
            key={index}
            task={task.title}
            priority={task.priority}
          />
        ))}
        <button onClick={(event) => sortDesc(event)} className={"descSortBtn"}>
          Sort Descending
          <br /> by priority
        </button>
      </ul>
    </div>
  );
}

function ListElement(props) {
  return (
    <li>
      <h2>{props.task}</h2>
      <p>Task priority: {props.priority}</p>
      <button onClick={(event) => props.onDelete(event, props.id)}>
        Delete Task
      </button>
    </li>
  );
}
