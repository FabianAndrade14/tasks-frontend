import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useTask, useUpdateTask } from '../features/tasks/useTasks';
import '../styles/form.css';

export default function EditTask() {
  const { id } = useParams();
  const nav = useNavigate();
  const { data: task, isLoading, isError } = useTask(Number(id));
  const updateMutation = useUpdateTask();

  const { register, handleSubmit, reset } = useForm();

  if (task) {
    reset({
      title: task.title,
      description: task.description || '',
      priority: task.priority,
      dueDate: task.dueDate.split('T')[0], // cortar a yyyy-MM-dd
    });
  }

  const onSubmit = async (data: any) => {
    await updateMutation.mutateAsync({ id: Number(id), data });
    nav(`/tasks/${id}`);
  };

  if (isLoading) return <div className="p-4">Cargando tarea...</div>;
  if (isError || !task) return <div className="p-4">No se pudo cargar la tarea</div>;

  return (
    <div className="form-container">
      <h2>Editar tarea</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Título</label>
        <input {...register('title')} required />

        <label>Descripción</label>
        <textarea {...register('description')} />

        <label>Prioridad</label>
        <select {...register('priority')}>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
          <option value="HIGH">High</option>
        </select>

        <label>Fecha límite</label>
        <input type="date" {...register('dueDate')} required />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
