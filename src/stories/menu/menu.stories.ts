import { Meta, StoryFn } from '@storybook/angular';
import { MenuComponent } from '../../app/components/menu/menu.component';

export default {
  title: 'Components/Menu/Menu',
  component: MenuComponent,
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
### Características:
- Componente de menú con iconos y búsqueda
- Emite eventos al hacer clic en los iconos
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    onClickDisplay: {
      description: 'Evento emitido cuando cambia el valor de búsqueda',
      table: {
        category: 'Events',
      },
      action: 'searchChange',
    },
    onClickBell: {
      description: 'Evento emitido cuando cambia el valor de búsqueda',
      table: {
        category: 'Events',
      },
      action: 'bellClicked',
    },
  },
  args: {

  },
} as Meta<MenuComponent>;

const Template: StoryFn<MenuComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});