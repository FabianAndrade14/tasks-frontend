import { useTasksList } from '../features/tasks/useTasks';
import TaskCard from '../features/tasks/components/TaskCard';
import '../styles/card.css';

export default function Home() {
  const { data, isLoading, isError } = useTasksList();

  if (isLoading) return <div className="p-4">Cargando...</div>;
  if (isError) return <div className="p-4">Error cargando tareas</div>;

  const columns = {
    PENDING: data?.data.filter(t => t.status === 'PENDING') ?? [],
    IN_PROGRESS: data?.data.filter(t => t.status === 'IN_PROGRESS') ?? [],
    COMPLETED: data?.data.filter(t => t.status === 'COMPLETED') ?? [],
  };

  return (
    <div className="board">
      <div className="column">
        <h3>Pendientes</h3>
        {columns.PENDING.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
      <div className="column">
        <h3>En progreso</h3>
        {columns.IN_PROGRESS.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
      <div className="column">
        <h3>Completadas</h3>
        {columns.COMPLETED.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
}
