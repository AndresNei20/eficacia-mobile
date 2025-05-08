import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownCardComponent } from '../../app/components/dropdown-card/dropdown-card.component';

const meta: Meta<DropdownCardComponent> = {
  title: 'Components/Cards/Dropdown Card',
  component: DropdownCardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
      description: 'Header',
    },
    title: {
        control: 'text',
        description: 'Title',
      },
    subtitle: {
      control: 'text',
      description: 'Subtitle',
    },
    body: {
        control: 'text',
        description: 'Body description',
    },
    caption: {
      control: 'text',
      description: 'Caption',
    },
    stateText: {
      control: 'text',
      description: 'state Text',
    },
    
    
  },
};

export default meta;
type Story = StoryObj<DropdownCardComponent>;

export const Default: Story = {
  args: {
    header: 'Verificación de limpieza en góndola',
    caption: 'Única ejecución',
    title: 'Detalle',
    subtitle: 'Visita comecial completa',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu blandit diam amet, ac commodo blandit facilisis. Tincidunt ultricies congue cras habitasse sem eu. Ut rutrum non malesuada est. Augue egestas vestibulum dolor, lectus mauris, odio ut.',
    stateText: 'Text state'
  },
};