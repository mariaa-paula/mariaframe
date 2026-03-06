import { PrismaService } from "src/shared/databases/prisma.databases";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

async execute (){
   return await this.prisma.todo.FindMany();
}
}
