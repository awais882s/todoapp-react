import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'



export default function ShowTodo({ task, index, deleteHandler, updateHandler }) {
    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    <div className="col-1">
                        <h5>{index}</h5>
                    </div>
                    <div className="col-3">
                        <h5>{task}</h5>

                    </div>
                    {/* <div className="d-flex mb-2"> */}
                    <div className="col-3 offset-md-1">
                        <button title="Delete" className="btn btn-danger delete " onClick={() => deleteHandler(index)} >
                            <FontAwesomeIcon icon={faTrash} style={{fontSize:"25px", borderRadius:"25px"}}  />
                        </button>

                    </div>
                    <div className="col-3 ">
                        <button title="Update" className="btn btn-success update" onClick={() => updateHandler(task, index)} >
                            <FontAwesomeIcon icon={faPenToSquare} style={{fontSize:"25px",borderRadius:"25px"}} />
                        </button>

                    </div>
                    {/* </div> */}
                    {/* <hr /> */}
                </div>
            </div>
        </div>
    )
}
