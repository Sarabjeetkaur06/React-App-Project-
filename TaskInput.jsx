import { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </>
  );
}

export default TaskInput;
