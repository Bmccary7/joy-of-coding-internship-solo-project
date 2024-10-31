'use server'

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export async function getTasks(formData?: FormData){
    let taskList
    if (formData != null){
        taskList = prisma.task.findMany({
            where: {}
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

export async function deleteTask(){

}