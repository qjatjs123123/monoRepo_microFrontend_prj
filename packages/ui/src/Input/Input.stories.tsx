import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'search'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    rd: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    readonly: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: 'text', size: 'medium', placeholder: '입력하세요' },
};

export const Small: Story = {
  args: { type: 'text', size: 'small', placeholder: 'Small input' },
};

export const Large: Story = {
  args: { type: 'text', size: 'large', placeholder: 'Large input' },
};

export const Password: Story = {
  args: { type: 'password', size: 'medium', placeholder: '비밀번호' },
};

export const Readonly: Story = {
  args: { type: 'text', size: 'medium', value: '읽기 전용 값', readonly: true },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Input type="text" size="small" placeholder="Small" />
      <Input type="text" size="medium" placeholder="Medium" />
      <Input type="text" size="large" placeholder="Large" />
    </div>
  ),
};
