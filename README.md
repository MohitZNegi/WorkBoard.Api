# WorkBoard - Task Management App

A simple full-stack task management app built with ASP.NET Core Web API, C#, React, and Redux Toolkit. This project demonstrates backend and frontend integration using REST APIs.

## Features

- Create tasks
- View all tasks
- Toggle task completion
- Delete tasks

## Tech Stack

**Backend:**
- ASP.NET Core Web API
- C#
- Entity Framework Core (Code First)
- SQL Server
- REST API
- Swagger for testing

**Frontend:**
- React
- Redux Toolkit
- React Redux
- Axios
- Async Thunks
- CSS

## Project Structure

**Backend:**

WorkBoard.Api/
├── Controllers/
├── Data/
├── Models/
├── Migrations/
└── Program.cs


**Frontend:**

workboard-ui/
├── src/
│ ├── api/
│ │ └── taskApi.js
│ ├── app/
│ │ └── store.js
│ ├── features/
│ │ └── tasks/
│ │ └── taskSlice.js
│ ├── components/
│ ├── App.js
│ └── App.css


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/tasks         | Get all tasks |
| POST   | /api/tasks         | Create new task |
| PUT    | /api/tasks/{id}    | Toggle task completion |
| DELETE | /api/tasks/{id}    | Delete task |

## How to Run

**Backend:**

dotnet run

Swagger available at:

https://localhost:{port}/swagger


**Frontend:**

npm install
npm start

Frontend runs at:

http://localhost:3000


## Learning Outcomes

- Frontend-backend integration
- REST API development
- Redux async state management
- Entity Framework Code First
- SQL database integration
- Clean architecture and separation of concerns
