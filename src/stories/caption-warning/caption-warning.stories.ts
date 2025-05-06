import { Meta, StoryObj } from '@storybook/angular';
import { CaptionWarningComponent } from '../../app/components/caption-warning/caption-warning.component';

const meta: Meta<CaptionWarningComponent> = {
  title: 'Components/Modal/CaptionWarning',
  component: CaptionWarningComponent,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Mensaje de advertencia a mostrar'
    }
  }
};

export default meta;

type Story = StoryObj<CaptionWarningComponent>;

export const Default: Story = {
  args: {
    message: 'Debes completar las preguntas (*)'
  }
};

export const CustomMessage: Story = {
  args: {
    message: '¡Atención! Campo obligatorio'
  }
};

export const LongMessage: Story = {
  args: {
    message: 'Este es un mensaje de advertencia mucho más largo que el normal para probar el comportamiento'
  }
};