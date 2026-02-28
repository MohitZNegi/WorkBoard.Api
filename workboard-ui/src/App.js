import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./features/tasks/taskSlice";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Mini WorkBoard</h2>

            <TaskInput />
            <TaskList />
        </div>
    );
}

export default App;