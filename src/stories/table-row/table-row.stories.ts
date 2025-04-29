import { Meta, StoryObj } from '@storybook/angular';
import { TableRowComponent } from '../../app/components/table-row/table-row.component';

const meta: Meta<TableRowComponent> = {
  title: 'Components/Table/TableRow',
  component: TableRowComponent,
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
        component: 'A table row component with optional top border',
      },
    },
  },
  argTypes: {
    title1: {
      description: 'First column title',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Title1' },
      },
    },
    title2: {
      description: 'Second column title',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Title2' },
      },
    },
    title3: {
      description: 'Third column title',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Title3' },
      },
    },
    showTopBorder: {
      description: 'Show top border line',
      control: 'boolean',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'false' },
      },
    },
    borderStyle: {
      description: 'Border style when shown',
      control: 'select',
      options: ['solid', 'dotted'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'solid' },
      },
    },
  },
  args: {
    title1: 'Nombre de categorias',
    title2: 'Cantidad',
    title3: 'Precio',
    showTopBorder: false,
    borderStyle: 'solid',
  },
};

export default meta;
type Story = StoryObj<TableRowComponent>;

export const Default: Story = {};

export const WithSolidBorder: Story = {
  args: {
    showTopBorder: true,
    borderStyle: 'solid'
  }
};

export const WithDottedBorder: Story = {
  args: {
    showTopBorder: true,
    borderStyle: 'dotted'
  }
};