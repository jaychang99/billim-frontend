'use client';
import { List, useTable } from '@refinedev/antd';
import { Table } from 'antd';

function ThingListPage() {
  const { tableProps } = useTable();

  return (
    <List>
      <Table {...tableProps}>
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Description" dataIndex="description" />
      </Table>
    </List>
  );
}

export default ThingListPage;
