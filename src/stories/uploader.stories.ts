import { Meta, StoryFn } from '@storybook/angular';
import { FileUploaderComponent } from '../components/uploader/uploader.component';

export default {
  title: 'Components/File Uploader',
  component: FileUploaderComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Un componente de carga de archivos con soporte para arrastrar y soltar, selección múltiple,
validación de tipos y tamaño. Perfecto para formularios que requieren adjuntar documentos.

### Características:
- 📌 Soporte para arrastrar y soltar archivos
- 🖱️ Selección por click
- 📏 Validación de tamaño máximo
- 🗂 Filtrado por tipos de archivo
- 👁‍🗨 Vista previa de archivos seleccionados
- ✖️ Opción para eliminar archivos
- ⏳ Estado de carga visual
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Título principal del componente',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Drag & drop files here' },
      },
    },
    hint: {
      description: 'Texto secundario debajo del título',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'or click to browse' },
      },
    },
    buttonText: {
      description: 'Texto del botón de subida',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Upload Files' },
      },
    },
    multiple: {
      description: 'Permitir selección múltiple de archivos',
      control: 'boolean',
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'true' },
      },
    },
    accept: {
      description: 'Tipos de archivo aceptados (extensiones o MIME types)',
      control: 'text',
      table: {
        category: 'Behavior',
        defaultValue: { summary: '*' },
      },
    },
    maxFileSize: {
      description: 'Tamaño máximo por archivo en bytes',
      control: 'number',
      table: {
        category: 'Validation',
        defaultValue: { summary: '10485760' }, // 10MB
      },
    },
    filesSelected: {
      description: 'Evento emitido cuando se seleccionan archivos',
      table: {
        category: 'Events',
      },
      action: 'filesSelected',
    },
    filesUploaded: {
      description: 'Evento emitido al completar la subida',
      table: {
        category: 'Events',
      },
      action: 'filesUploaded',
    },
  },
  args: {
    title: 'Drag & drop files here',
    hint: 'or click to browse',
    buttonText: 'Upload Files',
    multiple: true,
    accept: 'image/*,.pdf',
    maxFileSize: 10 * 1024 * 1024, // 10MB
  },
} as Meta<FileUploaderComponent>;

const Template: StoryFn<FileUploaderComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const SingleFile = Template.bind({});
SingleFile.args = {
  multiple: false,
  maxFileSize: 5 * 1024 * 1024,
};
SingleFile.parameters = {
  docs: {
    description: {
      story: 'Versión para subida de un solo archivo con tamaño máximo reducido a 5MB.',
    },
  },
};

export const DocumentUpload = Template.bind({});
DocumentUpload.args = {
  title: 'Upload Your Documents',
  hint: 'Click or drag documents to this area',
  buttonText: 'Submit Documents',
  accept: '.pdf,.doc,.docx',
  maxFileSize: 20 * 1024 * 1024,
};
DocumentUpload.parameters = {
  docs: {
    description: {
      story: 'Configuración específica para subida de documentos con formatos limitados.',
    },
  },
};

export const CustomValidation = Template.bind({});
CustomValidation.args = {
  title: 'Upload Images Only',
  accept: 'image/jpeg,image/png',
  maxFileSize: 2 * 1024 * 1024,
};
CustomValidation.parameters = {
  docs: {
    description: {
      story: 'Ejemplo con validación estricta solo para imágenes JPG/PNG con tamaño máximo de 2MB.',
    },
  },
};