import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../../app/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Form/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'radio'
      },
      options: ['enable', 'selected', 'error'],
    },
    type: {
      control: {
        type: 'radio'
      },
      options: ['textField', 'multiline'],
    },
    showIcon: {
      control: {
        type: 'boolean'
      } 
    },
    label: {
      control: 'text',
      description: 'Label',
    },
    valueText: {
      control: 'text',
      description: 'Value text',
    },
    multilineText: {
      control: 'text',
      description: 'Multiline text',
    },
    showRequired: {
      control: {
        type: 'boolean'
      } 
    },
    ShowAlert: {
      control: {
        type: 'boolean'
      } 
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    state: 'enable',
    type: 'textField',
    label: 'Name',
    valueText: 'Anne'
  },
};