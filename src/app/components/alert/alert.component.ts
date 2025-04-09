import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() style: 'default' | 'success' | 'pending' | 'warning' = 'default';
  @Input() textAlert: string = 'Estado';
  @Input() showIcon: boolean = true;

  getStyles(): string {
    return ['alert', this.style].filter(Boolean).join(' ');
  }

  getCircleColor(): string {
    return this.style === 'default' ? '#3BD4AE' : 'white';
  }

  getCloseColor(): string {
    return this.style === 'default' ? '#0041A3' : 'white';
  }
}