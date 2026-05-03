import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
  title: 'UI/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { message: '정보 메시지입니다.' },
};

export const Success: Story = {
  args: { message: '저장되었습니다.' },
};

export const Error: Story = {
  args: { message: '오류가 발생했습니다.' },
};

export const Empty: Story = {
  args: { message: '' },
  name: 'Hidden (empty message)',
};
