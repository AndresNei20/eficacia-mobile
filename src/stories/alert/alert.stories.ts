import { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from '../../components/alert/alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alertas/Estado',
  component: AlertComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Verde: Story = {
  args: {
    label: 'Estado',
    color: 'success',
    showClose: true,
  },
};

export const Amarillo: Story = {
  args: {
    label: 'Estado',
    color: 'warning',
    showClose: true,
  },
};

export const Rojo: Story = {
  args: {
    label: 'Estado',
    color: 'danger',
    showClose: true,
  },
};

export const Blanco: Story = {
  args: {
    label: 'Estado',
    color: 'light',
    showClose: true,
  },
};
