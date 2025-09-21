export interface CreateTaskDto {
  title: string;
  description?: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  dueDate: string; // ISO string
}

export type UpdateTaskDto = Partial<CreateTaskDto>;