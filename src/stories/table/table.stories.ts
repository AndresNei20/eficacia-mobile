import { Meta, StoryFn } from '@storybook/angular';
import { TableComponent } from '../../app/components/table/table.component';

export default {
  title: 'Components/Table/Table Component',
  component: TableComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light', 
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      description: 'titulo - placeholder del titulo de la tabla',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Title' },
      },
    },
  },
  args: {
    header: 'Subtotales',
  },
} as Meta<TableComponent>;

const Template: StoryFn<TableComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
