import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../iconBtn/icon.component';

@Component({
  selector: 'app-action-button',
  imports: [ CommonModule, IconComponent],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  @Input() children!: string;
  @Input() state!: 'default' | 'hovered';

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    state: 'default' | 'hovered' ,
  ): string {
    return [
      'button',
      state,
    ].filter(Boolean).join(' ');
  }
}
