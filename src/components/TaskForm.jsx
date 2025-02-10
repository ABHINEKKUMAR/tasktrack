import React from 'react'
import "./TaskForm.css"

const TaskForm= () => {
    return (
        <header className='app_header'>Header Section
        <form>
           <input type ="text" 
           className="task_input"
           placeholder='Enter your task'
           />
           <div className =" task_form_bottom_line">
            <div>
                <Tag tagName='HTML' />
                <Tag tagName='CSS' />
                <Tag tagName='JavaScript' />
                <Tag tagName='React' />
            </div>

            <select className ='task_status'>
                <option value ="todo">To Do</option>
                <option value ="todo">Doing</option>
                <option value ="todo">Done</option>
            </select>
            <button type="submit" 
            className='task_submit'>
                + Add Task
            </button>
           </div>
        </form>
        </header>
    )
}

export default TaskForm