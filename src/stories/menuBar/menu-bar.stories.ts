import type { Meta, StoryObj } from '@storybook/angular';
import { MenuBarComponent } from "../../app/components/menu-bar/menu-bar.component";

const meta: Meta<MenuBarComponent> = {
  title: 'Components/Navigation/Menu Bar',
  component: MenuBarComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`

## 🧩 Uso
- Función: Se utiliza como la principal forma de navegación en la interfaz, normalmente para cambiar entre secciones principales de la aplicación.
- Ubicación: Generalmente se encuentra en la parte superior de la interfaz o en la parte inferior, en aplicaciones móviles, como la forma principal de acceder a las categorías o secciones clave.
- Accesibilidad: Es el componente de navegación principal que debería ser visible y accesible en todo momento.

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Nombre de la sección | El nombre de cada pestaña debe ser claro y descriptivo.                |
| Indicador de estado activo | Debería tener un diseño visual claro (subrayado, color o icono) para indicar cuál pestaña está activa.                                   |
| Íconos y texto | Las pestañas pueden combinar texto e íconos para mayor claridad y accesibilidad.        |
| Cantidad limitada de pestañas | Evita más de 5 pestañas, ya que demasiadas opciones pueden resultar abrumadoras.     |
| Diseño destacado | Debe ser prominente en la interfaz para que los usuarios lo reconozcan como el principal medio de navegación.   |
        `,
      },
    },
  },
  argTypes: {
    buttons: {
      control: 'object',
      description: `Array de botones del menú. Estructura:
      \`\`\`ts
      {
        name: string,    // Nombre del ítem
        selected?: boolean // Estado seleccionado
      }[]
      \`\`\``,
      table: {
        type: { summary: 'MenuItemProps[]' },
        defaultValue: { summary: '[]' },
        category: 'Content'
      }
    },
    selectedIndex: {
      control: { 
        type: 'number',
        min: 0,
        max: 5,
        step: 1
      },
      description: 'Índice del ítem seleccionado inicialmente',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'State'
      }
    }
  },
  tags: ['autodocs']
};


export default meta;
type Story = StoryObj<MenuBarComponent>;

export const Default: Story = {
  args: {
    buttons: [
        {
          selected: false,
          name: 'inicio',
        },
        {
          selected: false,
          name: 'agenda',
        },{
          selected: false,
          name: 'gestion',
        },{
          selected: false,
          name: 'portafolio',
        },{
          selected: false,
          name: 'perfil',
        },
      ],
  },
};
