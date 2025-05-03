import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent], 
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'] 
})
export class ButtonComponent {

  @Input() label?: string; 
  @Input() size!: 'small' | 'medium';
  @Input() color!: 'primary' | 'error';
  @Input() style!: 'filled' | 'outline' | 'text';
  @Input() state!: 'active' | 'disabled' | 'pressed';
  @Input() orientation: 'center' | 'left' = 'center';
  @Input() iconStart?: 'add' | 'arrowLeft' | 'shop' = 'arrowLeft' ;
  @Input() iconEnd?: 'add' | 'arrowRight' | 'shop' = 'arrowRight' ;
  @Input() showIconStart?: true | false = false;
  @Input() showIconEnd?: true | false = false;

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    size: 'small' | 'medium',
    color: 'primary' | 'error',
    state?: 'active' | 'disabled' | 'pressed',
    orientation?: 'center' | 'left',
    iconStart?: 'add' | 'arrowLeft' | 'shop',
    iconEnd?: 'add' | 'arrowRight' | 'shop' ,
    showIconStart?: boolean,
    showIconEnd?: boolean,
    style?: 'filled' | 'outline' | 'text',
  ): string {
    return [
      'button',
      size,
      color,
      state,
      orientation,
      iconStart,
      iconEnd,
      showIconEnd,
      showIconStart,
      style
    ].filter(Boolean).join(' ');
  }
}