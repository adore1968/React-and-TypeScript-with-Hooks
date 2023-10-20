import { ChangeEvent } from "react";

export interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export type Tasks = Task[];

export interface AppContextType {
  task: Task;
  tasks: Tasks;
  handleTaskChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  createTask: () => void;
  getTask: (id: string) => void;
  updateTask: () => void;
  deleteTask: (id: string) => void;
}
