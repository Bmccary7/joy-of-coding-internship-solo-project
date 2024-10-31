'use client'

import { Table } from '@radix-ui/themes'
import React from 'react'

const TableContent = () => {
  const tableHeaders = ["ID", "Task Title", "Task Description", "Priority", "Date Created", "Last Updated"]
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
      </Table.Root>
    </div>
)
}

export default TableContent
