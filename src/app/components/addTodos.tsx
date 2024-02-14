"use client"
import React, { useState } from 'react'
import Image from "next/image"
import { NewTodo } from '@/lib/drizzle'
import { useRouter } from "next/navigation";

const AddTodo = () => {
    const [task, setTask] = useState<NewTodo | null>(null);
    const { refresh } = useRouter();


    const handleSubmit = async () => {
        try {
            if (task) {
                const res = await fetch("/api/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        task: task.task
                    }),

                })
                refresh();
            }
        } catch (error) {
            console.log("error")
        }

    }

    return (
        <div>
            <form className='w-full flex gap-x-3 pt-32 mb-6'>
                <input
                    placeholder='Write a new task'
                    onChange={(e) => setTask({ task: e.target.value })}
                    className='rounded-full w-full py-3.5 px-5 border focus:outline-scondary' type="text" />
                <button type='button' onClick={handleSubmit} className='p-4 shrink-0 rounded-full bg-gradient-to-t from-prmary to-scondary' >
                    <Image src={"/Vector.svg"} width={20} height={20} alt='vector' />
                </button>
            </form>
        </div>
    )
}

export default AddTodo