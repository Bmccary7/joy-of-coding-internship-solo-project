'use server'

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export async function getTasks(search?: any, filter?: unknown){
    let taskList
    if (search != null){
        taskList = await prisma.task.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: search.toLowerCase(),
                        }
                    }, {
                        description: {
                            contains: search.toLowerCase(),
                        }
                    }
                ]
            }
        })
        return taskList
    }else if(filter != null){
        if (filter === "id") {
            taskList = await prisma.task.findMany({
                orderBy: {
                    id: 'asc'
                }
            })
            return taskList;
        }else if(filter === "task_title") {
            taskList = await prisma.task.findMany({
                orderBy: {
                    title: 'asc'
                }
            })
            return taskList;
        }else if (filter === "task_description") {
            taskList = await prisma.task.findMany({
                orderBy: {
                    description: 'asc'
                }
            })
            return taskList;
        }else if (filter === "priority") {
            taskList = await prisma.task.findMany({
                orderBy: {
                    priority: 'asc'
                }
            })
            return taskList;
        }else if (filter === "date_created") {
            taskList = await prisma.task.findMany({
                orderBy: {
                    createdAt: 'asc'
                }
            })
            return taskList;
        }else if (filter === "last_updated") {
            taskList = await prisma.task.findMany({
                orderBy: {
                    updatedAt: 'asc'
                }
            })
            return taskList;
        }
        taskList = await prisma.task.findMany();
        return taskList;
    }else{
        taskList = await prisma.task.findMany();
        return taskList
    }
}

export async function createTask(formData: FormData){
    await prisma.task.create({
        data: {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            priority: formData.get("priority") as any
        }
    })
    revalidatePath("@/")
}

export async function editTask(formData: FormData, id: any){
    await prisma.task.update({
        where: { id }, 
        data : {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            priority: formData.get('priority') as any
        }
    })
    revalidatePath("@/")
}

export async function deleteTask(id: any){
    await prisma.task.delete({
        where: {id}
    })
    revalidatePath("@/")
}

export async function taskCount(){
    const numTasks = await prisma.task.count();
    return numTasks
}

export async function refreshDB(){
    revalidatePath("@")
}