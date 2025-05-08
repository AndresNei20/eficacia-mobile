import type { Meta, StoryObj } from '@storybook/angular';
import { NewsCardComponent } from '../../app/components/news-card/news-card.component';

const meta: Meta<NewsCardComponent> = {
  title: 'Components/Cards/News Card',
  component: NewsCardComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`

## 🧩 Uso
- Informar al usuario sobre novedades o actualizaciones recientes.
- Promover contenido nuevo dentro de la aplicación o sistema.
- Utilizado en centros de notificaciones o secciones de novedades.
- Ideal para alertas no críticas que requieren atención contextual.

---

## 🧱 Elementos clave

- Contenedor con esquinas redondeadas y padding interno.
- Avatar o imagen representativa alineada a la izquierda.
- Título destacado en alto contraste (bold y color primario).
- Subtítulo o mensaje descriptivo.
- Marca de tiempo o metadata contextual en parte inferior.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal de la tarjeta.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Text'
      }
    },
    body: {
      control: 'text',
      description: 'Contenido descriptivo.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Text'
      }
    },
    caption: {
      control: 'text',
      description: 'Texto secundario (fecha).',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Metadata'
      }
    },
    image: {
      control: 'text',
      description: 'URL de imagen destacada.',
      table: {
        type: { summary: 'string' },
        category: 'Media'
      }
    }
  }
};

export default meta;
type Story = StoryObj<NewsCardComponent>;

export const Default: Story = {
  args: {
    title: '¡Nuevo equipo en tu portafolio',
    body: 'Échale un vistazo al nuevo Motorola G20',
    caption: 'Hace unos segundos',
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};