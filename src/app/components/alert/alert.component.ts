import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-estado-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() text: string = 'Estado';
  @Input() appearance!: 'success' | 'warning' | 'danger' | 'light';
  @Input() state?: 'active' | 'hovered' | 'pressed' | 'disabled';
  @Input() showClose: boolean = true;

  getStyles(): string {
    return ['estado-alert', this.appearance, this.state].filter(Boolean).join(' ');
  }
}
