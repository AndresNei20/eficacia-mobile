import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estado-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() label: string = 'Estado';
  @Input() color: 'success' | 'warning' | 'danger' | 'light' = 'light';
  @Input() showClose: boolean = true;

  get backgroundColor(): string {
    switch (this.color) {
      case 'success': return '#2dd36f'; // verde
      case 'warning': return '#ffc409'; // amarillo
      case 'danger': return '#eb445a'; // rojo
      case 'light': default: return '#ffffff'; // blanco
    }
  }

  get textColor(): string {
    return this.color === 'light' ? '#000' : '#fff';
  }
}
