import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { BiPen, BiPencil, BiTrash } from "react-icons/all";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <div className="flex mt-4 float-right">
        {/* Borrar */}
        <button className="bg-red-500 py-1 hover:bg-red-400 flex items-center px-3 gap-2 rounded-l-xl"
          onClick={() => {
            deleteTask(task.id);
          }}>
          Eliminar <BiTrash />
        </button>
        
        {/* Editar */}
        <button className="bg-sky-400 py-1 hover:bg-sky-300 hover:text-gray-600 flex items-center px-3 gap-2 rounded-r-xl">
          Editar <BiPencil />
        </button>
      </div>
    </div>
  );
}
