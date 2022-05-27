import React from 'react'
import "../Todo/style.css";
import { useState } from 'react';
import ShowTodo from './showTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Todo() {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    const [updateindex, setUpdateindex] = useState("");
    const [flag, setFlag] = useState(false);
    const onChangeHandler = (e) => {
        setTask(e.target.value);
        // console.log(task);
    }
    const submitHandler = (e) => {
        if (task !== "") {
            e.preventDefault();
            const newData = task;
            setData([...data, newData]);
            // console.log("new inputs>>>>>", newData);
            setTask("");

        }
        else {

            // toast("You Cannot Add Empty Values");
            toast.error('You Cannot Add Empty', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }
    // for delete item from the task
    const deleteHandler = (index) => {
        // console.log("you have clicked the delete button", index);
        let newTask = data.filter((task, i) => {
            if (i !== index) {
                return task;

            }
        })
        setData([...newTask])
        console.log("new task", newTask,index);

    }
    //  for updating values

    const updateHandler = (task, index) => {
        console.log("Need to update the task", task);
        setUpdateindex(index);
        setTask(task.task);
        setFlag(true);

    }
    const ctaUpdateHandler = (e) => {

        if (task !== "") {
            let task = task;
            console.log("need to update the task", task);
            let updatedTask = task.map((task, index) => {
                if (updateindex === index) {
                    return task;
                }
                else {
                    return task;
                }

            });
            setData([...updatedTask]);
            setTask("");
            setFlag(false);



        } else {
            toast.error('You Cannot Update Add Empty', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col text-dark">
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

                            {/* <button onClick={submitHandler} title='Add Todo' type='button' className='btn btn-primary mb-2 ml-3 col-4'>
                                Add Todo
                            </button> */}

                            {flag ? (
                                <button className='btn btn-danger' onClick={ctaUpdateHandler}>Update</button>
                            ) : (

                                <button onClick={submitHandler} title='Add Todo' type='button' className='btn btn-primary mb-2 ml-3 col-4'>
                                    Add Todo
                                </button>
                            )}

                            <div>
                                <div onClick={submitHandler}></div>
                                <ToastContainer />
                            </div>

                        </div>
                    </form>
                    {
                        data.map((value, index) => {
                            return (
                                <ShowTodo
                                    index={index}
                                    task={value}
                                    deleteHandler={deleteHandler}
                                    updateHandler={updateHandler}
                                />
                            )
                        })
                    }
                </div>
            </div >
        </div >
    )
}
