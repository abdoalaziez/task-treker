import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SaveChange = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskIndex = parseInt(id);
  const [editedTask, setEditedTask] = useState(tasks[taskIndex]?.text || "");

  const handleSaveChange = () => {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], text: editedTask };
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
      navigate("/"); 
    }
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Task</h1>
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          placeholder="Edit your task"
          className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button onClick={handleSaveChange}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md" >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SaveChange;


