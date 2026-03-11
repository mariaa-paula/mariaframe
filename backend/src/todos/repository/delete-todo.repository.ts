import { PrismaService } from "src/shared/databases/prisma.databases";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

async execute (id: string){ 
   return await this.prisma.todo.delete({where:(id)});
}
}
