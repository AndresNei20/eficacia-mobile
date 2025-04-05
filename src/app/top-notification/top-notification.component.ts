import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../iconBtn/icon.component';

@Component({
  selector: 'app-top-notification',
  imports: [CommonModule, IconComponent],
  templateUrl: './top-notification.component.html',
  styleUrl: './top-notification.component.scss'
})
export class TopNotificationComponent {

  @Input() children?: string; 
  @Input() state!: 'default' | 'started' | 'finished' | 'error' | 'completed';
  @Input() iconSrc!: 'add' | 'arrowRight' | 'shop'; 

  // Evento onClick
  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    state: 'default' | 'started' | 'finished' | 'error' | 'completed',
    iconSrc: 'add' | 'arrowRight' | 'shop'
  ): string {
    return [
      'button',
      state,
      iconSrc
    ].filter(Boolean).join(' ');
  }
}
