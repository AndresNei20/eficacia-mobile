import { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenuComponent } from '../../app/components/dropdown-menu/dropdown-menu.component';

export default {
  title: 'Components/Dropdown/DropdownMenu',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
    selected: {
      control: 'text',
    },
  },
  args: {
    label: 'Label',
    options: ['Label 1', 'Label 2', 'Label 3'],
    selected: '',
  },
} as Meta<DropdownMenuComponent>;

type Story = StoryObj<DropdownMenuComponent>;

export const Default: Story = {};
