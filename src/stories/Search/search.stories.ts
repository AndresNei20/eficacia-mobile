import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { IonInput } from '@ionic/angular/standalone';
import { SearchComponent } from '../../app/components/search/search.component';

const meta: Meta<SearchComponent> = {
  title: 'Components/Search/Search (Ionic)',
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