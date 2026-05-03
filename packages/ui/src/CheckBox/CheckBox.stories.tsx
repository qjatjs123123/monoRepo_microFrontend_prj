import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from './CheckBox';

const meta = {
  title: 'UI/CheckBox',
  component: CheckBox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    type: { control: 'radio', options: ['title', 'normal'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: { checked: false, type: 'normal', content: '옵션 선택' },
};

export const Checked: Story = {
  args: { checked: true, type: 'normal', content: '선택됨' },
};

export const TitleType: Story = {
  args: { checked: true, type: 'title', content: '제목 체크박스' },
};

export const Disabled: Story = {
  args: { checked: false, disabled: true, type: 'normal', content: '비활성화' },
};

export const DisabledChecked: Story = {
  args: { checked: true, disabled: true, type: 'normal', content: '비활성화 (선택됨)' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckBox checked={false} type="normal" content="Normal - Unchecked" />
      <CheckBox checked={true} type="normal" content="Normal - Checked" />
      <CheckBox checked={false} type="title" content="Title - Unchecked" />
      <CheckBox checked={true} type="title" content="Title - Checked" />
      <CheckBox checked={false} disabled content="Disabled" />
    </div>
  ),
};
