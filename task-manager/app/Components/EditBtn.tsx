'use client'

import { Box, Button, DropdownMenu, Flex, Popover, TextArea, TextField } from '@radix-ui/themes'
import React, { useRef, useState } from 'react'

const EditBtn = () => {
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
        setPrioValue('');
    }

  return (
    <div>
        <Popover.Root>
            <Popover.Trigger>
                <Button>Edit</Button>
            </Popover.Trigger>
            <Popover.Content onCloseAutoFocus={resetFields}>
                <Flex>
                    <Box>
                        <form ref={ref}>
                            <Flex>
                                <p>Currently Editing:</p>
                                <Button type='button'onClick={() => console.log(prioValue)}>RESET</Button>
                            </Flex>
                            <TextArea placeholder='Edit title'></TextArea>
                            <TextArea placeholder='Edit description'></TextArea>
                            <Flex>
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
                            <Button asChild>
                                <Popover.Close>
                                    <Button>Confirm</Button>
                                </Popover.Close>
                            </Button>
                            <Popover.Close>
                                <Button variant='soft' color='gray'>Cancel</Button>
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
