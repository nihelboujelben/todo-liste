import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [todos, setTodos]=useState([])
  const [value, setValue]=useState("")


  const handleChange =(e)=> {
    setValue(e.target.value)
  };

  const handleRemove = id => {
    const todo = [...todos];
    todo.splice(id, 1);
    setTodos(todo);
    console.log(todo)
  };


  const handleEdit=id=>{
let promp=prompt('edit')
setTodos(todos.map((e)=>((e.id==id) ?{id:id, value:promp} : e )))
  
console.log(handleEdit)
  }
  
  
  
  

  const handleAdd = () => { return (setTodos([...todos,{todo:value, id:todos.length}]));
  
  };

  console.log(value)
const handleSubmit = (event) => {
  event.preventDefault();
return (
  
handleAdd(),
setValue("") )
}

  
   
  return (
    <div className="App">

<form   class="form-inline" onSubmit={handleSubmit} style={{marginLeft:"40%", marginRight:"-50%"}}>
      <input  type="text" class="form-control" placeholder="Task" onChange={handleChange} value={value}/>
      <button type="submit"  class="btn btn-primary" > Add Task </button>
      
    </form>
  

<ul className="list-group">{todos.map((e) => (
 <li key={e.id}>
 <li>{e.todo}</li>
 <li>{e.value}</li>
 <button type="submit" class="btn btn-danger"  onClick={()=>handleRemove(e.id)}>Delete</button>
 <button type="submit" class="btn btn-success"  onClick={()=>handleEdit(e.id)}>Edit</button>
</li>

))}




</ul>


 </div>)

};

export default App;