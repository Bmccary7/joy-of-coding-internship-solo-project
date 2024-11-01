'use client'

import { Box, Button, DropdownMenu, Flex, Popover, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const EditBtn = () => {
    const prioList = ["Low", "Moderate", "High"];
  return (
    <div>
        <Popover.Root>
            <Popover.Trigger>
                <Button>Edit</Button>
            </Popover.Trigger>
            <Popover.Content>
                <Flex>
                    <Box>
                        <form>
                            <Flex>
                                <p>Currently Editing:</p>
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
                                            <DropdownMenu.Item key={item}>{item}</DropdownMenu.Item>
                                        )}
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Flex>
                            <TextField.Root readOnly></TextField.Root>
                        </form>
                    </Box>
                </Flex>
            </Popover.Content>
        </Popover.Root>
    </div>
  )
}

export default EditBtn
