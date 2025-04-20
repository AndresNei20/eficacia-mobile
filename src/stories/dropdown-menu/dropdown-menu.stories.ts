import { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenuComponent } from '../../app/components/dropdown-menu/dropdown-menu.component';

export default {
  title: 'Components/Dropdown/DropdownMenu',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['label', 'select'],
    },
    textField: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
  },
  args: {
    state: 'label',
    textField: 'Label',
    options: ['Label 1', 'Label 2', 'Label 3'],
  },
} as Meta<DropdownMenuComponent>;

type Story = StoryObj<DropdownMenuComponent>;

export const Default: Story = {};
