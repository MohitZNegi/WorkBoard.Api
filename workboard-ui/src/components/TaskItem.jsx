import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/tasks/taskSlice";

function TaskItem({ task }) {
    const dispatch = useDispatch();

    return (
        <li>
            <div>
                <span
                    className={`task-title ${task.isCompleted ? "completed" : ""}`}
                    onClick={() => dispatch(toggleTask(task.id))}
                >
                    {task.title}
                </span>
            </div>

            <div>
                <span
                    className={`status-badge ${task.isCompleted ? "done" : "pending"
                        }`}
                >
                    {task.isCompleted ? "Completed" : "Pending"}
                </span>

                <button
                    className="delete-btn"
                    onClick={() => dispatch(deleteTask(task.id))}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskItem;