import { IonicModule } from '@ionic/angular';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button (Ionic)',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot()],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
      description: 'Color del botón según la paleta de Ionic'
    },
    fill: {
      control: 'select',
      options: ['solid', 'outline', 'clear'],
      defaultValue: 'solid'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    primary: {
      control: 'boolean',
      description: 'Atajo para color="primary"'
    },
    onClick: {
      action: 'clicked'
    }
  },
  args: { 
    label: 'Button',
    onClick: fn() 
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Secondary',
  },
};

export const DangerOutline: Story = {
  args: {
    color: 'danger',
    fill: 'outline',
    label: 'Danger Outline',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
};

export const CustomColor: Story = {
  args: {
    color: 'success',
    label: 'Success',
  },
};