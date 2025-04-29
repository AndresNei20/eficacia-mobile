import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconComponent], 
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'] 
})
export class InputComponent {

  @Input() label?: string; 
  @Input() valueText?: string; 
  @Input() multilineText?: string; 
  @Input() placeholder?: string = 'Introduce'; 
  @Input() size!: 'small' | 'medium';
  @Input() type!: 'textField' | 'multiline';
  @Input() state!: 'enable' | 'selected' | 'error';
  @Input() showIcon?: true | false = false;
  @Input() showRequired!: true | false;
  @Input() ShowAlert?: true | false = false;
  @Input() alertText?: string = 'Alert text'; 
  @Input() errorText?: string = 'Error text'; 

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    size: 'small' | 'medium',
    type: 'textFiel' | 'multiline',
    state: 'enable' | 'selected' | 'error',
  ): string {
    return [
      'button',
      size,
      type,
      state, 
    ].filter(Boolean).join(' ');
  }
}