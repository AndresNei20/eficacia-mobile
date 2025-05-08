import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from '../../app/components/avatar/avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['extra-large', 'large', 'medium', 'small', 'extra-small'],
      description: 'Tamaño del avatar. Define las dimensiones y el tamaño del ícono de notificación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Size',
      }
    },
    content: {
      control: { type: 'radio' },
      options: ['image', 'text'],
      description: 'Tipo de contenido a mostrar. **Image** (foto de perfil) o **Text** (iniciales)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'image' },
        category: 'Content',
      }
    },
    showBadge: {
      control: { type: 'boolean' },
      description: 'Muestra un indicador de notificación (badge) en la esquina superior derecha',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Badge',
      }
    },
    avatarText: {
      control: 'text',
      description: 'Texto o iniciales a mostrar cuando content="text". Máx. 2 caracteres recomendados',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'AA' },
        category: 'Content',
      }
    },
    image: {
      control: 'text',
      description: 'URL de la imagen de perfil. Si no se proporciona, usa la imagen por defecto',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'assets/images/avatar-default-img.png' },
        category: 'Content',
      }
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`
---

## 🧩 Uso

El avatar en Eficacia se usa para identificar visualmente a un usuario dentro de la interfaz. Se implementa en:

- Perfiles de usuario en tarjetas o listas.
- Encabezados o barras de navegación.
- Tableros de puntuaciones o rankings.
- Chats, comentarios y actividades colaborativas.

---

## ✅ Mejores prácticas

| ✔️ Sí | ❌ No |
|------|------|
| Mantener la estructura del componente en Figma: Usar las variantes y propiedades predefinidas sin alterar la configuración base. | No modificar las máscaras de imagen ni redimensionar manualmente el contenedor del avatar. |
| Utilizar imágenes de alta calidad: Asegurar que las imágenes sean proporcionales y no pixeladas para mantener una apariencia profesional. | No añadir elementos externos dentro del componente que alteren su alineación o estructura. |
| Activar/desactivar elementos mediante variantes: Insignias, nombres y puntuaciones deben configurarse desde las propiedades del componente sin agregar elementos manualmente. | No cambiar los colores o proporciones de las insignias fuera de las configuraciones establecidas en el diseño original.  |
| Respetar los espacios y alineaciones: Mantener la tipografía y los elementos dentro de la jerarquía definida en la librería UI de Eficacia. | No reemplazar el Fallback por imágenes externas sin ajustar su escalado correctamente. |
| Usar Auto Layout para escalabilidad: Permitir que el avatar se adapte correctamente dentro de los layouts sin desactivar esta propiedad. | No desactivar Auto Layout, ya que esto afectará la responsividad del componente en la UI. |

---


# ☑️ Componente

## 🧩 Uso
- El componente Avatar está estructurado con variantes para manejar diferentes estados y configuraciones.
- Se deben utilizar las propiedades configurables en Figma (ejemplo: Imagen, Insignia, Tamaño) para mantener consistencia en su aplicación.
- El avatar se utiliza en contextos donde es necesario identificar a un usuario, como en listas, encabezados o sistemas de gamificación.
- La imagen de perfil se reemplaza dentro del frame del avatar sin modificar su estructura base.

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Imagen de usuario      | Contenedor principal que muestra la imagen del usuario.                        |
| Badge                  | Elemento opcional que se superpone a la imagen de usuario. Puede representar roles, logros o estados dentro del sistema                                    |
| Nombre de usuario      | Texto asociado al avatar que muestra el nombre del usuario.         |
| Puntos                 | Indicador numérico opcional que muestra la puntuación del usuario.     |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    content: 'image',
    showBadge: true,
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};