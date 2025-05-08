import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';
import { FormAlertComponent } from '../form-alert/form-alert.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconComponent, FormAlertComponent], 
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'] 
})
export class InputComponent {

  @Input() label?: string; 
  @Input() width: string = '100%';
  @Input() placeholder?: string = 'Introduce'; 
  @Input() type!: 'textField' | 'multiline';
  @Input() state!: 'enable' | 'selected' | 'error';
  @Input() showIcon?: boolean = false;
  @Input() showRequired!: boolean;
  @Input() ShowAlert?: boolean = false;
  @Input() alertText?: string = 'Alert text'; 
  @Input() errorText?: string = 'Error text'; 
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (target) {
      this.updateValue(target.value);
    }
  }

  updateValue(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
    console.log('Valor actualizado:', this.value);
  }

  getStyles(
    type: 'textField' | 'multiline',
    state: 'enable' | 'selected' | 'error',
  ): string {
    return [
      'input-field',
      type,
      state, 
    ].filter(Boolean).join(' ');
  }
}