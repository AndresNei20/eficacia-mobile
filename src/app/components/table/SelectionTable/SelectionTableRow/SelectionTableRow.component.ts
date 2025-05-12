import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../../../Checkbox/checkbox/checkbox.component';
import { RadioButtonComponent } from '../../../Checkbox/RadioButton/radio-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-selection-table-row',
  standalone: true,
  imports: [CheckboxComponent, RadioButtonComponent, CommonModule],
  templateUrl: './SelectionTableRow.component.html',
  styleUrls: ['./SelectionTableRow.component.scss']
})
export class SelectionTableRowComponent {
  @Input() label: string = ''; // ✅ Agregado para mostrar "Opción 1", "Opción 2", etc.
  @Input() mode: 'checkbox' | 'radio' = 'checkbox';
}
