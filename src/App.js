import { useState, useEffect } from 'react';
import './App.scss';
import FormComp from './components/FormComp'
import Items from './components/Items'

function App() {
  const [update, setUpdate] = useState(false)
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Please Select"
  });
  const [todoList, setTodoList] = useState([])
  //const [status, setStatus ] = useState("All")
  //const [filteredTodoList, setFilteredTodoList] = useState([])

  /*
  useEffect(() => {
    filterHandler();
  }, [form, status])

  const filterHandler = () => {
    switch(status) {
      case 'Waiting':
        setFilteredTodoList(todoList.filter(todo => todo.status === 'Waiting'))
        break;
      case 'In-Progress':
        setFilteredTodoList(todoList.filter(todo => todo.status === 'In-Progress'))
        break;
      case 'Completed':
        setFilteredTodoList(todoList.filter(todo => todo.status === 'Completed'))
        break;
      default:
        setFilteredTodoList(todoList)
        break;
    }
  }
  */
  return (
    <div className="App">
      <h1>TodoApp in React</h1>
      <FormComp update={update} form={form} setForm={setForm} todoList={todoList} setTodoList={setTodoList} setUpdate={setUpdate} />  
      <Items todoList = {todoList} setForm={setForm} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
