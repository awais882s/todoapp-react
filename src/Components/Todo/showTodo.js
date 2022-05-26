import React from "react";

export default function ShowTodo({ task }) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h6 className="text-black">{task}</h6>

                    </div>
                    <div className="col-6">
                        <button>
                            X
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
