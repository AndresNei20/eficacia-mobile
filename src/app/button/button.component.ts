import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../iconBtn/icon.component'; // Asume que tienes este componente

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent], // IconComponent debe ser standalone
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'] // Cambiado a .css para coincidir con tu ejemplo
})
export class ButtonComponent {
  // Inputs con tipos equivalentes a PropTypes
  @Input() children?: string; // Angular usa <ng-content> en lugar de children
  @Input() type!: 'primary' | 'secondary'; // ! indica requerido
  @Input() appearance!: 'filled' | 'outline';
  @Input() state?: 'enabled' | 'hovered' | 'disabled' | 'clicked' | 'focused';
  @Input() iconSrc?: 'add' | 'arrowRight' | 'shop'; // Enumera todos los íconos
  @Input() iconPosition?: 'left' | 'right' = 'left'; // Valor por defecto

  // Evento onClick
  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    type: 'primary' | 'secondary',
    appearance: 'filled' | 'outline',
    state?: 'enabled' | 'hovered' | 'disabled' | 'clicked' | 'focused',
    iconPosition?: 'left' | 'right'
  ): string {
    return [
      'button',
      type,
      appearance,
      state,
      iconPosition
    ].filter(Boolean).join(' ');
  }
}