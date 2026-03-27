import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { CreateTodoUseCases } from './use-cases/create-todo.use-case';
import { findAllTodosUseCases } from './use-cases/find-all-todos.use-case';
import { FindTodoByIdUseCases } from './use-cases/find-todo-by-id.use-case';
import { UpdateTodoUseCases } from './use-cases/update-todo.use-case';
import { DeleteTodoUseCases } from './use-cases/delete-todo.use-case';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCases,
    private readonly findAllTodosUseCase: findAllTodosUseCases,
    private readonly findTodoByIdUseCase: FindTodoByIdUseCases,
    private readonly updateTodoUseCase: UpdateTodoUseCases,
    private readonly deleteTodoUseCase: DeleteTodoUseCases
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.create(createTodoDto);
  }

  findAll() {
    return this.findAllTodosUseCase.findAll();
  }

  findById(id: string) {
    return this.findTodoByIdUseCase.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(updateTodoDto, id);
  }

  delete(id: string) {
    return this.deleteTodoUseCase.execute(id);
  }
}