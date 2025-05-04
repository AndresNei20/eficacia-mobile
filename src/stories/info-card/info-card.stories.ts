import { Meta, StoryFn } from '@storybook/angular';
import { InfoCardComponent } from '../../app/components/info-card/info-card.component';

export default {
  title: 'Components/Cards/InfoCard',
  component: InfoCardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### InfoCard Component

A flexible dual-state card component designed to present information in two distinct layouts based on context requirements.

#### Component Features

**Layout Variants:**
- **Default State**: Optimized for call-to-action scenarios with prominent button
- **Alternate State**: Designed for detailed content presentation with visual media

**Content Structure:**
- Configurable title (shared across both states)
- Dynamic text content
- Optional subtitle (alternate state only)
- Optional image (alternate state only)
- Action button (default state only)

**Design Attributes:**
- Clean, modern card UI with subtle elevation
- Responsive layout adapts to container
- Smooth transition between states
- Accessibility compliant

#### Usage Guidelines

1. **State Management**  
   Control the display state via the \`isAlternateState\` input property:
   - \`false\`: Shows default CTA layout
   - \`true\`: Displays detailed content layout

2. **Content Strategy**  
   - Default state works best for actionable items
   - Alternate state excels at feature showcases or case studies
   - Maintain consistent title between states when toggling

3. **Implementation Notes**  
   Always provide alt text for images when using the alternate state
        `,
      },
    },
  },
  argTypes: {
    title: {
      name: 'Title',
      description: 'Primary headline text displayed in both card variants',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    text: {
      name: 'Content Text',
      description: 'Main descriptive content for the card',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    subtitle: {
      name: 'Subtitle',
      description: 'Secondary headline (visible only in alternate state)',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    imageUrl: {
      name: 'Image URL',
      description: 'Source path for the optional display image (alternate state)',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    buttonLabel: {
      name: 'Button Label',
      description: 'Action button text (default state only)',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '"Learn More"' },
      },
    },
    isAlternateState: {
      name: 'Alternate State',
      description: 'Toggles between the two card layout variants',
      control: 'boolean',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    buttonClick: {
      name: 'Button Click',
      description: 'Event emitter for button interactions (default state)',
      table: {
        category: 'Events',
        type: { summary: 'EventEmitter<void>' },
      },
      action: 'buttonClick',
    },
  },
  args: {
    title: 'Service Overview',
    text: 'Explore our comprehensive solution designed to streamline your operations and boost efficiency.',
    subtitle: 'Customer Success Spotlight',
    imageUrl: 'https://picsum.photos/400/200',
    buttonLabel: 'Begin Trial',
    isAlternateState: false
  },
} as Meta<InfoCardComponent>;

const Template: StoryFn<InfoCardComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: `
**Default Variant**  

Optimal for conversion-focused contexts. Features:
- Clear, concise headline
- Supporting descriptive text
- Prominent call-to-action button
- Minimalist layout for maximum focus

**Usage Recommendations:**
- Landing page feature highlights
- Service introduction cards
- Primary action prompts
      `,
    },
  },
};

export const Alternate = Template.bind({});
Alternate.args = {
  isAlternateState: true
};
Alternate.parameters = {
  docs: {
    description: {
      story: `
**Alternate Variant**  

Designed for detailed content presentation. Features:
- Expanded content area
- Supporting visual media
- Secondary headline for context
- Rich text capacity

**Usage Recommendations:**
- Case study highlights
- Product feature deep dives
- Testimonial displays
- Detailed service breakdowns
      `,
    },
  },
};