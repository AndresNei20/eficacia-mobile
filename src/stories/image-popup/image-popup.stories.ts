import type { Meta, StoryObj } from '@storybook/angular';
import { ImagePopupComponent } from '../../app/components/image-popup/image-popup.component';

const meta: Meta<ImagePopupComponent> = {
  title: 'Components/Popups/ImagePopup',
  component: ImagePopupComponent,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text', description: 'Ruta de la imagen superior' },

    groupDescription: {
      control: 'text',
      description: 'Texto central con líneas a los lados',
    },
    showGroupDescription: { control: 'boolean' },

    percentValue: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Porcentaje de la barra de progreso',
    },
    activitiesText: { control: 'text', description: 'Texto bajo la barra (izq)' },
    goalsText: { control: 'text', description: 'Texto bajo la barra (der)' },

    title: { control: 'text', description: 'Título principal' },
    showTitle: { control: 'boolean' },
    description: { control: 'text', description: 'Texto secundario bajo título' },
    showDescription: { control: 'boolean' },

    mobileButton1Label: { control: 'text' },
    showMobileButtons1: { control: 'boolean' },
    mobileButton2Label: { control: 'text' },
    showMobileButtons2: { control: 'boolean' },

    linkMessageText: { control: 'text', description: 'Texto del link inferior' },
    showLinkMessage: { control: 'boolean' },
  },
  args: {
    imageSrc: '/assets/images/popup-default.png',

    groupDescription: 'Debes completar las preguntas (*)',
    showGroupDescription: true,

    percentValue: 65,
    activitiesText: 'Faltan 2 actividades',
    goalsText: 'Meta 34',

    title: 'Página incompleta',
    showTitle: true,
    description:
      'La página está incompleta, debes llenar todas las preguntas obligatorias *.',
    showDescription: true,

    mobileButton1Label: 'button',
    showMobileButtons1: true,
    mobileButton2Label: 'button',
    showMobileButtons2: true,

    linkMessageText: 'Continuar sin complementar',
    showLinkMessage: true,
  },
};

export default meta;
type Story = StoryObj<ImagePopupComponent>;

export const Default: Story = {};
