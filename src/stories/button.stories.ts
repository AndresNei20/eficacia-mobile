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
    type: {
      control: {
        type: 'radio'
      },
      options: ['primary', 'secondary'],
    },
    appearance: {
      control: {
        type: 'radio'
      },
      options: ['filled', 'outline'],
    },
    state: {
      control: {
        type: 'radio'
      },
      options: ['enabled', 'hovered', 'disabled', 'clicked', 'focused'],
    },
    iconSrc: {
      control: {
        type: 'select',
      },
      options: ['add', 'arrowRight', 'shop'], // <-- Nueva sintaxis
    },
    iconPosition: {
      control: {
        type: 'radio',
      },
      options: ['left', 'right'], // <-- Nueva sintaxis
    },
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    appearance: 'filled',
    state: 'enabled',
    iconSrc: 'add',
    iconPosition: 'left',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    appearance: 'filled',
    state: 'enabled',
    iconSrc: 'arrowRight',
    iconPosition: 'right',
    children: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    appearance: 'filled',
    state: 'disabled',
    children: 'Disabled Button',
  },
};