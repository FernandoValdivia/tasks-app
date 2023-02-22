import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className='bg-task min-h-screen p-10'>
      <div className='container mx-auto'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
