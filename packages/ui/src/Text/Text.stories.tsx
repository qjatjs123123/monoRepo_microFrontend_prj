import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['display', 'title', 'body', 'caption'] },
    size: { control: 'radio', options: ['1', '2', '3', '4'] },
    weight: { control: 'radio', options: ['normal', 'medium', 'semibold', 'bold'] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display1: Story = {
  args: { type: 'display', size: '1', weight: 'bold', children: 'Display 1 — 3rem' },
};

export const Title1: Story = {
  args: { type: 'title', size: '1', weight: 'semibold', children: 'Title 1 — 2rem' },
};

export const Body1: Story = {
  args: { type: 'body', size: '1', weight: 'normal', children: 'Body 1 — 1rem' },
};

export const Caption1: Story = {
  args: { type: 'caption', size: '1', weight: 'normal', children: 'Caption 1 — 0.75rem' },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text type="display" size="1" weight="bold">Display 1</Text>
      <Text type="display" size="2" weight="bold">Display 2</Text>
      <Text type="title" size="1" weight="semibold">Title 1</Text>
      <Text type="title" size="2" weight="semibold">Title 2</Text>
      <Text type="title" size="3" weight="medium">Title 3</Text>
      <Text type="title" size="4" weight="medium">Title 4</Text>
      <Text type="body" size="1">Body 1</Text>
      <Text type="body" size="2">Body 2</Text>
      <Text type="body" size="3">Body 3</Text>
      <Text type="body" size="4">Body 4</Text>
      <Text type="caption" size="1">Caption 1</Text>
    </div>
  ),
};
