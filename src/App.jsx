import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SaveChange from "./pages/SaveChange";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/Savechange/:id" element={<SaveChange tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
};

export default App;
