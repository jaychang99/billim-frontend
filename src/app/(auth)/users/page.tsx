'use client';
import { List, useTable } from '@refinedev/antd';
import { Table } from 'antd';

function UserListPage() {
  const { tableProps } = useTable();

  return (
    <List>
      <Table {...tableProps}>
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Email" dataIndex="email" />
      </Table>
    </List>
  );
}

export default UserListPage;
