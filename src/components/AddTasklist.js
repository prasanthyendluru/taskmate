export const AddTasklist = ({tasklist,setTasklist,task ,setTask}) => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(task.id){
      const date=new Date();
      const updatedtasklist=tasklist.map((todo)=>
        (todo.id===task.id ? {id:task.id,name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo
    ));
      setTasklist(updatedtasklist);
      setTask({})
    }
    else{
      const date=new Date();
      const newtask={
        id: date.getTime(),
        name:e.target.task.value,
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist,newtask])
      // e.target.task.value="";
      setTask({})
    }
   
  }
  return (
    <section>
      <form onSubmit={handlesubmit} >
        <input type="text" name="task"value={task.name || ""} placeholder="Add Task" autoComplete="off" onChange={e=>setTask({...task,name:e.target.value })}/>
        <button type="submit">{task.id ? "update" : "Add"}</button>
      </form>
    </section>
  )
}
