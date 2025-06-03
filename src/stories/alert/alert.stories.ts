import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from '../../app/components/alert/alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alerts/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

Este componente puede incluir un mensaje de texto, un ícono representativo del tipo de alerta y, en algunos casos, un botón de acción para responder al mensaje. Las alertas pueden ser temporales o persistentes, dependiendo del contexto de uso.

- **Mensajes de éxito:** Confirmar que una acción del usuario se ha realizado correctamente (ejemplo: “Tu solicitud ha sido enviada con éxito”).
- **Advertencias:** Notificar sobre situaciones que requieren atención, pero que no bloquean la acción del usuario (ejemplo: “Tu sesión está por expirar”).
- **Errores:** Informar fallos en el sistema o en una acción del usuario (ejemplo: “Error al cargar el archivo, intenta nuevamente”).
- **Información general:** Mostrar datos relevantes sin requerir una acción inmediata (ejemplo: “Nuevo horario de atención disponible”).
- **Estados de carga o procesos en segundo plano:** Alertar sobre tareas en progreso o cambios de estado (ejemplo: “Procesando tu solicitud…”).
- **Notificaciones del sistema:** Anunciar eventos importantes que afectan la experiencia del usuario (ejemplo: “Nueva actualización disponible”).
- **Validaciones de formularios:** Indicar errores o requisitos en campos de entrada (ejemplo: “El correo ingresado no es válido”).
- **Autenticación y permisos:** Informar sobre accesos restringidos o credenciales incorrectas (ejemplo: “Tu contraseña es incorrecta, intenta de nuevo”).

---

## Mejores prácticas

### ✅ Sí

- **Utilizar las alertas según su propósito:** Cada tipo de alerta (éxito, advertencia, error e información) debe usarse en el contexto correcto.
- **Mantener los mensajes concisos y claros:** Evitar texto innecesario o mensajes largos que puedan ser ignorados.
- **Incluir iconografía cuando sea necesario:** Ayuda a reforzar visualmente el mensaje sin depender solo del texto.
- **Configurar el tiempo de visibilidad adecuado:** Las alertas temporales deben permanecer el tiempo suficiente para ser leídas sin interrumpir la experiencia del usuario.
- **Permitir la opción de cerrar alertas cuando sea relevante:** En alertas no críticas, se recomienda agregar un botón de cierre o acción.
- **Mantener consistencia en colores y estilos:** Usar las variantes de alerta definidas en la librería UI sin personalización excesiva.

### 🚫 No

- **No usar alertas para contenido extenso:** Si se necesita más información, es mejor redirigir al usuario a otra vista.
- **No saturar la interfaz con alertas simultáneas:** Demasiadas notificaciones pueden ser intrusivas y afectar la experiencia de usuario.
- **No cambiar los colores de las alertas sin justificación:** Cada color tiene un propósito específico en la jerarquía visual.
- **No usar alertas en lugar de modales o tooltips:** Si el usuario necesita interactuar con la información, se deben usar otros componentes más adecuados.
- **No bloquear la navegación con alertas persistentes:** Las alertas deben integrarse de manera no obstructiva en la interfaz.
- **No eliminar la opción de cierre en alertas informativas o no críticas:** El usuario debe poder descartar mensajes que no requieran acción obligatoria.

---

## Elementos clave

- **Ícono representativo:** Refuerza visualmente el tipo de alerta (éxito, error, advertencia, información).
- **Mensaje corto:** Texto conciso que comunica la información de manera clara.
- **Botón de cierre:** Permite al usuario descartar la alerta si es necesario.
        `,
      },
    },
  },
  argTypes: {
    textAlert: {
      control: 'text',
      description: 'Texto que se muestra dentro de la alerta',
    },
    showIcon: {
      control: 'boolean',
      description: 'Muestra u oculta el ícono del círculo izquierdo',
    },
    style: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description:
        'Fondo de la alerta (default = blanco, success = verde, warning = amarillo, error = rojo)',
    },
    type: {
      control: 'select',
      options: ['alert', 'check', 'x'],
      description: 'Ícono que aparece dentro del círculo izquierdo',
    },
    color: {
      control: 'select',
      options: ['green', 'yellow', 'red'],
      description: 'Color del círculo que rodea al ícono izquierdo',
    },
  },
  args: {
    textAlert: 'Estado',
    showIcon: true,
    style: 'default',
    type: 'alert',
    color: 'green',
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Default: Story = {};
