import React from 'react'

export const Task = () => {
    return (
        <div className=" text-center">
            <div className="container p-4">
                <div className="  row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body ">

                                <h1 className="h4">Add Task</h1>

                                <form id="task-form">
                                    <div className="form-group py-3">
                                        <input type="text" id="task-title" className="form-control"  placeholder="Task Title"
                                            autofocus />
                                    </div>
                                    <div className="form-group">
                                        <textarea id="task-description" rows="3" className="form-control" placeholder="Task Description"></textarea>
                                    </div>

                                    <button className="btn btn-primary" id="btn-task-form" >
                                        Save
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" id="tasks-container"></div>
                </div>
            </div>
        </div>
    )
}
