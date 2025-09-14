export default function Todo({ task, isDone }) {
  return (
    <li style={{ textDecoration: isDone ? 'line-through' : 'none' }}> Task: {task } </li>
  )
}



export function ToDo2({ task, isDone }) {
  if(isDone){
    return <li style={{textDecoration: 'line-through'}}> Task: {task } </li>
  }
  return <li> Task: {task } </li>;
}

export function ToDo3({ task, isDone }) {
  return isDone ? <li style={{textDecoration: 'line-through'}}> Task: {task } </li> : <li> Task: {task } </li>;
}