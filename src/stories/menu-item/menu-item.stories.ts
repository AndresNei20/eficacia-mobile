import { Meta, StoryFn } from '@storybook/angular';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';

export default {
  title: 'Components/MenuItem/MenuItem',
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
  },
  args: {
    text: 'Menu Item',
    isActive: true,
  },
} as Meta<MenuItemComponent>;

const Template: StoryFn<MenuItemComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const DesactiveItem = Template.bind({});
DesactiveItem.args = {
  text: 'Desactive Item',
  isActive: false,  
};

export const ActiveLongText = Template.bind({});
ActiveLongText.args = {
  text: 'Active item with very long text that should be truncated',
  isActive: true,
};

export const LongTextItem = Template.bind({});
LongTextItem.args = {
  text: 'Menu Item with very long text that should be truncated',
  isActive: false,
};
