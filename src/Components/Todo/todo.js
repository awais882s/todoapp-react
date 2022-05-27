import React from 'react'
import "../Todo/style.css";
import { useState } from 'react';
import ShowTodo from './showTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'





export default function Todo() {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    const [updatedindex, setUpdatedindex] = useState(0);
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
            toast.success('Value Is Added Successfully', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {

            // toast("You Cannot Add Empty Values");
            toast.error('You Cannot Add Empty Values!', {
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
        console.log("new task", newTask, index);
        toast.error(' Successfully Deleted Items', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    //  for updating values

    const updateHandler = (task, index) => {
        console.log("need to update task", task);
        setUpdatedindex(index)
        setTask(task);
        setFlag(true);
    }
    const ctaUpdateHandler = () => {
        if (task !== "") {
            // e.preventDefault();
            let newData = task;
            // setData([...newData]);
            // console.log("new inputs>>>>>", newData);
            let updateTask = data.map((data, index) => {
                if (updatedindex === index) {
                    return newData;

                } else {
                    return data;
                }
            })
            setData([...updateTask]);
            setTask("");
            setFlag(false);
            toast.success('Value Is Updated Successfully', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            // toast("You Cannot Add Empty Values");
            toast.error('You Cannot Add Empty Values', {
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
                            <h4 className='text-center text-dark h1'>Todo App</h4>
                        </div>
                    </div>
                    <form>
                        <div className='row justify-content-center text-white p-2'>
                            <div className='form-group flex-fill mb-2 col-5'>
                                <input type="text" maxLength={10} id='todo-input' title='Enter Your Todo' onChange={onChangeHandler} value={task} placeholder='Enter Your Todo' className='form-control' />

                            </div>

                            {/* <button onClick={submitHandler} title='Add Todo' type='button' className='btn btn-primary mb-2 ml-3 col-4'>
                                Add Todo
                            </button> */}

                            {flag ? (
                                <button className='btn btn-info w-50 pentosquare' onClick={ctaUpdateHandler}>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: "30px" }} />
                                </button>
                            ) : (

                                <button onClick={submitHandler} title='Add Todo' type='button' className='btn btn-primary mb-2 ml-3 col-2 plus'>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: "25px" }} />
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
