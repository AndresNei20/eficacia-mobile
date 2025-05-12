import { Meta, StoryObj } from '@storybook/angular';
import { SelectionTableComponent } from '../../app/components/table/SelectionTable/SelectionTable.component';

export default {
  title: 'Components/Tables/Selection Table',
  component: SelectionTableComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Una tabla de selección con soporte para checkboxes o radios en sus filas.

---

## 🧩 Props

| Propiedad | Tipo                 | Descripción                                                  |
|----------|----------------------|--------------------------------------------------------------|
| \`title\`  | string               | Texto del título de la tabla                                 |
| \`mode\`   | 'checkbox' \\| 'radio' | Define si cada celda muestra un \`checkbox\` o un \`radio button\` |

---

La tabla tiene 3 columnas fijas y 4 filas predefinidas. El contenido se genera de forma estática para propósitos de demostración.
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    mode: {
      control: 'radio',
      options: ['checkbox', 'radio'],
      description: 'Tipo de selección en cada celda: checkbox o radio',
    },
  },
} as Meta<SelectionTableComponent>;

type Story = StoryObj<SelectionTableComponent>;

export const CheckboxTable: Story = {
    args: {
      title: 'Selecciona múltiples respuestas',
      mode: 'checkbox',
      columns: ['Columna 1', 'Columna 2', 'Columna 3'], // 👈 orden correcto
    }
  };
  
  export const RadioTable: Story = {
    args: {
      title: 'Selecciona múltiples respuestas',
      mode: 'radio',
      columns: ['Columna 1', 'Columna 2', 'Columna 3'], // 👈 orden correcto
    }
  };
  
