import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { SearchComponent } from '../components/search/search.component';
import { IonInput } from '@ionic/angular/standalone';

const meta: Meta<SearchComponent> = {
  title: 'Components/Search (Ionic)',
  component: SearchComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [IonInput],
    }),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto del placeholder para el campo de búsqueda',
    },
    ionInput: {
      action: 'ionInput',
      description: 'Evento emitido cuando el valor de búsqueda cambia',
    },
  },
  args: {
    placeholder: 'Buscar...',
    ionInput: fn(),
  },
};

export default meta;
type Story = StoryObj<SearchComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Buscar...',
    
  },
};