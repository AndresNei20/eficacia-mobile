import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '../../app/components/Checkbox/checkbox/checkbox.component';

export default {
  title: 'Components/Checkbox/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado del checkbox (marcado o desmarcado)',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`
# ☑️ Checkbox

El **Checkbox** en Eficacia se utiliza para permitir a los usuarios seleccionar una o varias opciones dentro de la interfaz.

---

## 🧩 Uso

- Formularios y configuraciones: Para habilitar o deshabilitar opciones dentro de ajustes o preferencias.
- Selección múltiple: En listas o tablas donde el usuario puede elegir varios elementos a la vez.
- Filtros y búsquedas: Para refinar resultados en interfaces con opciones de filtrado.
- Términos y condiciones: Para aceptar políticas antes de continuar con un proceso.
- Activación de funcionalidades: Para encender o apagar características específicas.

---

## ✅ Mejores prácticas

### ✔️ Sí:

- Mantener la estructura del componente en Figma usando variantes y propiedades predefinidas.
- Elegir estilos adecuados según el contexto.
- Configurar etiquetas y estados mediante variantes (activo, deshabilitado, indeterminado).
- Respetar espaciado, alineación, tipografía y jerarquía visual.
- Usar Auto Layout para escalabilidad y adaptabilidad.

### ❌ No:

- ❌ No modificar el tamaño del checkbox manualmente.
- ❌ No agregar íconos, textos o decoraciones fuera del diseño.
- ❌ No cambiar colores o estilos sin seguir la librería UI.
- ❌ No desactivar Auto Layout, ya que afecta la adaptabilidad del componente.

---

## 🎛️ Variantes disponibles

| Variante    | Descripción                         |
|-------------|-------------------------------------|
| Default     | Caja sin marcar (borde gris)        |
| Checked     | Caja marcada (fondo azul, check)    |
| Disabled    | Inactivo, sin posibilidad de clic   |

---

## 🧱 Elementos clave

| Elemento        | Descripción                                                        |
|-----------------|--------------------------------------------------------------------|
| Contenedor      | Define el tamaño y forma del checkbox (18x18px, borde redondeado). |
| Icono Check     | SVG que aparece al estar marcado.                                  |
| Estados Visuales| Cambian color de fondo y borde según estado del checkbox.          |

---

## ⚙️ Props disponibles

| Propiedad       | Tipo     | Descripción                             | Requerido | Default |
|----------------|----------|-----------------------------------------|-----------|---------|
| \`checked\`     | boolean  | Estado actual del checkbox              | No        | false   |
| \`checkedChange\` | EventEmitter<boolean> | Evento emitido al cambiar el estado | No        | —       |
        `,
      },
    },
  },
} as Meta<CheckboxComponent>;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <storybook-checkbox [checked]="false"></storybook-checkbox>
        <storybook-checkbox [checked]="true"></storybook-checkbox>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Vista general de las variantes visuales del Checkbox.',
      },
    },
  },
};
