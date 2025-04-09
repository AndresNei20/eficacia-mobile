import { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from '../../app/components/progress-bar/progress-bar.component';

export default {
  title: 'Components/ProgressBar/ProgressBar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    color: {
      control: 'radio',
      options: ['green', 'yellow', 'red'],
    }
  },
  args: {
    value: 65,
    color: 'green',
  },
} as Meta<ProgressBarComponent>;

type Story = StoryObj<ProgressBarComponent>;

export const Green: Story = { args: { color: 'green' } };
export const Yellow: Story = { args: { color: 'yellow' } };
export const Red: Story = { args: { color: 'red' } };
