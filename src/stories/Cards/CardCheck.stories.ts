import { Meta, StoryObj } from '@storybook/angular';
import { CardCheckComponent } from '../../app/components/cards/CardCheck/CardCheck.component';

export default {
  title: 'Components/Card/Card Check',
  component: CardCheckComponent,
  tags: ['autodocs'],
  argTypes: {
    showIcon: { control: 'boolean' },
    iconName: {
      control: 'select',
      options: [ 'inicio',
        'agenda',
        'add',
     'arrowRight',
        'shop',
        'gestion',
        'portafolio',
        'perfil',
        'question',
        'completed',
        'error',
        'started',
        'finished',
        'triangle',
        'logout',
        'mosaic'], 
    },
    showTitle: { control: 'boolean' },
    title: { control: 'text' },
    showLabel: { control: 'boolean' },
    label: { control: 'text' },
    showNumber: { control: 'boolean' },
    number: { control: 'number' },
    showCheckbox: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `

Componente flexible tipo tarjeta que permite visualizar información agrupada con controles configurables: íconos, títulos, etiquetas, número, y checkbox.

---

## 🧩 Props

| Propiedad     | Tipo      | Descripción                                         |
|---------------|-----------|-----------------------------------------------------|
| \`showIcon\`   | boolean   | Muestra u oculta el icono lateral izquierdo         |
| \`iconName\`   | string    | Nombre del ícono que será pasado al IconComponent  |
| \`showTitle\` | boolean   | Muestra u oculta el título                         |
| \`title\`      | string    | Texto del título principal                         |
| \`showLabel\` | boolean   | Muestra u oculta la etiqueta o subtítulo           |
| \`label\`      | string    | Texto de la etiqueta secundaria                    |
| \`showNumber\`| boolean   | Muestra u oculta el número a la derecha            |
| \`number\`     | number    | Número a mostrar                                    |
| \`showCheckbox\` | boolean| Muestra u oculta el componente Checkbox             |
| \`checked\`    | boolean   | Estado del checkbox                                |
        `,
      },
    },
  },
} as Meta<CardCheckComponent>;

type Story = StoryObj<CardCheckComponent>;

export const Default: Story = {
  args: {
    showIcon: true,
    iconName: 'mosaic',
    showTitle: true,
    title: 'Categoría 1',
    showLabel: true,
    label: 'TQ',
    showNumber: true,
    number: 2,
    showCheckbox: true,
    checked: false,
  },
};
