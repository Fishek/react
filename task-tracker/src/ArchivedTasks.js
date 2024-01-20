import { useState } from "react";
import "./ArchivedTasks.css";

function ArchivedTasks({ tasks }) {
  const [moveWindow, setMoveWindow] = useState("false");

  const handleClick = () => {
    setMoveWindow(!moveWindow);
  };

  return (
    <div
      className="archivedTasks-container-wrapper" style={{right: !moveWindow ? "0px" : "-400px"}}
    >
      <div className="archivedTasks-container">
        <button onClick={handleClick} className="archivedTasks-button" >Completed</button>

        <div className="archivedTasks-window">
          <h1 style={{ color: "white" }}>Completed Tasks</h1>
          <div className="archivedTasks-window-tasks-container">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="archivedTasks-window-tasks"
                style={{display: task.isCompleted ? "flex" : "none"}}
              >
                {task.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchivedTasks;
