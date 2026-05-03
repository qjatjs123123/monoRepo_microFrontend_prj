/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react';
import { SearchDropDown } from './SearchDropDown';
import { Input } from '../Input/Input';

const meta = {
  title: 'UI/SearchDropDown',
  component: SearchDropDown,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const results = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px', paddingBottom: '220px' }}>
      <SearchDropDown>
        <SearchDropDown.Input>
          {({ setShowList, setIsExist }) => (
            <Input
              type="search"
              placeholder="검색어를 입력하세요"
              onFocus={() => { setShowList(true); setIsExist(true); }}
              onBlur={() => setTimeout(() => setShowList(false), 150)}
            />
          )}
        </SearchDropDown.Input>
        <SearchDropDown.Dropdown>
          {() => (
            <ul style={{ margin: 0, padding: '4px 0', listStyle: 'none' }}>
              {results.map((item) => (
                <li key={item} style={{ padding: '10px 14px', cursor: 'pointer', fontSize: '14px' }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </SearchDropDown.Dropdown>
      </SearchDropDown>
    </div>
  ),
};

export const WithResults: Story = {
  name: 'With Results (focus to open)',
  render: () => (
    <div style={{ width: '300px', paddingBottom: '220px' }}>
      <SearchDropDown>
        <SearchDropDown.Input>
          {({ setShowList, setIsExist }) => (
            <Input
              type="search"
              placeholder="과일 이름 검색"
              onFocus={() => { setShowList(true); setIsExist(true); }}
              onBlur={() => setTimeout(() => setShowList(false), 150)}
            />
          )}
        </SearchDropDown.Input>
        <SearchDropDown.Dropdown>
          {() => (
            <ul style={{ margin: 0, padding: '4px 0', listStyle: 'none' }}>
              {['망고', '파인애플', '수박', '딸기'].map((item) => (
                <li key={item} style={{ padding: '10px 14px', cursor: 'pointer', fontSize: '14px' }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </SearchDropDown.Dropdown>
      </SearchDropDown>
    </div>
  ),
};
