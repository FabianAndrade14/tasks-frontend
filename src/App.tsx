import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskBoard from "./pages/TaskBoard";
import CreateTask from "./pages/CreateTask";
import TaskDetail from "./pages/TaskDetail";
import EditTask from "./pages/EditTask";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TaskBoard />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/tasks/:id/edit" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}
