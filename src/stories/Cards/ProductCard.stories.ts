import { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from '../../app/components/cards/ProductCard/ProductCard.component';


/* 
  We need to improve this card !!!
*/
export default {
  title: 'Components/Cards/ProductCard',
  component: ProductCardComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['product', 'floating', 'little', 'price'],
    },
    // Product
    showCheckbox: { control: 'boolean' },
    showNumbers: { control: 'boolean' },

    // Floating
    showIcon: { control: 'boolean' },
    text: { control: 'text' },

    // Little card
    showIcon1: { control: 'boolean' },
    showIcon2: { control: 'boolean' },
    showIcon3: { control: 'boolean' },
    information1: { control: 'text' },
    information2: { control: 'text' },
    information3: { control: 'text' },
    caption: { control: 'text' },
    title: { control: 'text' },
    showArrow: { control: 'boolean' },

    // Price card
    product: { control: 'text' },
    price: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<ProductCardComponent>;

type Story = StoryObj<ProductCardComponent>;

export const Default: Story = {
  args: {
    type: 'product',
    showCheckbox: true,
    showNumbers: true,
    showIcon: true,
    text: 'Precio descuento',
    showIcon1: true,
    showIcon2: true,
    showIcon3: true,
    information1: '50',
    information2: '2',
    information3: '4',
    caption: '8:15 AM',
    title: 'Reporte de agotados',
    showArrow: true,
    product: 'Adhesivo Aquence',
    price: '$120.000',
  },
};
