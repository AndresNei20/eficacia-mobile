import { Meta, StoryObj } from '@storybook/angular';
import { ProgressCardComponent } from '../../app/components/progress-card/progress-card.component';

export default {
  title: 'Components/Cards/ProgressCard',
  component: ProgressCardComponent,
  tags: ['autodocs'],
  argTypes: {
    headLeftText: { control: 'text' },
    headRightText: { control: 'text' },
    showHeadText: { control: 'boolean' },
    title: { control: 'text' },
    showTitle: { control: 'boolean' },
    showCheck: { control: 'boolean' },
    percentValue: { control: { type: 'range', min: 0, max: 100 } },
    showPercent: { control: 'boolean' },
    status: {
      control: 'radio',
      options: ['green', 'yellow', 'red'],
    },
    activitiesText: { control: 'text' },
    goalsText: { control: 'text' },
    showArrow: { control: 'boolean' },
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
    status: 'green',
    activitiesText: 'Faltan 2 actividades',
    goalsText: 'Meta 34',
    showArrow: true,
  },
} as Meta<ProgressCardComponent>;

type Story = StoryObj<ProgressCardComponent>;

export const Default: Story = {};