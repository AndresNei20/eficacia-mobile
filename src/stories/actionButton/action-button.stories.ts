import type { Meta, StoryObj } from '@storybook/angular';
import { ActionButtonComponent } from '../../app/components/action-button/action-button.component';

const meta: Meta<ActionButtonComponent> = {
  title: 'Components/Buttons/Action Button',
  component: ActionButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'radio'
      },
      options: ['default', 'hovered'],
    }
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<ActionButtonComponent>;

export const Default: Story = {
  args: {
    state: 'default',
    children: 'Button',
  },
};