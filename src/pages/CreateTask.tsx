import { useForm } from 'react-hook-form';
import { useCreateTask } from '../features/tasks/useTasks';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

export default function CreateTask() {
  const { register, handleSubmit } = useForm();
  const mutation = useCreateTask();
  const nav = useNavigate();

  const onSubmit = async (data: any) => {
    await mutation.mutateAsync({ ...data, status: 'PENDING' });
    nav('/');
  };

  return (
    <div className="form-container">
      <h2>Crear nueva tarea</h2>
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

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
