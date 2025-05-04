import { Meta, StoryFn } from '@storybook/angular';
import { DetailCardCompComponent } from '../../app/components/detail-card-comp/detail-card-comp.component';

export default {
  title: 'Components/Cards/DetailCard/DetailCardComponent',
  component: DetailCardCompComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
    docs: {
      description: {
        component: `
# DetailCardCompComponent

Componente reutilizable que muestra información en formato de tarjeta con icono y texto descriptivo.

## Características Principales
- Muestra un icono y texto asociado
- Varios tipos de iconos disponibles
- Diseño adaptable a diferentes contextos
- Fácilmente personalizable

## Uso Básico
\`\`\`html
<detail-card-comp 
  [title]="'Texto descriptivo'" 
  [iconType]="'tipo-de-icono'">
</detail-card-comp>
\`\`\`

## Ejemplos Comunes
Los stories incluyen ejemplos para:
- Información de contacto (teléfono/email)
- Datos de ubicación
- Información de usuario
- Datos documentales
- Textos descriptivos largos
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Texto descriptivo que acompaña al icono. Puede contener información diversa como datos de contacto, ubicación, descripciones, etc.',
      control: 'text',
      table: {
        category: 'Contenido',
        type: { summary: 'string' },
        defaultValue: { summary: 'C.C 1130618976 Gaiman, Argentina' },
      },
    },
    iconType: {
      description: 'Determina el tipo de icono que se muestra junto al texto. Cada icono sugiere visualmente el tipo de información.',
      control: 'select',
      options: ['phone', 'email', 'shop', 'location', 'info', 'work', 'user'],
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'user' },
      },
    },
  },
  args: {
    title: 'C.C 1130618976 Gaiman, Argentina',
    iconType: 'user',
  },
} as Meta<DetailCardCompComponent>;

const Template: StoryFn<DetailCardCompComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: 'Versión por defecto del componente con icono genérico y texto de ejemplo.',
    },
  },
};

export const LocationIcon = Template.bind({});
LocationIcon.args = {
  iconType: 'location',
  title: 'Ubicación: Av. Principal 123'
};
LocationIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar información de ubicación con icono de marcador de mapa.',
    },
  },
};

export const PhoneIcon = Template.bind({});
PhoneIcon.args = {
  iconType: 'phone',
  title: 'Teléfono: +54 11 1234-5678'
};
PhoneIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar información de contacto telefónico.',
    },
  },
};

export const EmailIcon = Template.bind({});
EmailIcon.args = {
  iconType: 'email',
  title: 'Email: contacto@ejemplo.com'
};
EmailIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar información de correo electrónico.',
    },
  },
};

export const WorkIcon = Template.bind({});
WorkIcon.args = {
  iconType: 'work',
  title: 'Fecha: 15/05/2023'
};
WorkIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar información laboral o de fechas con icono de maletín.',
    },
  },
};

export const ShopIcon = Template.bind({});
ShopIcon.args = {
  iconType: 'shop',
  title: 'Usuario: John Doe'
};
ShopIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar información de usuario con icono de carrito de compras.',
    },
  },
};

export const DocumentIcon = Template.bind({});
DocumentIcon.args = {
  iconType: 'user',
  title: 'Documento: DNI 12345678'
};
DocumentIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar información documental con icono genérico.',
    },
  },
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  iconType: 'info',
  title: 'Ayudo a vendedores/empresas B2C con productos INTANGIBLES aumentar sus ventas a través de habilidades, tácticas y herramientas PRÁCTICAS y fáciles de implementar.'
};
InfoIcon.parameters = {
  docs: {
    description: {
      story: 'Ejemplo para mostrar texto descriptivo largo con icono de información.',
    },
  },
};