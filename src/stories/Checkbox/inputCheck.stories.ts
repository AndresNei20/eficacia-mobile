import { Meta, StoryObj } from '@storybook/angular';
import { InputCheckComponent } from '../../app/components/Checkbox/InputCheck/input-check.component';

export default {
  title: 'Components/Checkbox/Input Check',
  component: InputCheckComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean' },
    type: {
      control: 'radio',
      options: ['checkbox', 'radio'],
      description: 'Tipo de selección visual',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ☑️ Input Check

Este componente representa un ítem seleccionable que simula un campo tipo input, pero con funcionalidad de **checkbox** o **radio button**, ideal para flujos donde el usuario debe seleccionar opciones de manera visual.

---

## 🧩 Uso

- Selector de ítems en formularios simples.
- Alternativas visuales de preferencia (una o varias).
- Se integra con \`storybook-checkbox\` o \`storybook-radio-button\` automáticamente según el tipo.

---

## ⚙️ Props

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| \`label\` | string | Texto visible al usuario |
| \`selected\` | boolean | Define si el ítem está activo o no |
| \`type\` | 'checkbox' \| 'radio' | Determina el ícono de selección visual |
        `,
      },
    },
  },
} as Meta<InputCheckComponent>;

type Story = StoryObj<InputCheckComponent>;

export const Checkbox: Story = {
  args: {
    label: 'Opción con checkbox',
    selected: true,
    type: 'checkbox',
  },
};

export const Radio: Story = {
  args: {
    label: 'Opción con radio button',
    selected: true,
    type: 'radio',
  },
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px">
        <storybook-input-check
          label="Checkbox activo"
          [selected]="true"
          type="checkbox"
        ></storybook-input-check>

        <storybook-input-check
          label="Checkbox inactivo"
          [selected]="false"
          type="checkbox"
        ></storybook-input-check>

        <storybook-input-check
          label="Radio seleccionado"
          [selected]="true"
          type="radio"
        ></storybook-input-check>

        <storybook-input-check
          label="Radio sin seleccionar"
          [selected]="false"
          type="radio"
        ></storybook-input-check>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Muestra todas las variantes visuales posibles para `InputCheck`.',
      },
    },
  },
};
