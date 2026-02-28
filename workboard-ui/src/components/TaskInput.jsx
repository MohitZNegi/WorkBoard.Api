import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function TaskInput() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if (!title.trim()) return;

        dispatch(addTask(title));
        setTitle("");
    };

    return (
        <div className="task-input">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
            />
            <button className="add-btn" onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}

export default TaskInput;