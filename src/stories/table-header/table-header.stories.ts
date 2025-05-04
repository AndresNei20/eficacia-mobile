import { Meta, StoryFn } from '@storybook/angular';
import { TableHeaderComponent } from '../../app/components/table-header/table-header.component';

export default {
  title: 'Components/Table/TableHeader',
  component: TableHeaderComponent,
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
    title1: {
      description: 'titulo1 - placeholder del subtitulo de la tabla',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Title1' },
      },
    },
    title2: {
        description: 'titulo - placeholder del subtitulo de la tabla',
        control: 'text',
        table: {
          category: 'Content',
          defaultValue: { summary: 'Title2' },
        },
      },
    title3: {
    description: 'titulo - placeholder del subtitulo de la tabla',
    control: 'text',
    table: {
        category: 'Content',
        defaultValue: { summary: 'Title3' },
    },
    },
  },
  args: {
    title1: 'Nombre de categorias',
    title2: 'Cantidad',
    title3: 'Precio',
  },
} as Meta<TableHeaderComponent>;

const Template: StoryFn<TableHeaderComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
