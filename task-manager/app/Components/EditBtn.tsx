'use client'

import { Box, Button, DropdownMenu, Flex, Popover, TextArea, TextField } from '@radix-ui/themes'
import React, { useRef, useState } from 'react'

const EditBtn = ({task}: any) => {
    const prioList = ["Low", "Moderate", "High"];
    const [prioValue, setPrioValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const ref = useRef<HTMLFormElement>(null);

    const handleSelect = (data: any) => {
        if (data != null){
            setPrioValue(data);
        }
    }

    const resetFields = () => {
        ref.current?.reset();
        setTitleValue('');
        setDescValue('');
        setPrioValue('');
    }

    const restoreDefs = () => {
        ref.current?.reset();
        setTitleValue(task.title);
        setDescValue(task.description);
        setPrioValue(task.priority);

    }

  return (
    <div className='pt-2 pb-2'>
        <Popover.Root>
            <Popover.Trigger>
                <Button>Edit</Button>
            </Popover.Trigger>
            <Popover.Content onCloseAutoFocus={resetFields}>
                <Flex gap='3' pb='4'>
                    <Box>
                        <form ref={ref}>
                            <Flex gap='3' align='center' className='space-x-20'>
                                <p>Currently Editing:</p>
                                <Flex gap='2'>
                                    <Button type='button' onClick={restoreDefs}>Restore Defaults</Button>
                                    <Button type='button' onClick={resetFields}>Clear</Button>
                                </Flex>
                            </Flex>
                            <p className='mt-3 mb-2'>{task.title}</p>
                            <TextArea placeholder='Edit title' defaultValue={titleValue}></TextArea>
                            <p className='mt-3 mb-2'>{task.description}</p>
                            <TextArea placeholder='Edit description' defaultValue={descValue}></TextArea>
                            <Flex gap='3' mt='3' mb='2'>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button>Priority:</Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content>
                                        {prioList.map((item) => 
                                            <DropdownMenu.Item 
                                                key={item}
                                                onSelect={() => handleSelect(item)}>{item}
                                            </DropdownMenu.Item>
                                        )}
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Flex>
                            <TextField.Root readOnly value={prioValue}></TextField.Root>
                            <Button mt='3' mr='3' asChild>
                                <Popover.Close>
                                    <Button>Confirm</Button>
                                </Popover.Close>
                            </Button>
                            <Popover.Close>
                                <Button mt='3' variant='soft' color='gray'>Cancel</Button>
                            </Popover.Close>
                        </form>
                    </Box>
                </Flex>
            </Popover.Content>
        </Popover.Root>
    </div>
  )
}

export default EditBtn
