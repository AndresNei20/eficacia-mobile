import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../components/icon-button/icon.component';

@Component({
  selector: 'app-email-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './email-alert.component.html',
  styleUrls: ['./email-alert.component.scss'],
})
export class EmailAlertComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
