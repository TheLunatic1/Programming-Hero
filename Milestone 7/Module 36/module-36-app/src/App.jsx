import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo, { ToDo2, ToDo3 } from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>

      <Todo task="Learn React" isDone={false}></Todo>
      
      <ToDo2 task="Learn Redux" isDone={true}></ToDo2>

      <ToDo3 task="Learn Recoil" isDone={false}></ToDo3>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
          <code>npm create vite@latest module-36-app -- --template react</code> <br />
          <code>cd module-36-app</code> <br />
          <code>npm install</code> <br />
          <code>npm run dev</code>
      </p>
    </>
  )
}

function Person() {
  return <h2>This is Person Component</h2>
}

export default App
