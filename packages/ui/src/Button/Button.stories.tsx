import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['primary', 'default'] },
    style: { control: 'radio', options: ['fill', 'outline'] },
    size: { control: 'radio', options: ['big', 'medium'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryFill: Story = {
  args: { type: 'primary', style: 'fill', size: 'medium', children: 'Primary Fill' },
};

export const PrimaryOutline: Story = {
  args: { type: 'primary', style: 'outline', size: 'medium', children: 'Primary Outline' },
};

export const DefaultFill: Story = {
  args: { type: 'default', style: 'fill', size: 'medium', children: 'Default Fill' },
};

export const DefaultOutline: Story = {
  args: { type: 'default', style: 'outline', size: 'medium', children: 'Default Outline' },
};

export const BigSize: Story = {
  args: { type: 'primary', style: 'fill', size: 'big', children: 'Big Button' },
};

export const Disabled: Story = {
  args: { type: 'primary', style: 'fill', size: 'medium', children: 'Disabled', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="primary" style="fill">Primary Fill</Button>
        <Button type="primary" style="outline">Primary Outline</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="default" style="fill">Default Fill</Button>
        <Button type="default" style="outline">Default Outline</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="primary" style="fill" size="big">Big Primary</Button>
        <Button type="primary" style="fill" disabled>Disabled</Button>
      </div>
    </div>
  ),
};
