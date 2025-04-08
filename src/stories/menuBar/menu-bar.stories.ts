import type { Meta, StoryObj } from '@storybook/angular';
import { MenuBarComponent } from "../../app/components/menu-bar/menu-bar.component";

const meta: Meta<MenuBarComponent> = {
  title: 'Components/Navigation/Menu Bar',
  component: MenuBarComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};


export default meta;
type Story = StoryObj<MenuBarComponent>;

export const Default: Story = {
  args: {
    buttons: [
        {
          selected: false,
          name: 'inicio',
        },
        {
          selected: false,
          name: 'agenda',
        },{
          selected: false,
          name: 'gestion',
        },{
          selected: false,
          name: 'portafolio',
        },{
          selected: false,
          name: 'perfil',
        },
      ],
  },
};

