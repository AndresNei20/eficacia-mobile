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
# Email alert

## Uso

Se utiliza para mostrar información de contacto del usuario de forma destacada,
con opción de descartar la alerta.

---

## Elementos clave

- **Nombre:** Nombre del usuario.
- **Email:** Correo electrónico del usuario.
- **Botón de cierre:** Permite eliminar la alerta.
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
