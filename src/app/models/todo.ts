export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'baixa' | 'média' | 'alta';
  createdAt: string;
}