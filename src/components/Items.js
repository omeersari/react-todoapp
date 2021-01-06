import React, { useEffect, useState } from 'react';
import Item from './Item'

const Items = ( {todoList, setForm, setUpdate} ) => {

    const [status, setStatus ] = useState("All")
    const [filteredTodoList, setFilteredTodoList] = useState([])

    useEffect(() => {
        filterHandler()
    }, [status, todoList])

    const statusHandler = (e) => {
        setStatus(e.target.value)
        
    }

    const filterHandler = () => {
        if (status === 'All') {
            setFilteredTodoList(todoList)
        }else {
            setFilteredTodoList(todoList.filter(todo => todo.status === status))
        }
        
    }

    return (
        <div>
            <h1>TodoList</h1>
            <div className="filterOption">
                <select name="" id="" onChange={statusHandler}>
                    <option value="All">All</option>
                    <option value="Waiting">Waiting</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Completed">Completed</option>   
                </select>
            </div>
            {filteredTodoList.map(item => (
                <Item item={item} setUpdate={setUpdate}  key={item.id} setForm={setForm} />
            ))}
        </div>
    )
}

export default Items;