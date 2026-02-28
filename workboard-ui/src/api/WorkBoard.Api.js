import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:44315/api/tasks"
});

// GET all tasks
export const fetchTasks = () => API.get("");

// CREATE task
export const createTask = (title) =>
  API.post("", { title });

// TOGGLE task
export const toggleTask = (id) =>
  API.put(`/${id}`);

// DELETE task
export const deleteTask = (id) =>
  API.delete(`/${id}`);