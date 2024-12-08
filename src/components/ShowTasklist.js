

export const ShowTasklist = ({tasklist,setTasklist,task,setTask
  
}) => {
  // const tasks=[
  //   {id :10001,name :"Tasklist-A",time:"2:09:01 AM 9/14/2030"},
  //   {id :10002,name :"Tasklist-B",time:"2:10:00 AM 9/14/2030"},
  //   {id :10003,name :"Tasklist-C",time:"2:11:00 AM 9/14/2030"}
  //   ]
  const handeledit=(id)=>{
    const selectedtask=tasklist.find(todo=>todo.id===id);
    setTask(selectedtask) 

  }
  const handeldelete=(id)=>{
    const updatedtasklist=tasklist.filter(todo=>todo.id!==id);
    setTasklist(updatedtasklist)
  }
  return (
    <section className="showtask">
      <div className="taskhead">
        
         <span className="todo-name">Todo</span>
         <span className="length">{tasklist.length}</span> 
      
        <span className="clearall"><button onClick={()=>setTasklist([])}>Clear All</button></span>
      </div>
      <ul>
        {tasklist.map(todo=>(
          <li key={todo.id}>
            <p>
              <span className="taskname">{todo.name}</span>
             <span className="icon">
             <i onClick={()=>handeledit(todo.id)} className="bi bi-pencil-square edit"></i>
             <i onClick={()=>handeldelete(todo.id)}className="bi bi-trash delete"></i>  </span> 
            </p>
            
            <span className="time">{todo.time}</span>
          </li>
        ))}
        
      </ul>
    </section>
  )
}
