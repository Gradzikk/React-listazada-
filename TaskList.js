import React from 'react';

const TaskList = ({ todo, deleteTask, input, setInput }) => {
  return (
    <div className="bg-red-400 rounded-md text-white w-full p-3 mt-5">
      <ul>
        {todo.map((task, index) => (
          <li key={index}>
            {index +  1}. {task}
            <button
              onClick={() => deleteTask(index)}
              className="bg-slate-700 text-white px-7 py-2 rounded-md"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
