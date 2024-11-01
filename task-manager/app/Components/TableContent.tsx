'use client'

import { AlertDialog, Button, Callout, DropdownMenu, Flex, Table, TextField, useThemeContext } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';
import { refreshDB } from '../api/route';

const TableContent = ({tasks, totalCount, shownCount}: any) => {

  const tableHeaders = ["ID", "Task Title", "Task Description", "Priority", "Date Created", "Last Updated", "Edit/Delete"];

  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');
  const shownTasks = `(${shownCount} displayed)`;
  const [filterValue, setFilterValue] = useState('No filter');

  const handleSearch = (formData: FormData) => {
    const searchInfo = formData.get("searchbar") as string;
    if (searchInfo === ""){
      setError("The search string cannot be empty!");
    }else{
      setError('');
      ref.current?.reset();
      router.push("http://localhost:3000/?search=" + searchInfo.toLowerCase());
    }

  }

  const resetTable = () => {
    setFilterValue('No filter');
    setError('');
    router.push("/");
    refreshDB
  }

  const handleFilter = (filter: any) => {
    setFilterValue(filter);
  }

  return (
    <div>
      <Flex justify='center' mb='5'>
        {error &&
          <Callout.Root color='red'>
            <Callout.Text>
              {error}
            </Callout.Text>
          </Callout.Root>
        }
      </Flex>
      <div className='flex justify-center space-x-10'>
        <h1 className='pb-5 text-3xl'>Task total: {totalCount} {shownTasks}</h1>
        <div className='flex justify-center space-x-10'>
          <form 
          ref={ref}
          action={handleSearch}>
            <TextField.Root placeholder='Search task entries...' name="searchbar">
              <TextField.Slot></TextField.Slot>
              <Button>Search</Button>
            </TextField.Root>
          </form>
          <Button color='green' onClick={resetTable}>Refresh table</Button>
          <Flex gap='3' justify='center'>
            <p className='mt-1'>Sort By:</p>
            <TextField.Root readOnly defaultValue={filterValue}>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button><DropdownMenu.TriggerIcon /></Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onSelect={() => handleFilter("No filter")}>No filter</DropdownMenu.Item>
                  {(tableHeaders.slice(0, tableHeaders.length-1)).map((item) => 
                    <DropdownMenu.Item key={item} onSelect={() => handleFilter(item)}>{item}</DropdownMenu.Item>
                  )}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </TextField.Root>
          </Flex>
        </div>
      </div>
      <div className='flex justify-center'>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                {tableHeaders.map((item) => 
                  <Table.ColumnHeaderCell key={item}>{item}</Table.ColumnHeaderCell>
                )}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tasks.map((task: any) => 
                <Table.Row align='center' key={task.id}>
                  <Table.Cell>{task.id}</Table.Cell>
                  <Table.RowHeaderCell>{task.title}</Table.RowHeaderCell>
                  <Table.RowHeaderCell>{task.description}</Table.RowHeaderCell>
                  <Table.RowHeaderCell>{task.priority}</Table.RowHeaderCell>
                  <Table.RowHeaderCell>{task.createdAt.toLocaleString()}</Table.RowHeaderCell>
                  <Table.RowHeaderCell>{task.updatedAt.toLocaleString()}</Table.RowHeaderCell>
                  <Table.RowHeaderCell>
                    <Flex align='center' gap='3'>
                      <EditBtn task={task}/>
                      <DeleteBtn task={task}/>
                    </Flex>
                  </Table.RowHeaderCell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </div>
    </div>
)
}

export default TableContent
