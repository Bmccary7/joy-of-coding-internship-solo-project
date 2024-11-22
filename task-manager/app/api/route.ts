'use server'

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export async function getTasks(search?: any, filter?: unknown, order?: any){

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
        });
        if (order === 'desc'){
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
                },
                orderBy: {
                    id: 'desc'
                }
            })
        }else if (filter != null){
            if (filter === "id"){
                if (order === 'desc'){
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
                        },
                        orderBy: {
                            id: 'desc'
                        }
                    })
                }else{
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
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    })
                }
            }else if (filter === 'task_title'){
                if (order === 'desc'){
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
                        },                        
                        orderBy: {
                            title: 'desc'
                        }
                    })
                }else{
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
                        },                        
                        orderBy: {
                            title: 'asc'
                        }
                    })
                }
            }else if (filter === 'task_description'){
                if (order === 'desc'){
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
                        },                        
                        orderBy: {
                            description: 'desc'
                        }
                    })
                }else{
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
                        },                        
                        orderBy: {
                            description: 'asc'
                        }
                    })
                }
            }else if (filter === 'priority'){
                if (order === 'desc'){
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
                        },                        
                        orderBy: {
                            priority: 'desc'
                        }
                    })
                }else{
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
                        },                        
                        orderBy: {
                            priority: 'asc'
                        }
                    })
                }
            }else if (filter === 'date_created'){
                if (order === 'desc'){
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
                        },                        
                        orderBy: {
                            createdAt: 'desc'
                        }
                    })
                }else{
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
                        },                        
                        orderBy: {
                            createdAt: 'asc'
                        }
                    })
                }
            }else if (filter === 'last_updated'){
                if (order === 'desc'){
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
                        },                        
                        orderBy: {
                            updatedAt: 'desc'
                        }
                    })
                }else{
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
                        },                        
                        orderBy: {
                            updatedAt: 'asc'
                        }
                    })
                }
            }
            return taskList;
        }
        return taskList
    }else if(filter != null){
        if (filter === "id") {
            if (order === "desc"){
                taskList = await prisma.task.findMany({
                    orderBy: {
                        id: 'desc'
                    }
                });
            }else{
                taskList = await prisma.task.findMany({
                    orderBy: {
                        id: 'asc'
                    }
                })
            }
            
            return taskList;
        }else if(filter === "task_title") {
            if (order === 'desc'){
                taskList = await prisma.task.findMany({
                    orderBy: {
                        title: 'desc'
                    }
                })
            }else{
                taskList = await prisma.task.findMany({
                    orderBy: {
                        title: 'asc'
                    }
                })
            }
            return taskList;
        }else if (filter === "task_description") {
            if (order === 'desc'){
                taskList = await prisma.task.findMany({
                    orderBy: {
                        description: 'desc'
                    }
                })
            }else{
                taskList = await prisma.task.findMany({
                    orderBy: {
                        description: 'asc'
                    }
                })
            }
            return taskList;
        }else if (filter === "priority") {
            if (order === "desc"){
                taskList = await prisma.task.findMany({
                    orderBy: {
                        priority: 'desc'
                    }
                })
            }else{
                taskList = await prisma.task.findMany({
                    orderBy: {
                        priority: 'asc'
                    }
                })
            }
            return taskList;
        }else if (filter === "date_created") {
            if (order === 'desc'){
                taskList = await prisma.task.findMany({
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
            }else{
                taskList = await prisma.task.findMany({
                    orderBy: {
                        createdAt: 'asc'
                    }
                })
            }
            return taskList;
        }else if (filter === "last_updated") {
            if (order === 'desc'){
                taskList = await prisma.task.findMany({
                    orderBy: {
                        updatedAt: 'desc'
                    }
                })
            }else{
                taskList = await prisma.task.findMany({
                    orderBy: {
                        updatedAt: 'asc'
                    }
                })
            }
            return taskList;
        }
        taskList = await prisma.task.findMany();
        return taskList;
    }else if (order === "asc"){
        taskList = await prisma.task.findMany({
            orderBy: {
                id: 'asc'
            }
        })
        return taskList;
    }else if (order === 'desc'){
        taskList = await prisma.task.findMany({
            orderBy: {
                id: 'desc'
            }
        })
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