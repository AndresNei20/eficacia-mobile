import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-menu',
  imports: [SearchComponent, IconComponent], // Agrega el SearchComponent aquí
  standalone: true, // Esto indica que es un componente standalone
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Output() onClickDisplay = new EventEmitter<Event>();
  @Output() onClickBell = new EventEmitter<Event>();

  searchValue: string = ''; 

  onSearchChange(value: string): void {
    this.searchValue = value;
    // Aquí puedes agregar cualquier lógica adicional cuando cambia la búsqueda
    console.log('Valor de búsqueda:', this.searchValue);
  }

  // En tu MenuComponent
handleDisplayClick(event: Event) {
  console.log('Display icon clicked', event);
  this.onClickDisplay.emit(event);
}

handleBellClick(event: Event) {
  console.log('Bell icon clicked', event);
  this.onClickBell.emit(event);
}

}
