// SelectionTable.component.ts
import { Component, Input } from '@angular/core';
import { SelectionTableHeaderComponent } from './SelectionTableHeader/SelectionTableHeader.component';
import { SelectionTableRowComponent } from './SelectionTableRow/SelectionTableRow.component';

@Component({
  selector: 'storybook-selection-table',
  standalone: true,
  imports: [SelectionTableHeaderComponent, SelectionTableRowComponent],
  templateUrl: './SelectionTable.component.html',
  styleUrls: ['./SelectionTable.component.scss']
})
export class SelectionTableComponent {
  @Input() title: string = 'Selecciona múltiples respuestas';
  @Input() mode: 'checkbox' | 'radio' = 'checkbox';

  columns: string[] = ['Columna 1', 'Columna 2', 'Columna 3'];
  rows = [
    { label: 'Opción 1', values: [false, false, false] },
    { label: 'Opción 2', values: [false, false, false] },
    { label: 'Opción 3', values: [false, false, false] },
    { label: 'Opción 4', values: [false, false, false] },
  ];
}