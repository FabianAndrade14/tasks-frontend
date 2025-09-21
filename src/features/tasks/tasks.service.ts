import api from '../../api/axios';
import type { CreateTaskDto, UpdateTaskDto } from './tasks.payloads';
import type { PaginatedTasks, Task } from './tasks.types';

const BASE = '/tasks';

export const tasksApi = {
  create: (payload: CreateTaskDto) => api.post<Task>(BASE, payload).then(r => r.data),
  list: (params?: Record<string, any>) => api.get<PaginatedTasks>(BASE, { params }).then(r => r.data),
  get: (id: number) => api.get<Task>(`${BASE}/${id}`).then(r => r.data),
  update: (id: number, payload: UpdateTaskDto) => api.put<Task>(`${BASE}/${id}`, payload).then(r => r.data),
  changeStatus: (id: number, status: { status: string }) => api.patch<Task>(`${BASE}/${id}/status`, status).then(r => r.data),
  remove: (id: number) => api.delete(`${BASE}/${id}`).then(r => r.data),
};
