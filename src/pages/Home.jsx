import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Box } from "lucide-react";
import moment from "moment";

  const Home = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [showBoxIcon, setShowBoxIcon] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, [setTasks]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        text: task,
        date: moment().format("MMMM Do YYYY, h:mm a"),
      };
      setTasks([...tasks, newTask]);
      setTask("");
      setShowBoxIcon(false);
    }
  };
  const handleDeleteTask = (index) => {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
  };
  const handleEditTask = (index) => {
  navigate(`/Savechange/${index}`); 
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Tracker</h1>
      <div className="flex w-full max-w-md space-x-2 mb-4">
        <input  type="text"  value={task}  onChange={(e) => setTask(e.target.value)}
          placeholder="Write a task"
          className="flex-1 border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        <button  onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md" >
          + Add
        </button>
      </div>
      {tasks.length === 0 && showBoxIcon && (
        <div className="flex flex-col items-center mt-4">
          <Box size={40} className="text-black" />
          <span className="text-gray-500 mt-2">No tasks yet!</span>
        </div>
      )}
      <ul className="w-full max-w-md space-y-2 mt-4">
        {tasks.map((task, index) => (
          <li  key={index}
            className="flex justify-between items-center border rounded-md px-4 py-2 bg-white shadow-sm" >
            <div>
              <span className="text-gray-700 font-medium">{task.text}</span>
              <br />
              <span className="text-gray-500 text-sm">Added on: {task.date}</span>
            </div>
            <div className="flex space-x-2">
              <button  onClick={() => handleEditTask(index)}
                className="text-blue-500 hover:text-blue-600" >
                <FaEdit size={18} />
              </button>
              <button onClick={() => handleDeleteTask(index)} className="text-red-500 hover:text-red-600">
                <FaTrash size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
























