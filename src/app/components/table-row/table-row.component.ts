import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  imports: [],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent {
  @Input() title1: string = 'Nombre del producto';
  @Input() title2: string = '1';
  @Input() title3: string = '300.000';
  @Input() showTopBorder: boolean = false;
  @Input() borderStyle: 'solid' | 'dotted' = 'solid';
  @Input() boldHeaders: boolean = false; // Nueva propiedad para negrita
}