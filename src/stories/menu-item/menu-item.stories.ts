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
    name: {
      control: 'text',
      description: 'Nombre/identificador del ítem del menú',
      table: {
        type: { summary: 'string' },
        category: 'Content'
      }
    },
    selected: {
      control: 'boolean',
      description: 'Estado de selección (estilo activo/inactivo)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State'
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Evento al hacer clic en el ítem',
      table: {
        type: { summary: 'EventEmitter<Event>' },
        category: 'Events'
      }
    }
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<MenuItemComponent>;

export const Default: Story = {
  args: {
    selected: false,
    name: 'portafolio',
  },
};