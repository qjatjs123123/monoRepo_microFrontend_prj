import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';
import { Button } from '../Button/Button';

const meta = {
  title: 'UI/ErrorMessage',
  component: ErrorMessage,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    src: { control: 'text' },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Warning/3D/warning_3d.png',
    title: '페이지를 찾을 수 없습니다',
    description: <p style={{ margin: 0, color: 'var(--color-label-700)' }}>요청하신 페이지가 존재하지 않거나 삭제되었습니다.</p>,
  },
};

export const WithButton: Story = {
  args: {
    src: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Warning/3D/warning_3d.png',
    title: '오류가 발생했습니다',
    description: <p style={{ margin: 0, color: 'var(--color-label-700)' }}>잠시 후 다시 시도해 주세요.</p>,
    button: <Button type="primary" style="fill">다시 시도</Button>,
  },
};

export const NoDescription: Story = {
  args: {
    src: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Warning/3D/warning_3d.png',
    title: '데이터가 없습니다',
  },
};
