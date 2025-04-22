import { Meta, StoryFn } from '@storybook/angular';
import { DeatilCardCompComponent } from '../../app/components/deatil-card-comp/deatil-card-comp.component';

export default {
  title: 'Components/DeatilCardComp/DeatilCardCompComponent',
  component: DeatilCardCompComponent,
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
- 🎨 Estilos personalizables (tamaño configurable)
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
  },
  args: {
    placeholder: 'Buscar',
    disabled: false,
    value: '',
    width: '222px',
    height: '40px',
  },
} as Meta<DeatilCardCompComponent>;

const Template: StoryFn<DeatilCardCompComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
