import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/WorkBoard.Api";

// FETCH
export const fetchTasks = createAsyncThunk(
    "tasks/fetch",
    async () => {
        const response = await api.fetchTasks();
        return response.data;
    }
);

// ADD
export const addTask = createAsyncThunk(
    "tasks/add",
    async (title) => {
        const response = await api.createTask(title);
        return response.data;
    }
);

// TOGGLE
export const toggleTask = createAsyncThunk(
    "tasks/toggle",
    async (id) => {
        const response = await api.toggleTask(id);
        return response.data;
    }
);

// DELETE
export const deleteTask = createAsyncThunk(
    "tasks/delete",
    async (id) => {
        await api.deleteTask(id);
        return id;
    }
);

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(toggleTask.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    (t) => t.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (t) => t.id !== action.payload
                );
            });
    }
});

export default taskSlice.reducer;