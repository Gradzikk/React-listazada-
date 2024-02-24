
import React, { useState } from "react";
import TaskList from "./TaskList"; 

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const deleteTask = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 flex-col">
        <div className="flex justify-between gap-4">
          <input
            className="bg-slate-700 text-white p-3 rounded-md"
            type="text"
            onChange={(e) => setInput(e.currentTarget.value)}
            value={input}
          />
          <button
            onClick={() => {
              setTodo([...todo, input]);
              setInput('');
            }}
            className="bg-slate-700 text-white px-7 py-2 rounded-md"
          >
            Dodaj
          </button>
        </div>
        <TaskList todo={todo} deleteTask={deleteTask} input={input} setInput={setInput} />
      </div>
    </div>
  );
};

export default App;
