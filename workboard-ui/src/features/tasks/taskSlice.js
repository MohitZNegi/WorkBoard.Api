import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://localhost:5001/api";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
    const response = await axios.get(API);
    return response.data;
});

export const addTask = createAsyncThunk("tasks/add", async (title) => {
    const response = await axios.post(API, { title });
    return response.data;
});

export const toggleTask = createAsyncThunk("tasks/toggle", async (id) => {
    const response = await axios.put(`${API}/${id}`);
    return response.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState: { items: [], status: "idle" },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(toggleTask.fulfilled, (state, action) => {
                const index = state.items.findIndex(t => t.id === action.payload.id);
                state.items[index] = action.payload;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.items = state.items.filter(t => t.id !== action.payload);
            });
    },
});

export default taskSlice.reducer;