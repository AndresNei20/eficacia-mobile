import type { Meta, StoryObj } from '@storybook/angular';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';

const meta: Meta<MenuItemComponent> = {
  title: 'Components/Navigation/Menu Item',
  component: MenuItemComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'radio'
      },
      options: ['selected', 'notSelected'],
    },
    name: {
      control: 'text',
      description: 'Name of section',
    },
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<MenuItemComponent>;

export const Default: Story = {
  args: {
    state: 'selected',
    name: 'portafolio',
  },
};