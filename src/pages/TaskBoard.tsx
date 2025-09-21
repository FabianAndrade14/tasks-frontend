import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTasksList } from "../features/tasks/useTasks";
import type { Task } from "../features/tasks/tasks.types";
import { useNavigate } from "react-router-dom";
import '../styles/card.css';


const columns = [
  { id: "PENDING", title: "Inbox 📥", color: "bg-purple-100 text-purple-900" },
  { id: "IN_PROGRESS", title: "In Progress ⏩", color: "bg-blue-100 text-blue-900" },
  { id: "COMPLETED", title: "Completed ✅", color: "bg-green-100 text-green-900" },
];

export default function TaskBoard() {
  const { data, isLoading } = useTasksList();
  const navigate = useNavigate();
  if (isLoading) return <div className="p-6">Cargando...</div>;

  const tasksByStatus: Record<string, Task[]> = {
    PENDING: [],
    IN_PROGRESS: [],
    COMPLETED: [],
  };

  data?.data.forEach((task) => {
    tasksByStatus[task.status]?.push(task);
  });

  return (
    <div style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", backgroundColor: "#f8f8f8", minHeight: "100vh"}}>
      <DragDropContext
        onDragEnd={(result) => {
          console.log("drag end", result);
        }}
      >
        {columns.map((col) => (
          <Droppable droppableId={col.id} key={col.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`w-72 ${col.color} rounded-xl p-4 shadow flex flex-col`}
                style={{
                  width: "18rem",
                  backgroundColor: col.color || "#e2e4e6",
                  borderRadius: "12px",
                  padding: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 
                  className="font-semibold mb-3"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    marginBottom: "0.75rem",
                    color: "#333",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingBottom: "0.5rem",
                  }}
                >{col.title}</h2>

                <div className="flex-1 space-y-3">
                  {tasksByStatus[col.id]?.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(prov) => (
                        <div
                          ref={prov.innerRef}
                          {...prov.draggableProps}
                          {...prov.dragHandleProps}
                          className="bg-white p-3 rounded-lg shadow hover:shadow-md cursor-pointer"
                          style={{
                            backgroundColor: "#fff",
                            padding: "1rem",
                            borderRadius: "8px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            marginBottom: "1rem",
                          }}
                        >
                          <p className="font-medium" style={{fontWeight: "bold", color: "#111"}}>{task.title}</p>
                          {task.description && (
                            <p className="text-sm text-gray-500">
                              {task.description}
                            </p>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>

                <button onClick={() => navigate("/create")} className="mt-4 text-sm hover:underline">
                  + Add a card
                </button>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
