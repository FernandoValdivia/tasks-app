import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TaskList() {

    const{tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl text-center font-bold bg-list'>No hay tareas aún</h1>
    }

    return (
        <div className='grid lg:grid-cols-4 gap-2 sm:grid-cols-2'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
}
