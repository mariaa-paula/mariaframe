import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCases {
    constructor(private readonly logger: Logger, 
        private readonly deleteTodoRepository: DeleteTodoRepository, 
        private readonly findTodoByIdRepository: FindTodoByIdRepository) {}

    async execute(id: string) {
        try{
            this.logger.log('Deleting toDo...');

     const todo = await this.findTodoByIdRepository.findById(id);

     if (!todo) {
        throw new NotFoundException('ToDo not found');
     }
     await this.deleteTodoRepository.delete(id);
     this.logger.log('Todo deleted successfully.');
          return todo;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}

    
