import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from '../../app/components/avatar/avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar/Avatar',
  component: AvatarComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    apperance:{
      control: {
        type: 'radio'
      },
      options: ['default', 'small'],
    },
    name: {
        control: 'text',
        description: 'Overwritten description',
      },
    points: {
        control: 'text',
        description: 'Overwritten description',
    },
    image: {
        control: 'text',
        description: 'Overwritten description',
    },
    
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  args: {
    name: 'Amanda Miguel',
    points: '120',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ6YhyYv_Dmjz8XHVOA5axDOuNeslz9uh8A&s'
  },
};