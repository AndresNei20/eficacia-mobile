import { Meta, StoryFn } from '@storybook/angular';
import { MenuComponent } from '../../app/components/menu/menu.component';

export default {
  title: 'Components/Navigation/Menu/Menu',
  component: MenuComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
    docs: {
      description: {
        component: `
### Features:
- Menu component with icons and search functionality
- Emits events when icons are clicked
- Supports both text and image avatars
- Optional badge display
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: {
        type: 'radio'
      },
      options: ['image', 'text'],
      description: 'Type of content to display in the avatar',
    },
    showBadge: {
      control: {
        type: 'boolean'
      },
      description: 'Whether to show notification badge on the bell icon',
    },
    avatarText: {
      control: 'text',
      description: 'Text to display when using text avatar',
    },
    image: {
      control: 'text',
      description: 'Image URL for the user profile avatar',
    },
    searchChange: {
      description: 'Evento emitted when search value changes',
      table: {
        category: 'Events',
      },
      action: 'searchChange',
    },
    onClickBell: {
      description: 'Event emitted when the bell icon is clicked',
      table: {
        category: 'Events',
      },
      action: 'bellClicked',
    },
    onClickProfile: {
      description: 'Event emitted when the profile avatar is clicked',
      table: {
        category: 'Events',
      },
      action: 'profileClicked',
    },
  },
  args: {
    content: 'text',
    showBadge: false,
    avatarText: 'IC',
    image: '',
  },
} as Meta<MenuComponent>;

const Template: StoryFn<MenuComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

export const WithImageAvatar = Template.bind({});
WithImageAvatar.args = {
  content: 'image',
  image: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export const WithNotificationBadge = Template.bind({});
WithNotificationBadge.args = {
  showBadge: true,
};

export const DarkBackground = Template.bind({});
DarkBackground.parameters = {
  backgrounds: { default: 'dark' },
};