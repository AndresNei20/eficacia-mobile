import { Meta, StoryFn } from '@storybook/angular';
import { InfoCardComponent } from '../../app/components/info-card/info-card.component';

export default {
  title: 'Components/InfoCard/InfoCard',
  component: InfoCardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A versatile card component with two distinct states for displaying different types of information.

### Features:
- � Two display states in a single component
- 🏷 Title and optional subtitle
- 📝 Configurable text content for each state
- 🖼 Image support in alternate state
- 🛎 Button with click event in default state
- 🎨 Clean white card design with subtle shadow
- 🔄 Smooth transition between states

### Usage:
Toggle between states using the \`isAlternateState\` input property. The default state shows a title, text and button, while the alternate state displays a title, subtitle, text and image.
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Main title displayed in both card states',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    text: {
      description: 'Primary text content for the default state',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    subtitle: {
      description: 'Subtitle displayed in the alternate state',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    altText: {
      description: 'Text content for the alternate state',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    imageUrl: {
      description: 'URL of the image to display in alternate state',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    buttonLabel: {
      description: 'Text for the button in default state',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Learn More' },
      },
    },
    isAlternateState: {
      description: 'Controls which state the card displays',
      control: 'boolean',
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'false' },
      },
    },
    buttonClick: {
      description: 'Event emitted when the button is clicked',
      table: {
        category: 'Events',
      },
      action: 'buttonClick',
    },
  },
  args: {
    title: 'Welcome to Our Service',
    text: 'Discover all the amazing features we offer to help you achieve your goals.',
    subtitle: 'Success Story',
    altText: 'Our customers have seen a 200% increase in productivity after using our solution.',
    imageUrl: 'https://picsum.photos/400/200',
    buttonLabel: 'Get Started',
    isAlternateState: false
  },
} as Meta<InfoCardComponent>;

const Template: StoryFn<InfoCardComponent> = (args) => ({
  props: args,
});

export const DefaultState = Template.bind({});
DefaultState.parameters = {
  docs: {
    description: {
      story: 'The default state of the card showing title, text content and a call-to-action button.',
    },
  },
};

export const AlternateState = Template.bind({});
AlternateState.args = {
  isAlternateState: true
};
AlternateState.parameters = {
  docs: {
    description: {
      story: 'The alternate state showing title, subtitle, detailed text and an image for richer content display.',
    },
  },
};

export const WithCustomImage = Template.bind({});
WithCustomImage.args = {
  isAlternateState: true,
  imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200'
};
WithCustomImage.parameters = {
  docs: {
    description: {
      story: 'Example with a custom image URL showing how to integrate real images into the card.',
    },
  },
};

export const MinimalContent = Template.bind({});
MinimalContent.args = {
  title: 'Minimal Card',
  text: 'Just the basics',
  subtitle: '',
  altText: '',
  imageUrl: '',
  buttonLabel: 'OK'
};
MinimalContent.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the card with minimal content, showing how it handles missing optional elements.',
    },
  },
};