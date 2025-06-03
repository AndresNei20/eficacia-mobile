import { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenuComponent } from '../../app/components/dropdown-menu/dropdown-menu.component';

export default {
  title: 'Components/Dropdown/DropdownMenu',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  argTypes: {
    textField: { control: 'text'},
    options: { control: 'object'},
    expanded: { control: 'boolean'},
    error: { control: 'boolean'},
    errorText: { control: 'text'},
  },
  args: {
    textField: 'Título dropdown',
    options: ['Label 1', 'Label 2', 'Label 3'],
    expanded: false,
    error: false,
    errorText: 'Label-error',
  },
  parameters: {
    docs: {
      description: {
        component: `
**Variables**

- **textField:** Texto cuando está cerrado.  
- **options:** Lista de opciones.  
- **expanded:** Booleano para controlar abierto/cerrado.  
- **error:** Activa estado de error.  
- **errorText:** Mensaje debajo en rojo.

**Uso**

- Usa \`[expanded]\` / \`(expandedChange)\` para two-way binding si quieres controlar desde una variable.  
- Se cierra al clicar fuera.  

**Elementos clave**

- Contenedor principal.  
- Wrapper clicable con flecha.  
- Lista en overlay (no empuja contenido).  
- Estado de error pinta todo de rojo.
        `,
      },
    },
  },
} as Meta<DropdownMenuComponent>;

type Story = StoryObj<DropdownMenuComponent>;

export const Default: Story = {};
