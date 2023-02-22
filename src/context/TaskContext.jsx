import {createContext} from 'react'
import {tasks as data} from '../data/tasks'
import {useState, useEffect} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState(data);

    function createTask(task) {
        //agrega un nuevo arreglo
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(()=>{
        setTasks(data)
    }, []);

    return (
            <TaskContext.Provider value={{
                tasks: tasks,
                deleteTask: deleteTask,
                createTask: createTask
            }}>
                {props.children}
            </TaskContext.Provider>
        )
}
