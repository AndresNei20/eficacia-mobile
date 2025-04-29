import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  imports: [],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  @Input() title1: string = 'Nombre de categorias';
  @Input() title2: string = 'Cantidad';
  @Input() title3: string = 'Precio';
}
