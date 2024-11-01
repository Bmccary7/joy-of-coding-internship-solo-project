import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'
import { deleteTask } from '../api/route'

const DeleteBtn = ({task}: any) => {
    const deleteEntry = async () => {
        await deleteTask(task.id);
    }
  return (
    <div>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color='red'>Delete</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Title>
                    Delete entry?
                </AlertDialog.Title>
                <AlertDialog.Description>
                    This will delete this entry permanently!
                </AlertDialog.Description>
                <Flex gap='3' mt='2' justify='end'>
                    <AlertDialog.Action>
                        <Button onClick={deleteEntry} color='red'>Delete</Button>
                    </AlertDialog.Action>
                    <AlertDialog.Cancel>
                        <Button variant='soft' color='gray'>Cancel</Button>
                    </AlertDialog.Cancel>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </div>
  )
}

export default DeleteBtn
