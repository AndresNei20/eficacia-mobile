import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownCardComponent } from '../../app/components/dropdown-card/dropdown-card.component';

const meta: Meta<DropdownCardComponent> = {
  title: 'Components/Cards/Dropdown Card',
  component: DropdownCardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
        control: 'text',
        description: 'Title',
      },
    body: {
        control: 'text',
        description: 'Body description',
    },
    caption: {
      control: 'text',
      description: 'Caption',
    }
    
  },
};

export default meta;
type Story = StoryObj<DropdownCardComponent>;

export const Default: Story = {
  args: {
    title: '¡Nuevo equipo en tu portafolio',
    body: 'Échale un vistazo al nuevo Motorola G20',
    caption: 'Hace unos segundos',
  },
};