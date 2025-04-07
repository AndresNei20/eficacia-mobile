import { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from '../../app/components/alert/alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alerts/EstadoAlert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['light', 'success', 'warning', 'danger'],
    },
    state: {
      control: 'radio',
      options: ['active', 'hovered', 'pressed', 'disabled'],
    },
    showClose: {
      control: 'boolean',
    }
  },
  args: {
    text: 'Estado',
    showClose: true,
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Blanco: Story = {
  args: {
    appearance: 'light',
  },
};

export const Verde: Story = {
  args: {
    appearance: 'success',
  },
};

export const Amarillo: Story = {
  args: {
    appearance: 'warning',
  },
};

export const Rojo: Story = {
  args: {
    appearance: 'danger',
  },
};
