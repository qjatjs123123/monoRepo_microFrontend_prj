/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자' },
  { id: 2, name: '김철수', email: 'kim@example.com', role: '사용자' },
  { id: 3, name: '이영희', email: 'lee@example.com', role: '사용자' },
];

export const Default: Story = {
  args: { children: undefined },
  render: () => (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          <Table.Head width="60px">ID</Table.Head>
          <Table.Head width="120px">이름</Table.Head>
          <Table.Head width="200px">이메일</Table.Head>
          <Table.Head width="100px">역할</Table.Head>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {sampleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const WithCheckedRow: Story = {
  args: { children: undefined },
  render: () => (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
          <Table.Head>역할</Table.Head>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {sampleData.map((row, i) => (
          <Table.Row key={row.id} checked={i === 1}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
