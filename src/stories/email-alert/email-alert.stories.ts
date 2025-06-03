import { Meta, StoryObj } from '@storybook/angular';
import { EmailAlertComponent } from '../../app/components/email-alert/email-alert.component';

export default {
  title: 'Components/Alerts/EmailAlert',
  component: EmailAlertComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

- Visualizar los correos electrónicos seleccionados dentro de un formulario o proceso.
- Identificar claramente a cada destinatario con nombre y correo.
- Permitir la eliminación de un correo agregado de manera sencilla.
- Usado comúnmente en la selección de múltiples usuarios para envío de alertas, notificaciones o asignaciones.

---

## Elementos clave

- **Nombre del usuario (ej. Daniela Perez):** Texto principal que identifica al destinatario.
- **Dirección de correo electrónico secundaria:** Ubicada justo debajo del nombre para mayor claridad.
- **Botón de cierre (❌):** Permite eliminar el ítem de la lista con un solo clic.
- **Estilo pill o tag:** Fondo sólido (azul oscuro), esquinas redondeadas, diseño compacto.
- **Contraste adecuado:** Asegura legibilidad entre el texto y el fondo del tag.
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    email: { control: 'text' },
  },
  args: {
    name: 'Daniela Perez',
    email: 'daniela1.perez2@xxx.co',
  },
} as Meta<EmailAlertComponent>;

type Story = StoryObj<EmailAlertComponent>;

export const Default: Story = {};
