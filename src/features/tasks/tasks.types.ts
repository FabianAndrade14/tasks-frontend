export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Task {
  id: number;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string; // ISO
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface PaginatedTasks {
  data: Task[];
  meta: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}
