import { Meta, StoryObj } from '@storybook/angular';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';

export default {
  title: 'Components/Navigation/Menu/MenuItem',
  component: MenuItemComponent,
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
Un componente de elemento de menú con icono SVG y texto.

### Características:
- 🖼️ Icono SVG integrado
- 📝 Texto descriptivo
- 🎨 Estados activo/inactivo
- ✂️ Texto truncado cuando es muy largo
- 🖱️ Efectos hover y estados visuales
- ♿ Accesibilidad incorporada
- 📱 Diseño responsive

### Uso recomendado:
- Menús de navegación principal
- Listas de opciones
- Menús laterales (sidebars)
- Barras de herramientas
- Cualquier interfaz que requiera elementos de menú seleccionables
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    text: {
      description: 'Texto que se muestra en el elemento del menú',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '""' },
      },
    },
    isActive: {
      description: 'Indica si el elemento está en estado activo/seleccionado',
      control: 'boolean',
      table: {
        category: 'State',
        defaultValue: { summary: 'false' },
      },
    },
    icons: {
      control: {
        type: 'select',
      },
      options: ['arrowFile', 'diagonalFile', 'document', 'list'], 
    },
  },
  args: {
    text: 'Menu Item',
    isActive: true,
  },
} as Meta<MenuItemComponent>;

type Story = StoryObj<MenuItemComponent>;

export const Default: Story = {
  args: {},
}

export const DesactiveItem: Story = {
  args: {
    text: 'Desactive Item',
    isActive: false,  
  },
}

export const ActiveLongText: Story = {
  args: {
    text: 'Active item with very long text that should be truncated',
    isActive: true,
  },
}

export const LongTextItem: Story = {
  args: {
    text: 'Menu Item with very long text that should be truncated',
    isActive: false,
  },
}