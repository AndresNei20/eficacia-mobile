import { Meta, StoryObj } from '@storybook/angular';
import { ActionsCardComponent } from '../../app/components/actions-card/actions-card.component';

export default {
  title: 'Components/Cards/ActionsCard',
  component: ActionsCardComponent,
  tags: ['autodocs'],
  argTypes: {
    showTitle: { control: 'boolean' },
    showProgressCard: { control: 'boolean' },
    showForms: { control: 'boolean' },
    showImage: { control: 'boolean' },
    showButton2: { control: 'boolean' },
    showLink: { control: 'boolean' },
  },
  args: {
    showTitle: true,
    showProgressCard: true,
    showForms: true,
    showImage: true,
    showButton2: true,
    showLink: true,
  },
} as Meta<ActionsCardComponent>;

type Story = StoryObj<ActionsCardComponent>;

export const Default: Story = {};
