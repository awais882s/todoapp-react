import React from 'react'
import "../Todo/style.css";
import { useState } from 'react';
import ShowTodo from './showTodo';

export default function Todo() {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    const onChangeHandler = (e) => {
        setTask(e.target.value);
        console.log(task);
    }
    const submitHandler = (e) => {
        alert("Ccccccccccccc")
        e.preventDefault();
        const newData = task;
        setData([...data, newData]);
        console.log("new inputs>>>>>>>>>>>>>>>>", newData);
        setTask("");
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col text-white">
                    <div className='row bg-primary text-white'>
                        <div className='col p-2'>
                            <h4 className='text-center'>Todo App</h4>
                        </div>
                    </div>
                    <form>
                        <div className='row justify-content-center text-white p-2'>
                            <div className='form-group flex-fill mb-2 col-5'>
                                <input type="text" id='todo-input' title='Enter Your Todo' onChange={onChangeHandler} value={task} placeholder='Enter Your Todo' className='form-control' />

                            </div>
                            <button onClick={submitHandler} title='Add Todo' type='button' className='btn btn-primary mb-2 ml-3 col-4'>
                                Add Todo
                            </button>

                        </div>
                    </form>
                    {
                        data.map((value, index) => {
                            return (
                                <ShowTodo
                                    key={index}
                                    id={index}
                                    newValue={value}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
