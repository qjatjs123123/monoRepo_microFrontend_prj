import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta = {
  title: 'UI/Layout',
  component: Layout,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: undefined },
  render: () => (
    <Layout>
      <div style={{ padding: '24px', background: 'var(--color-background-alt)', minHeight: '200px' }}>
        <p style={{ margin: 0 }}>Layout 컨테이너 내부 콘텐츠</p>
      </div>
    </Layout>
  ),
};

export const WithMultipleSections: Story = {
  args: { children: undefined },
  render: () => (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
        <div style={{ padding: '16px', background: 'var(--blue-100)', borderRadius: '8px' }}>헤더 섹션</div>
        <div style={{ padding: '16px', background: 'var(--color-background-alt)', borderRadius: '8px', minHeight: '120px' }}>메인 콘텐츠</div>
        <div style={{ padding: '16px', background: 'var(--gray-100)', borderRadius: '8px' }}>푸터 섹션</div>
      </div>
    </Layout>
  ),
};
