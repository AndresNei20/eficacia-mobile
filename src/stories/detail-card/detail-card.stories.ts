import { Meta, StoryFn } from '@storybook/angular';
import { DetailCard } from '../../app/components/detail-card/detail-card.component';

export default {
  title: 'Components/Cards/DetailCard/DetailCard',
  component: DetailCard,
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
# DetailCard Component

The DetailCard component displays a collection of information items in a card format, each with an associated icon.

## Features
- Displays multiple information items vertically stacked
- Supports different icon types for each item
- Responsive design that adapts to container size
- Customizable through input properties

## Usage
\`\`\`html
<detail-card [cards]="cardsArray"></detail-card>
\`\`\`

## Inputs
| Property | Type | Description | Default |
|----------|------|-------------|---------|
| cards | Array<{iconType: string, title: string}> | Array of card items to display | [] |

## Icon Types
The component supports these icon types:
- \`user\` - user icon
- \`phone\` - Phone handset icon
- \`email\` - Email envelope icon
- \`work\` - Briefcase icon
- \`shop\` - Shopping cart icon
- \`location\` - Map marker icon
- \`info\` - Information circle icon

## Examples
See the "OriginalVariation" story for a complete implementation example.
        `,
      },
    },
  },
} as Meta<DetailCard>;

const Template: StoryFn<DetailCard> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const OriginalVariation = Template.bind({});
OriginalVariation.args = {
  cards: [
    { iconType: 'user', title: 'C.C 1130618976 Gaiman, Argentina' },
    { iconType: 'phone', title: '+57 314 555 55 55' },
    { iconType: 'email', title: 'amiguel@plancha.arg' },
    { iconType: 'work', title: 'Asesor B2C' },
    { iconType: 'shop', title: 'B2C Moderno' },
    { iconType: 'location', title: 'Sur-occidente' },
    { iconType: 'info', title: 'Ayudo a vendedores/empresas B2C con productos INTANGIBLES aumentar sus ventas a través de habilidades, tácticas y herramientas PRÁCTICAS y fáciles de implementar.' }
  ]
};