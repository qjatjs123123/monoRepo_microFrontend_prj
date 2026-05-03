import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: '내용을 입력하세요', rows: 4 },
};

export const WithValue: Story = {
  args: { defaultValue: '기본으로 입력된 텍스트입니다.', rows: 4 },
};

export const Disabled: Story = {
  args: { placeholder: '비활성화 상태', disabled: true, rows: 4 },
};
