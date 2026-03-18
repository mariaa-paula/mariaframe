import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databases";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoRepository {
    create(data: CreateTodoDto) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}

        async executeSchedule(data: CreateTodoDto) {
            return await this.prisma.todo.create({ data });
        }
    }
