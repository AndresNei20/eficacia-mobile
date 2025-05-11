import type { Meta, StoryObj } from '@storybook/angular';
import { CalendarDropdownComponent } from '../../app/components/calendar-dropdown/calendar-dropdown.component';

const meta: Meta<CalendarDropdownComponent> = {
  title: 'Components/Dropdown/CalendarDropdown',
  component: CalendarDropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    textField: {
      control: 'text',
      description: 'Etiqueta cuando está cerrado',
    },
    expanded: {
      control: 'boolean',
      description: 'Abierto (true) / cerrado (false)',
    },
  },
  args: {
    textField: 'Título dropdown',
    expanded: false,
  },
};

export default meta;
type Story = StoryObj<CalendarDropdownComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <app-calendar-dropdown
        [textField]="textField"
        [expanded]="expanded"
        (expandedChange)="expanded = $event">
      </app-calendar-dropdown>
    `,
  }),
};
