import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [userTask, setUsertask] = useState('');
  const [errorMessage, setErrormessage] = useState('')

  const getUserTask = (e)=>{

    let newTask = e.target.value;
    setUsertask(newTask)

  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    

    if(userTask === ''){
      setErrormessage('Add a valid task!')
      return;
    }

    setTasks([...tasks, userTask])
    setErrormessage('');
    setUsertask('');
  }

  const removeTask = (index)=>{
    setTasks((tasks.filter((_, i) =>  i !== index )));
  }

  console.log(tasks);

  return (
    <div className='mainContainer'>
      <h1>Welcome to your to do app !</h1>
      <h2>Ready to start ?</h2>
      <main>
        <form onSubmit={handleSubmit} action="">
          <input value={userTask} name='taskInput' type="text" onChange={getUserTask}/>
          <button type='submit'>+</button>
        </form>
        <p>{errorMessage}</p>
        <div>
          <ul>
            {
              tasks.map((task, index)=>{
                return(
                  <li key={index}>{task}<button onClick={()=>removeTask(index)}>-</button></li>
                )
              })
            }
          </ul>
        </div>
        </main>
    </div>

  )
}

export default App
