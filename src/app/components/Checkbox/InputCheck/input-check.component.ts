import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { RadioButtonComponent } from '../RadioButton/radio-button.component';

@Component({
  selector: 'storybook-input-check',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, RadioButtonComponent ],
  templateUrl: './input-check.component.html',
  styleUrls: ['./input-check.component.scss'],
})
export class InputCheckComponent {
  @Input() label: string = 'Input';
  @Input() selected: boolean = false;
  @Input() type: 'checkbox' | 'radio' = 'checkbox'; // selección dinámica
  @Output() selectedChange = new EventEmitter<boolean>();

  toggle() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
