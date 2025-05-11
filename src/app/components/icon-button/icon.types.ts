export type IconName = 
  | 'inicio'
  | 'agenda'
  | 'add'
  | 'arrowRight'
  | 'arrowLeft'
  | 'arrowDrop'
  | 'shop'
  | 'gestion'
  | 'portafolio'
  | 'perfil'
  | 'question'
  | 'completed'
  | 'error'
  | 'started'
  | 'finished'
  | 'triangle'
  | 'logout'
  | 'upload'
  | 'file'
  | 'search'
  | 'display'
  | 'bell'
  | 'list'
  | 'close'
  | 'alert'
  | 'alertInfo'
  | 'check'
  | 'x'
  | 'mosaic'
  | 'oro'
  | 'star'
  | 'void'
  | 'calendar';

export interface IconProps {
  fill: string;
  size?: string; // Optional if not always used
}
