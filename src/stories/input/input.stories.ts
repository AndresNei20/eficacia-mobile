import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../../app/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Form/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`
---

## 🧩 Uso

El Input se emplea en formularios y configuraciones donde el usuario debe ingresar información manualmente. Se usa en:

- Formularios de autenticación (login, registro, recuperación de contraseña).
- Campos de búsqueda en la aplicación.
- Introducción de datos personales o configuraciones de usuario..

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


# ☑️ Componente

## 🧩 Uso
- El Input cuenta con diferentes estados que indican su funcionalidad y validación:
- Unclicked (Normal): Muestra el campo listo para la entrada de texto. 
- Clicked (Enfocado): Se resalta cuando el usuario está ingresando datos. 
- Error: Indica que la entrada es inválida con un borde rojo y un mensaje de error.

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Etiqueta/Título   |  Describe el propósito del Input.                         |
| Campo de Texto | Espacio donde el usuario ingresa la información.                                  |
| Placeholder | Texto indicativo dentro del campo antes de que se ingrese contenido.           |
| Mensaje de Error | Indicación visual y textual cuando el valor ingresado no es válido.   |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Controles básicos
    label: {
      control: 'text',
      description: 'Texto de la etiqueta del input',
      table: {
        type: { summary: 'string' },
        category: 'Content'
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
      table: {
        type: { summary: 'string' },
        category: 'Content'
      }
    },
    value: {
      control: 'text',
      description: 'Valor inicial del input',
      table: {
        type: { summary: 'string' },
        category: 'Content'
      }
    },

    // Configuración de tipo
    type: {
      control: 'radio',
      options: ['textField', 'multiline'],
      description: 'Tipo de input: Campo de texto simple o área de texto multilínea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'textField' },
        category: 'Type'
      }
    },

    // Estado y validación
    state: {
      control: 'radio',
      options: ['default', 'error', 'disabled'],
      description: 'Estado visual del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'State'
      }
    },
    errorText: {
      control: 'text',
      description: 'Mensaje de error (sólo se muestra cuando state="error")',
      table: {
        type: { summary: 'string' },
        category: 'State'
      }
    },
    showRequired: {
      control: 'boolean',
      description: 'Muestra asterisco indicando campo obligatorio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State'
      }
    },

    // Iconos
    showIcon: {
      control: 'boolean',
      description: 'Mostrar/ocultar ícono',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Icons'
      }
    },

    // Alertas
    ShowAlert: {
      control: 'boolean',
      description: 'Mostrar/ocultar alerta asociada',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Alerts'
      }
    },
    alertText: {
      control: 'text',
      description: 'Texto de la alerta',
      table: {
        type: { summary: 'string' },
        category: 'Alerts'
      }
    },

    // Layout
    width: {
      control: 'text',
      description: 'Ancho personalizado (ej: "100%", "300px", "50vw")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
        category: 'Layout'
      }
    }
  },
  args: { 
    type: 'textField',
    state: 'enable',
    placeholder: 'Introduce tu texto',
    showIcon: false,
    showRequired: false,
    ShowAlert: false
  }
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Nombre completo',
  }
};
