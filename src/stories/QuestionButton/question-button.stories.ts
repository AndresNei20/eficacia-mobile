import type { Meta, StoryObj } from '@storybook/angular';
import { QuestionButtonComponent } from '../../app/components/question-button/question-button.component';

const meta: Meta<QuestionButtonComponent> = {
  title: 'Components/Buttons/Question Button',
  component: QuestionButtonComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`

## 🧩 Uso
- El Botón de Ayuda facilita el acceso a asistencia dentro de la interfaz. Se utiliza en secciones donde los usuarios pueden necesitar orientación adicional o resolver dudas sobre una funcionalidad.
- Este botón cuenta con dos estados:
- a. Colapsado: Se muestra como un botón redondo con un ícono de “?” en el centro.
- b. Desplegado: Al interactuar, se expande para mostrar un tooltip con el mensaje “¿Cómo podemos ayudarte?”, ofreciendo opciones adicionales si es necesario.

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Contenedor del botón | Estructura principal que define su tamaño y forma.             |
| Cuadro de texto | Cuadro de diálogo que proporciona orientación.                                   |
| Ícono | Elemento gráfico que refuerza visualmente la acción del botón.       |
| Estado | Variantes como colapsado y desplegado.     |

---

# Componente

        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isTooltipVisible: {
      control: 'boolean',
      description: 'Controla la visibilidad inicial del tooltip',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State'
      }
    },
  },
};

export default meta;
type Story = StoryObj<QuestionButtonComponent>;

export const Default: Story = {
  args: {
    isTooltipVisible: false,
  },
};
