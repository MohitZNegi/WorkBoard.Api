import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/tasks/taskSlice";

function TaskItem({ task }) {
    const dispatch = useDispatch();

    return (
        <li>
            <span
                style={{
                    textDecoration: task.isCompleted ? "line-through" : "none",
                    cursor: "pointer"
                }}
                onClick={() => dispatch(toggleTask(task.id))}
            >
                {task.title}
            </span>

            <button onClick={() => dispatch(deleteTask(task.id))}>
                ❌
            </button>
        </li>
    );
}

export default TaskItem;