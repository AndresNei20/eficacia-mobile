import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../components/icon-button/icon.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() textAlert: string = 'Estado';
  @Input() showIcon: boolean = true;

  @Input() style: 'default' | 'success' | 'warning' | 'error' = 'default'; // Fondo de la alerta
  @Input() type: 'alert' | 'check' | 'x' = 'alert'; // Tipo de ícono en el círculo
  @Input() color: 'green' | 'yellow' | 'red' = 'green'; // Color del círculo

  @Output() onClose = new EventEmitter<void>();

  closeAlert() {
    this.onClose.emit();
  }

  getStyleBackground(): string {
    switch (this.style) {
      case 'success':
        return '#3BD4AE';
      case 'warning':
        return '#FFCD00';
      case 'error':
        return '#CA4949';
      default:
        return '#FFFFFF';
    }
  }

  getCircleColor(): string {
    switch (this.color) {
      case 'green':
        return '#3BD4AE';
      case 'yellow':
        return '#FFCD00';
      case 'red':
        return '#CA4949';
      default:
        return '#3BD4AE';
    }
  }
}
