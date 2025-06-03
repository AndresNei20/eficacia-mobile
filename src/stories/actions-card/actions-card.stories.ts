import type { Meta, StoryObj } from '@storybook/angular';
import { ActionsCardComponent } from '../../app/components/actions-card/actions-card.component';

const meta: Meta<ActionsCardComponent> = {
  title: 'Components/Cards/ActionsCard',
  component: ActionsCardComponent,
  tags: ['autodocs'],
  argTypes: {
    showImage: {
      control: 'boolean',
      description: 'Muestra u oculta la imagen superior',
    },
    showTitle: {
      control: 'boolean',
      description: 'Muestra u oculta el título “Pendiente”',
    },
    titleText: {
      control: 'text',
      description: 'Texto que aparece en el título (por defecto: “Pendiente”)',
    },
    showProgressCard: {
      control: 'boolean',
      description: 'Muestra u oculta el progress-card interno',
    },
    progressValue: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Valor de porcentaje (0–100) para la barra de progreso',
    },
    activitiesText: {
      control: 'text',
      description: 'Texto a la izquierda bajo la barra',
    },
    goalsText: {
      control: 'text',
      description: 'Texto a la derecha bajo la barra',
    },
    progressStatus: {
      control: 'radio',
      options: ['green', 'yellow', 'red'],
      description: 'Color (status) de la barra de progreso',
    },
    showForms: {
      control: 'boolean',
      description: 'Muestra u oculta la sección con los inputs',
    },
    showButton2: {
      control: 'boolean',
      description: 'Muestra u oculta el segundo botón en la sección de botones',
    },
    showLink: {
      control: 'boolean',
      description: 'Muestra u oculta el enlace inferior “Continuar sin complementar”',
    },
  },
  args: {
    showImage: true,
    showTitle: true,
    titleText: 'Pendiente',
    showProgressCard: true,
    progressValue: 32,
    activitiesText: 'Faltan 2 actividades',
    goalsText: 'Meta 34',
    progressStatus: 'yellow',
    showForms: true,
    showButton2: true,
    showLink: true,
  },
};

export default meta;
type Story = StoryObj<ActionsCardComponent>;

export const Default: Story = {};
