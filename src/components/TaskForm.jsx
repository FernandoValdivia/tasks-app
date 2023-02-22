import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { BiSave } from 'react-icons/all';

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      createTask({ title, description });
    } else {
      alert('Introduce algún valor al arreglo p, no te creas vivo')
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4 rounded-xl" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          required
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
          value={description}
        ></textarea>
        <button className="bg-task-1 text-white w-full flex py-2 gap-3 items-center justify-center">
          Guardar tarea
          <BiSave />
        </button>
      </form>
    </div>
  );
}
