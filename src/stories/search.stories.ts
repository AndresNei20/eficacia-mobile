import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { SearchComponent } from '../components/search/search.component';
import { IonSearchbar } from '@ionic/angular/standalone';

const meta: Meta<SearchComponent> = {
  title: 'Components/Search (Ionic)',
  component: SearchComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [IonSearchbar],
    }),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto del placeholder para el campo de búsqueda',
    },
  },
  args: {
    placeholder: 'Buscar...',
    onChange: fn(),
    onCancel: fn()
  },
};

export default meta;
type Story = StoryObj<SearchComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Buscar...',
    // Storybook 7+ maneja automáticamente los eventos si los nombras correctamente
    onChange: fn(),
    onCancel: fn()
  },
};