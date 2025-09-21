import type { Task } from '../tasks.types';
import { Link } from 'react-router-dom';
import '../../../styles/card.css';

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="task-card">
      <Link to={`/tasks/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      {task.description && <p>{task.description}</p>}
      <div className="task-meta">
        <span>{task.status}</span>
        <span>{task.priority}</span>
      </div>
    </div>
  );
}