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
## Uso

El componente **Alert** se utiliza para mostrar mensajes informativos, de advertencia, éxito o error en la interfaz. Refuerza visualmente el mensaje mediante un color de fondo, un ícono opcional representativo y un botón para cerrar la alerta.

- **Mensajes de éxito:** Confirmar acciones completadas correctamente.
- **Advertencias:** Informar situaciones que requieren atención, pero no bloquean la acción del usuario.
- **Errores:** Notificar fallos del sistema o acciones no válidas del usuario.
- **Estados de proceso:** Indicar tareas en curso o en segundo plano.

### Tipos

- \`default\`: Alerta de estado neutral o informativo.
- \`success\`: Mensajes de éxito.
- \`pending\`: Estados en proceso.
- \`warning\`: Mensajes de advertencia o error.

---

## Mejores prácticas

### ✅ Sí
- Usar alertas según su propósito definido.
- Mantener el texto claro y conciso.
- Incluir íconos para reforzar el mensaje visualmente.
- Permitir cerrar alertas no críticas.
- Usar los estilos definidos por la librería de diseño.

### ❌ No
- No usar alertas para mostrar textos largos.
- No saturar la interfaz con múltiples alertas.
- No cambiar colores sin justificación.
- No reemplazar modales o tooltips con alertas.
- No eliminar el botón de cierre si la alerta no es crítica.

---

## Elementos clave

- **Ícono representativo** (opcional): círculo a la izquierda.
- **Texto del mensaje**: definido por \`textAlert\`.
- **Ícono de cierre**: siempre presente, excepto si se desactiva por diseño.
- **Color de fondo**: controlado por la propiedad \`style\`.

---
`,
      },
    },
  },
  argTypes: {
    style: {
      control: 'radio',
      options: ['default', 'success', 'pending', 'warning'],
    },
    showIcon: {
      control: 'boolean',
    },
    textAlert: {
      control: 'text',
    }
  },
  args: {
    textAlert: 'Estado',
    style: 'default',
    showIcon: true,
  },
} as Meta<AlertComponent>;

type Story = StoryObj<AlertComponent>;

export const Default: Story = { args: { style: 'default' } };
export const Success: Story = { args: { style: 'success' } };
export const Pending: Story = { args: { style: 'pending' } };
export const Warning: Story = { args: { style: 'warning' } };