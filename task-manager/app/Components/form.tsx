import { Button, Callout, DropdownMenu, Flex, TextArea, TextField } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { createTask } from '../api/route';
import { createTaskSchema } from '../validationSchemas';

const Form = () => {

    const priorityList = ['Low', 'Moderate', 'High'];
    const [priorityValue, setPriorityValue] = useState('');
    const [error, setError] = useState('');
    const [taskSuccess, setTaskSuccess] = useState('');
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null)

    const handleSelect = (data: any) => {
        if (data != null){
            setPriorityValue(data);
        }
    }

    const submitTask = async (formData: FormData) => {
      setError('');
      setTaskSuccess('');

      const newTask = {
        title: formData.get("title"),
        description: formData.get("description"),
        priority: formData.get("priority")
      }

      const result = createTaskSchema.safeParse(newTask);

      let errorMessage = "";

      if (!result.success){
        result.error.issues.forEach((issue) => {
          errorMessage = errorMessage + issue.path[0] + ", ";
          setError("The following fields are required: " + errorMessage.slice(0, errorMessage.length-2))
        })
      }else{
        try {
          await createTask(formData);
          ref.current?.reset();
          setPriorityValue('');
          setTaskSuccess("Task created successfully!");
        } catch (error) {
          setError("An unexpected error occurred.") 
        }
      }

      // await createTask(formData)
      // ref.current?.reset()
      // setPriorityValue('');
      // console.log("submitted task!")
    }
  return (
    <div className='max-w-xl'>
      {error && 
        <Callout.Root className='mb-5' color='red'>
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      }
      {taskSuccess &&
        <Callout.Root className='mb-5' color='green'>
          <Callout.Text>
            {taskSuccess}
          </Callout.Text>
        </Callout.Root>
      }
      <form
        ref={ref}
        action={submitTask}
        className='max-w-xl space-y-3'>
        <TextField.Root name="title"></TextField.Root>
        <TextArea name="description"></TextArea>
        <Flex>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button>Priority:</Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    {priorityList.map((item) =>
                        <DropdownMenu.Item
                            key={item}
                            onSelect={() => handleSelect(item)}
                        >{item}
                        </DropdownMenu.Item>)}
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Flex>
        <TextField.Root readOnly value={priorityValue} name="priority"></TextField.Root>
        <Button>Submit new task</Button>
      </form>
    </div>
  )
}

export default Form
