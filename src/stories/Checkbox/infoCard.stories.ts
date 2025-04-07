import { Meta, StoryObj } from '@storybook/angular';
import { InfoCardComponent } from '../../app/components/Checkbox/InfoCard/info-card.component';

export default {
  title: 'Components/Checkbox/Info Card',
  component: InfoCardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    selected: { control: 'boolean' },
    icon: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# 🧾 Tarjeta información reporte precios

Este componente representa una tarjeta informativa seleccionable, con un título, subtítulo y checkbox. Es útil en listados donde el usuario debe seleccionar múltiples elementos.

## 📦 Props

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| \`title\` | string | Título principal de la tarjeta |
| \`subtitle\` | string | Subtítulo o descripción secundaria |
| \`icon\` | string | Ícono o símbolo (puede cambiarse por SVG) |
| \`selected\` | boolean | Estado actual del checkbox |
        `,
      },
    },
  },
} as Meta<InfoCardComponent>;

type Story = StoryObj<InfoCardComponent>;

export const Default: Story = {
  args: {
    title: 'Nombre Categoría',
    subtitle: '# Marca | # Propias',
    iconSrc: 'mosaic',
    selected: true,
  },
};
