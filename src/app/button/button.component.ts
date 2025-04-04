import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../iconBtn/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent], 
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'] 
})
export class ButtonComponent {

  @Input() children?: string; 
  @Input() appearance!: 'filled' | 'outline' | 'error';
  @Input() state?: 'disabled' | 'active' | 'hovered' | 'pressed';
  @Input() iconSrc?: 'add' | 'arrowRight' | 'shop' = 'add' ;
  @Input() iconLeft?: true | false = false;
  @Input() iconRight?: true | false = false;

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    appearance: 'filled' | 'outline' | 'error',
    state?: 'disabled' | 'active' | 'hovered' | 'pressed',
    iconLeft?: true | false,
    iconRight?: true | false
  ): string {
    return [
      'button',
      appearance,
      state,
      iconLeft,
      iconRight
    ].filter(Boolean).join(' ');
  }
}