import { Button, DropdownMenu, Flex, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'

const Form = () => {

    const priorityList = ['Low', 'Moderate', 'High'];
    const [priorityValue, setPriorityValue] = useState('');

    const handleSelect = (data: any) => {
        if (data != null){
            setPriorityValue(data);
        }
    }
  return (
    <div className='max-w-xl'>
      <form className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <TextArea></TextArea>
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
        <TextField.Root readOnly value={priorityValue}></TextField.Root>
        <Button>Submit new task</Button>
      </form>
    </div>
  )
}

export default Form
