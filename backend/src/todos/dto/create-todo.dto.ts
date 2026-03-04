export class CreateTodoDto {
   title: string;
  description: string;
  completed: boolean;
  priority: TodoPriority;
  dueAt: Date;
  completeAt: Date;
  userId: String;
 createdAt: Date;
 updatedAt: Date;
}

enum TodoPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}
