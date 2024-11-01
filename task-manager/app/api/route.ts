'use server'

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export async function getTasks(formData?: any){
    let taskList
    if (formData != null){
        taskList = prisma.task.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: formData.toLowerCase(),
                        }
                    }, {
                        description: {
                            contains: formData.toLowerCase(),
                        }
                    }
                ]
            }
        })
        return taskList
    }else{
        taskList = prisma.task.findMany();
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

export async function deleteTask(){

}

export async function taskCount(){
    const numTasks = await prisma.task.count();
    return numTasks
}