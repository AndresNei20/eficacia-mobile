import type { Meta, StoryObj } from '@storybook/angular';
import { ProfileComponent } from '../../app/components/profile/profile.component';

const meta: Meta<ProfileComponent> = {
  title: 'Components/Avatar/Profile',
  component: ProfileComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
        control: 'text',
        description: 'Overwritten description',
      },
    points: {
        control: 'text',
        description: 'Overwritten description',
    },
    showName: {
      control: {
        type: 'boolean'
    }
    },
    showPoints: {
      control: {
        type: 'boolean'
      }
    }
    
  },
};

export default meta;
type Story = StoryObj<ProfileComponent>;

export const Default: Story = {
  args: {
    name: 'Amanda Miguel',
    points: '120',
    showName: true,
    showPoints: true,
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};