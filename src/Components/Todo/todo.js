import React from 'react'
import "../Todo/style.css";

export default function todo() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col text-white">
                    <div className='row bg-primary text-white'>
                        <div className='col p-2'>
                            <h4 className='text-center'>Todo App</h4>
                        </div>
                    </div>
                    <form action="">
                        <div className='row justify-content-center text-white p-2'>
                            <div className='form-group flex-fill mb-2 col-9'>
                                <input type="text" id='todo-input' title='Enter Your Todo' placeholder='Enter Your Todo' className='form-control' />

                            </div>
                            <button title='Add Todo' type='button' className='btn btn-primary mb-2 ml-3 col-4'>
                                Add Todo
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
