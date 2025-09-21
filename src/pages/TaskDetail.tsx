import { useParams, useNavigate } from 'react-router-dom';
import { useTask, useDeleteTask, useUpdateTask } from '../features/tasks/useTasks';

export default function TaskDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { data: task, isLoading } = useTask(Number(id));
  const deleteMutation = useDeleteTask();
  const updateMutation = useUpdateTask();

  if (isLoading) return <div className="p-4">Cargando...</div>;
  if (!task) return <div className="p-4">Tarea no encontrada</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="mt-2">{task.description}</p>
      <div className="mt-4">
        <strong>Status:</strong> {task.status}
      </div>
      <div className="flex gap-2 mt-4">
        <button onClick={() => nav(`/tasks/${task.id}/edit`)}className="px-3 py-1 bg-blue-600 text-white rounded">Editar</button>
        <button onClick={() => updateMutation.mutate({ id: task.id, data: { status: 'COMPLETED' } })} className="px-3 py-1 bg-green-600 text-white rounded">Marcar completada</button>
        <button onClick={() => { deleteMutation.mutate(task.id, { onSuccess: () => nav('/') }); }} className="px-3 py-1 bg-red-600 text-white rounded">Eliminar</button>
      </div>
    </div>
  );
}
