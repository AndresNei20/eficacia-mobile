import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/button/button.component'; 

const meta: Meta<ButtonComponent> = {
  title: 'Components/Buttons/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: {
        type: 'radio'
      },
      options: ['filled', 'outline', 'error'],
    },
    state: {
      control: {
        type: 'radio'
      },
      options: ['disabled', 'active', 'hovered', 'pressed'],
    },
    iconSrc: {
      control: {
        type: 'select',
      },
      options: ['add', 'arrowRight', 'shop'], 
    },
    iconLeft: {
      control: {
        type: 'boolean'
    }
    },
    iconRight: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Filled: Story = {
  args: {
    appearance: 'filled',
    state: 'active',
    children: 'Button',
    iconLeft: false,
    iconRight: false
  },
};

export const Outline: Story = {
  args: {
    appearance: 'outline',
    state: 'active',
    children: 'Button',
  },
};

export const Error: Story = {
  args: {
    appearance: 'error',
    state: 'active',
    children: 'Button',
  },
};