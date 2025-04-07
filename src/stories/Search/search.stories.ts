import { Meta, StoryFn } from '@storybook/angular';
import { SearchComponent } from '../../app/components/search/search.component';

export default {
  title: 'Components/Search/Search Component',
  component: SearchComponent,
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
Un componente de búsqueda altamente personalizable con funcionalidades avanzadas.

### Características:
- 🔍 Icono de búsqueda integrado
- ✖️ Botón para limpiar la búsqueda
- ⌨️ Emite eventos en tiempo real mientras se escribe
- ♿ Accesibilidad mejorada
- 🎨 Estilos personalizables
- ⏳ Soporte para estados deshabilitados
- 📱 Diseño responsive

### Uso recomendado:
- Búsqueda en listas o tablas
- Filtrado de contenido dinámico
- Barras de búsqueda principales
- Componentes de autocompletado (cuando se combina con otros)
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      description: 'Texto placeholder del campo de búsqueda',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Buscar' },
      },
    },
    disabled: {
      description: 'Deshabilita el campo de búsqueda',
      control: 'boolean',
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      description: 'Valor inicial del campo de búsqueda',
      control: 'text',
      table: {
        category: 'State',
      },
    },
    searchChange: {
      description: 'Evento emitido cuando cambia el valor de búsqueda',
      table: {
        category: 'Events',
      },
      action: 'searchChange',
    },
    ariaLabel: {
      description: 'Etiqueta ARIA para accesibilidad',
      control: 'text',
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'Search input' },
      },
    },
    iconPosition: {
      description: 'Posición del icono de búsqueda',
      control: 'select',
      options: ['left', 'right'],
      table: {
        category: 'Styling',
        defaultValue: { summary: 'left' },
      },
    },
  },
  args: {
    placeholder: 'Buscar',
    disabled: false,
    value: '',
    ariaLabel: 'Search input',
    iconPosition: 'left',
  },
} as Meta<SearchComponent>;

const Template: StoryFn<SearchComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});