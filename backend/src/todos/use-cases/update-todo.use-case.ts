import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCases {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute( data: UpdateTodoDto, id: string) {
        try {
            this.logger.log('Updating toDo...');

            const todo = await this.updateTodoRepository.execute( data, id);

            if(!todo){
           throw new NotFoundException;
           }
            this.logger.log('ToDo updated successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
          throw new Error("Failed to update toDo");
        }
    }
}
