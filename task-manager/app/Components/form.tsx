import { Button, DropdownMenu, Flex, TextArea, TextField } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { createTask } from '../api/route';

const Form = () => {

    const priorityList = ['Low', 'Moderate', 'High'];
    const [priorityValue, setPriorityValue] = useState('');
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null)

    const handleSelect = (data: any) => {
        if (data != null){
            setPriorityValue(data);
        }
    }

    const submitTask = async (formData: FormData) => {
      await createTask(formData)
      ref.current?.reset()
      setPriorityValue('');
      console.log("submitted task!")
    }
  return (
    <div className='max-w-xl'>
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
