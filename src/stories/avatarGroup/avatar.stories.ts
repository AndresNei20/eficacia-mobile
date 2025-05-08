import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarGroupComponent } from '../../app/components/avatar-group/avatar-group.component';

const meta: Meta<AvatarGroupComponent> = {
  title: 'Components/Avatar/Avatar Group',
  component: AvatarGroupComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Muestra un grupo de avatares con un máximo configurable. Los excedentes se muestran como un contador.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
      description: 'Tamaño uniforme para todos los avatares del grupo. Afecta tanto a las imágenes como a los avatares de texto',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Layout'
      }
    },
    spacing: {
      control: { type: 'radio' },
      options: ['medium', 'small'],
      description: 'Espacio entre avatares. **Medium** para separación estándar, **Small** para grupos superpuestos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Layout'
      }
    },
    maxDisplay: {
      control: { 
        type: 'number',
        min: 1,
        max: 10,
        step: 1
      },
      description: 'Número máximo de avatares visibles antes de mostrar el contador (+X). Valor recomendado entre 3-5',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
        category: 'Behavior'
      }
    },
    avatars: {
      control: { type: 'object' },
      description: 'Lista de avatares. Cada objeto debe tener:',
      table: {
        type: { 
          summary: `{
      content: 'image'|'text',
      image?: string,
      avatarText?: string
    }[]` 
        },
        defaultValue: { summary: '[]' },
        category: 'Content'
      }
    }
  },
  args: {
    size: 'medium',
    spacing: 'medium',
    maxDisplay: 5,
    avatars: [
      { content: 'image', image: 'https://i.pravatar.cc/150?img=1' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=2' },
      { content: 'text', avatarText: 'JD' },
      { content: 'text', avatarText: 'AM' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=3' },
      { content: 'text', avatarText: 'TS' }
    ]
  }
};

export default meta;
type Story = StoryObj<AvatarGroupComponent>;

export const Default: Story = {};

export const LargeGroup: Story = {
  args: {
    maxDisplay: 3,
    avatars: [
      { content: 'image', image: 'https://i.pravatar.cc/150?img=4' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=5' },
      { content: 'text', avatarText: 'RG' },
      { content: 'text', avatarText: 'LP' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=6' },
      { content: 'text', avatarText: 'MC' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=7' }
    ]
  },
  name: 'Grupo grande (mostrando +4)'
};
