import { Meta, StoryObj } from "@storybook/angular";
import { SliderComponent } from "../../components/SlideBar/slider.component";

export default {
  title: "Components/Slider/Slider",
  component: SliderComponent,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
    },
    label: {
      control: 'text',
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
### Uso
El **Slider de escala** en Eficacia se utiliza para facilitar la selección de valores dentro de un rango definido. Se implementa en:

- **Encuestas y formularios:** Optimiza la recolección de datos en cuestionarios dentro de la app.
- **Comparaciones y mediciones:** Ayuda a representar niveles de intensidad, satisfacción o progreso en diferentes métricas.
- El Slider de escala 1-5 está estructurado con variantes para manejar **diferentes estilos y configuraciones.**
- Se deben utilizar las propiedades configurables en Figma (ejemplo: comportamiento de arrastre) para mantener **consistencia** en su aplicación.
- El slider se usa en contextos donde los usuarios necesitan **seleccionar un valor dentro de un rango de forma rápida e intuitiva, como en calificaciones, ajustes o mediciones.**
- Los estilos y estados del slider se configuran mediante **variantes sin modificar su estructura base.**

### Mejores Prácticas
#### ✔️ Sí:
- **Mantener la estructura del componente en Figma:** Usar las variantes y propiedades predefinidas sin modificar la configuración base.
- **Seleccionar el estilo adecuado según el contexto:** Aplicar sliders compactos en espacios reducidos y diseños más destacados cuando la selección de valores sea clave en la interfaz.
- **Configurar etiquetas y estados mediante variantes:** Activar o desactivar elementos como valores numéricos, indicadores visuales o estados interactivos desde las propiedades del componente.
- **Respetar la coherencia visual y espaciado:** Asegurar que el slider mantenga la tipografía, tamaño y jerarquía visual definidos en la librería UI de Eficacia.
- **Usar Auto Layout para escalabilidad:** Permitir que el componente se adapte correctamente dentro de los layouts sin desactivar esta propiedad.

#### ❌ No:
- **No agregar elementos externos dentro del componente:** Evitar íconos, etiquetas o decoraciones que no estén contempladas en la librería de diseño.
- **No cambiar los colores o estilos fuera de las configuraciones establecidas:** Respetar las definiciones de la librería UI de Eficacia para garantizar uniformidad en la interfaz.
- **No alterar la alineación del contenido interno:** Mantener la disposición de los indicadores, la barra y los valores numéricos según el diseño original.
- **No desactivar Auto Layout:** Esto afectará la adaptabilidad y responsividad del slider dentro de la interfaz.

### Elementos Clave
- Contenedor de la barra: Estructura principal que define el tamaño y estilo del slider.
- Indicador de valor: Elemento visual que muestra el número seleccionado dentro de la escala.
- Punto de control (Thumb): Elemento arrastrable que permite al usuario seleccionar un valor dentro del rango.
- Riel de progreso: Línea que representa el avance dentro de la escala de 1 a 5.
- Estado: Variantes como activo, inactivo, con valor seleccionado o en interacción, que afectan la experiencia del usuario.
`,
      },
    },
  },
} as Meta<SliderComponent>;

type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  args: {
    value: 0,
    label: "Escala (Slider Título)",
  },
};
