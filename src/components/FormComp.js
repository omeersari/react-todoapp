import React from 'react';



const FormComp = ( {form, setForm, todoList, setTodoList, update, setUpdate} ) => {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        if (!update) {
            setTodoList([
                ...todoList,
                {...form, id : Math.random() * 10}
            ])
            
        }else {
            const updatingItem = todoList.find(item => item.id === form.id)
            const index = todoList.indexOf(updatingItem)
            if (index > -1) {
                todoList.splice(index,1)
            }
            setTodoList([
                ...todoList,
                {...form, id : updatingItem.id}
                
            ])
            setUpdate(false)
        }
        setForm({
            title: "",
            description: "",
            status: "Please Select"
        })
                
    }

    return (
    <div className="formContainer">
        <form className="myForm" onSubmit={handleSubmit}>
            <label htmlFor="text">Title</label>

            <input 
                type="text" 
                required
                value={form.title} 
                name="title" 
                onChange={handleInputChange} />

            <label htmlFor="desc">Description</label>

            <textarea
                required 
                id="desc" 
                cols="30" 
                rows="10" 
                name="description" 
                value={form.description} 
                onChange={handleInputChange}>
            </textarea>

            <label htmlFor="selectStatus">Status</label>

            <select 
                id="selectStatus" 
                required
                name="status" 
                onChange={handleInputChange} 
                value={form.status}>

                <option disabled={form.status}>{form.status}</option>
                <option value="Waiting">Waiting</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Completed">Completed</option>

            </select>
            <button type="submit" className={update ? "update" : "addnew"}> {update ? "Update" : "Add New"}</button>
        </form>
    </div>
    );
}

export default FormComp;