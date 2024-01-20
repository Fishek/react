import { useState } from "react";
import "./App.css";
import ArchivedTasks from "./ArchivedTasks";
import "./ArchivedTasks.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [editText, setEditText] = useState("");

  const handleAddText = (event) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        text: inputText,
        isCompleted: false,
        showEdit: false,
        editText: "",
      },
    ]);
    setInputText("");
  };

  const handleCheckCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, showEdit: !task.showEdit } : task
      )
    );
  };

  const handleEditText = (taskId, e) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, editText: e.target.value } : task
      )
    );
  };

  const handleSubmitEdit = (taskId, e) => {
    e.preventDefault();
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, text: task.editText, showEdit: false }
          : task
      )
    );
  };

  //Code below shows how to remove the checked task. Also, instead of the below, you can use style for li: { display: task.isCompleted ? 'none' : 'inherit'}
  //const handleCheckCompleted = (taskId) => {
  //setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  //};

  return (
    /* TASK INPUT */

    <div className="App">
      <div className="wrapper">
        <div className="input-input">
          <div className="input-header">
            {" "}
            <h1>Task Tracker</h1>{" "}
          </div>
          <form className="input-form" onSubmit={handleAddText}>
            <input
              className="input-task"
              type="text"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
            <button
              type="button"
              className="input-task-button"
              onClick={handleAddText}
            >
              Add
            </button>
          </form>
        </div>
        {/* TASK CONTAINER*/}

        <div className="tasks-container">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="tasks-task"
              style={{
                backgroundColor: task.isCompleted ? "#2EC0AC" : "#2E8BC0",
                
              }}
            >
              {/* TEXT */}
              {task.text}

              <form
                className="tasks-input"
                onSubmit={(e) => handleSubmitEdit(task.id, e)}
              >
                <input
                  type="text"
                  value={task.editText}
                  onChange={(e) => handleEditText(task.id, e)}
                  style={{
                    display: !task.showEdit ? "none" : "flex",
                    marginLeft: "20px",
                  }}
                />
              </form>
              <div
                className="task-buttons-wrapper"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  position: "absolute",
                  right: "20px",
                }}
              >
                {/* EDIT INPUT */}
                {/* CHECKBOX INPUT */}
                <input
                  className="checkbox-input"
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => handleCheckCompleted(task.id)}
                />
                {/* BUTTONS */}
                <button
                  className="task-button button1"
                  style={{ marginLeft: "20px" }}
                  onClick={() => handleRemoveTask(task.id)}
                >
                  X
                </button>{" "}
                {/* DELETE BUTTON */}
                <button
                  className="task-button button2"
                  style={{ marginLeft: "20px" }}
                  onClick={() => handleEditTask(task.id)}
                >
                  Edit
                </button>{" "}
                {/* EDIT BUTTON */}
              </div>
            </div>
          ))}
        </div>
      </div>
       <ArchivedTasks tasks={tasks} />
    </div>
  );
}

export default App;
