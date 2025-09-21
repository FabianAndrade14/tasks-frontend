import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { tasksApi } from './tasks.service';
import type { PaginatedTasks, Task } from './tasks.types';
import type { CreateTaskDto, UpdateTaskDto } from './tasks.payloads';


export function useTasksList(params?: Record<string, any>) {
  return useQuery<PaginatedTasks>({
    queryKey: ['tasks', params],
    queryFn: () => tasksApi.list(params),
    placeholderData: (prev) => prev, // reemplazo de keepPreviousData
  });
}


export function useTask(id?: number) {
  return useQuery<Task>({
    queryKey: ['task', id],
    queryFn: () => tasksApi.get(Number(id)),
    enabled: !!id,
  });
}


export function useCreateTask() {
  const qc = useQueryClient();
  return useMutation<Task, Error, CreateTaskDto>({
    mutationFn: tasksApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}


export function useUpdateTask() {
  const qc = useQueryClient();
  return useMutation<Task, Error, { id: number; data: UpdateTaskDto }>({
    mutationFn: ({ id, data }) => tasksApi.update(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tasks'] });
      qc.invalidateQueries({ queryKey: ['task'] });
    },
  });
}


export function useDeleteTask() {
  const qc = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (id) => tasksApi.remove(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}
