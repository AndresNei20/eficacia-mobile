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
  }
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