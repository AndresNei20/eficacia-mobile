import { Meta, StoryObj } from '@storybook/angular';
import { ProgressCardComponent } from '../../app/components/progress-card/progress-card.component';

export default {
  title: 'Components/Cards/ProgressCard',
  component: ProgressCardComponent,
  tags: ['autodocs'],
  argTypes: {
    headLeftText: {
      control: 'text',
      description: 'Texto de la izquierda en el encabezado',
    },
    headRightText: {
      control: 'text',
      description: 'Texto de la derecha en el encabezado',
    },
    showHeadText: {
      control: 'boolean',
      description: 'Mostrar sección de encabezado superior',
    },
    title: {
      control: 'text',
      description: 'Título principal de la tarjeta',
    },
    showTitle: {
      control: 'boolean',
      description: 'Mostrar título principal',
    },
    showCheck: {
      control: 'boolean',
      description: 'Mostrar ícono de check al lado del título',
    },
    percentValue: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Porcentaje de progreso',
    },
    showPercent: {
      control: 'boolean',
      description: 'Mostrar el valor del porcentaje en la barra',
    },
    activitiesText: {
      control: 'text',
      description: 'Texto inferior izquierdo (actividades)',
    },
    goalsText: {
      control: 'text',
      description: 'Texto inferior derecho (meta)',
    },
    showArrow: {
      control: 'boolean',
      description: 'Mostrar ícono de flecha a la derecha',
    },
  },
  args: {
    headLeftText: 'Faltan 2 actividades',
    headRightText: 'Meta 34',
    showHeadText: true,
    title: 'Encabezado',
    showTitle: true,
    showCheck: true,
    percentValue: 65,
    showPercent: true,
    activitiesText: 'Faltan 2 actividades',
    goalsText: 'Meta 34',
    showArrow: true,
  },
} as Meta<ProgressCardComponent>;

type Story = StoryObj<ProgressCardComponent>;

export const Default: Story = {};
