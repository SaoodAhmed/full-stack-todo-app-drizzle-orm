import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import {  pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";




export const todoTable = pgTable("todos",{
    id: serial("id").primaryKey(),
    task : varchar("task",{length:255})
})


export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert">;


export const db = drizzle(sql)