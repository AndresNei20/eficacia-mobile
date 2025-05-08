import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../app/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: { type: 'radio' },
      options: ['filled', 'outline', 'text'],
      description: 'Estilo visual del botón. **Filled** (sólido), **Outline** (bordeado) o **Text** (solo texto)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
        category: 'Style',
      }
    },
    state: {
      control: { type: 'radio' },
      options: ['disabled', 'active', 'pressed'],
      description: 'Estado interactivo. **Active** (interactivo), **Disabled** (bloqueado) o **Pressed** (en estado de clic)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'active' },
        category: 'State',
      }
    },
    orientation: {
      control: { type: 'radio' },
      options: ['center', 'left'],
      description: 'Alineación del contenido interno. **Center** (centrado) o **Left** (alineado a la izquierda)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
        category: 'Layout',
      }
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
      description: 'Tamaño del botón. **Small** (compacto) o **Medium** (estándar)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Size',
      }
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'error'],
      description: 'Esquema de color. **Primary** (color principal) o **Error** (acciones críticas)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: 'Style',
      }
    },
    iconStart: {
      control: { type: 'select' },
      options: ['add', 'arrowLeft', 'shop'],
      description: 'Ícono que aparece al inicio del botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'arrowLeft' },
        category: 'Icons',
      }
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['add', 'arrowRight', 'shop'],
      description: 'Ícono que aparece al final del botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'arrowRight' },
        category: 'Icons',
      }
    },
    showIconStart: {
      control: { type: 'boolean' },
      description: 'Mostrar/ocultar el ícono inicial. **True** (visible) o **False** (oculto)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Icons',
      }
    },
    showIconEnd: {
      control: { type: 'boolean' },
      description: 'Mostrar/ocultar el ícono final. **True** (visible) o **False** (oculto)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Icons',
      }
    },
    width: {
      control: { type: 'text' },
      description: 'Ancho personalizado del botón (ej: "100%", "200px")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '338px' },
        category: 'Layout',
      }
    },
    label: {
      control: { type: 'text' },
      description: 'Texto principal del botón',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      }
    }
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`

El botón en Eficacia se utiliza para desencadenar acciones dentro de la interfaz. Se implementa en:

---

## 🧩 Uso

- Formularios y envíos de datos. Para confirmar o cancelar acciones del usuario.
- Navegación y redirección. Para guiar a los usuarios a otras secciones o páginas.
- Interacciones clave. Como agregar elementos, compartir contenido o iniciar procesos.
- Acciones en listas o tarjetas. Como editar, eliminar o marcar elementos importantes.
- Flujos de confirmación. Para validar o rechazar decisiones en modales o alertas.

---

## ✅ Mejores prácticas

| ✔️ Sí | ❌ No |
|------|------|
| Mantener la estructura del componente en Figma: Usar las variantes y propiedades predefinidas sin modificar la configuración base. | No modificar el tamaño del botón manualmente. Usar las variantes predefinidas para garantizar coherencia en la UI. |
| Elegir estilos adecuados según la importancia de la acción: Usar botones primarios para acciones principales y secundarios/terciarios para opciones menos destacadas. | No agregar elementos externos dentro del componente. Evitar íconos, textos o decoraciones que no estén contemplados en la librería de diseño. |
| Configurar íconos y etiquetas mediante variantes: Si el botón incluye un ícono, activarlo desde las propiedades del componente en lugar de agregarlo manualmente. | No cambiar los colores o estilos fuera de las configuraciones establecidas. Respetar las definiciones de la librería UI de Eficacia para mantener consistencia. |
| Respetar los espacios y alineaciones: Asegurar que el botón mantenga la tipografía, padding y jerarquía visual definida en la librería UI de Eficacia. | No alterar la alineación del contenido interno. Mantener la disposición de íconos y texto según el diseño original. |
| Usar Auto Layout para escalabilidad: Permitir que el botón se adapte correctamente dentro de los layouts sin desactivar esta propiedad. | No desactivar Auto Layout. Esto afectará la adaptabilidad y responsividad del botón en la interfaz. |

---


# ☑️ Botón primario
## 🎛️ Variantes disponibles

| Variante    | Descripción                         |
|-------------|-------------------------------------|
| Default     | Caja sin marcar (borde gris)        |
| Checked     | Caja marcada (fondo azul, check)    |
| Disabled    | Inactivo, sin posibilidad de clic   |

---

## 🧩 Uso
- El componente Botón está estructurado con variantes para manejar diferentes estados y configuraciones.
- Se deben utilizar las propiedades configurables (ejemplo: Tipo, Estado, Icono, Texto) para mantener consistencia en su aplicación.
- El botón se usa en contextos donde es necesario desencadenar una acción, como en formularios, navegación o interacciones clave.
- Los íconos o etiquetas dentro del botón se configuran mediante variantes sin modificar su estructura base.

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Contenedor del botón   | Estructura principal que define su tamaño y forma.                         |
| Etiqueta               | Texto que describe la acción del botón.                                    |
| Ícono (opcional)       | Elemento gráfico que refuerza visualmente la acción del botón.             |
| Estado                 | Variantes como activo, inactivo o en carga que afectan la interacción.     |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    style: 'filled',
    color: 'primary',
    size: 'small',
    orientation: 'center',
    state: 'active',
    label: 'Button',

  },
};

export const Error: Story = {
  args: {
    style: 'filled',
    color: 'error',
    size: 'small',
    orientation: 'center',
    state: 'active',
    label: 'Button',
  },
};
