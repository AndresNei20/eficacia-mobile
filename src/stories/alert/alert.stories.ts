import { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from '../../app/components/alert/alert.component';

export default {
  title: 'Components/Alerts/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Alert

## Uso

- Permite mostrar estados de éxito, advertencia o error.
- Incluye un círculo a la izquierda con un ícono representativo.
- El color del fondo de la alerta y del círculo se controlan por separado.
- Botón de cierre opcional en la derecha.

## Elementos clave

- **Style:** Cambia el fondo general de la alerta (default, success, warning, error).
- **Type:** Cambia el ícono dentro del círculo (void, alert, check, close).
- **Color:** Cambia el color del círculo (green, yellow, red).
        `,
      },
    },
  },
  argTypes: {
    textAlert: { control: 'text' },
    showIcon: { control: 'boolean' },
    style: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
    type: {
      control: 'select',
      options: ['void', 'alert', 'check', 'x'],
    },
    color: {
      control: 'select',
      options: ['green', 'yellow', 'red'],
    },
  },
  args: {
    textAlert: 'Estado',
    showIcon: true,
    style: 'default',
    type: 'alert',
    color: 'green',
  },
} as Meta<AlertComponent>;

type Story = StoryObj<AlertComponent>;

export const Default: Story = {};
