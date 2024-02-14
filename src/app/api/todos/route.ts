import { db, todoTable } from '@/lib/drizzle'
import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import { todo } from 'node:test'


export const GET = async (request:NextRequest) => {

    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task vachar(255));`

        const res = await db.select().from(todoTable)
        console.log(res)
        return NextResponse.json({data : res})
        
        
    } catch (error) {
        console.log((error as {message:string}).message)
        return NextResponse.json({message:"Something went wrong"})
    }
}


export const POST = async (request:NextRequest)=>{
    const req = await request.json()
    console.log(req)


    try {
        if(req.task){  

            await db.insert(todoTable).values({task: req.task}).returning()

            return NextResponse.json({message:"Data Added Successfully"})

        }else {
            throw new Error("Task field is required")
        }
        
    } catch (error) {
        return NextResponse.json({message: ((error) as {message: string}).message })
    }

}