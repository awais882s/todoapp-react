import React from "react";

export default function ShowTodo({ task, index, deleteHandler }) {
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
                    <div className="col-3">
                        <button className="btn btn-danger " onClick={() => deleteHandler(index)} >
                            Delete
                        </button>

                    </div>
                    <div className="col-3">
                        <button className="btn btn-success" >
                            Update
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
