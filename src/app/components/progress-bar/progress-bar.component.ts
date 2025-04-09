import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() color: 'green' | 'yellow' | 'red' = 'green';

  get progressWidth(): string {
    return `${this.clamp(this.value)}%`;
  }

  get badgePosition(): string {
    return `calc(${this.clamp(this.value)}% - 16px)`; 
  }

  private clamp(val: number): number {
    return Math.min(Math.max(val, 0), 100);
  }
}