'use client'

import { Table } from '@radix-ui/themes'
import React from 'react'

const TableContent = ({tasks}: any) => {

  const tableHeaders = ["ID", "Task Title", "Task Description", "Priority", "Date Created", "Last Updated"];

  return (
    <div>
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
            <Table.Row key={task.id}>
              <Table.Cell>{task.id}</Table.Cell>
              <Table.RowHeaderCell>{task.title}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{task.description}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{task.priority}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{task.createdAt.toLocaleString()}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{task.updatedAt.toLocaleString()}</Table.RowHeaderCell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </div>
)
}

export default TableContent
