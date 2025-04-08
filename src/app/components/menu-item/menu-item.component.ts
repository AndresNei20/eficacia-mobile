import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-item-menu',
  imports: [ CommonModule, IconComponent],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() name!: | 'inicio' | 'agenda' | 'gestion' | 'portafolio' | 'perfil';
  @Input() state!: 'selected' | 'notSelected';

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    state: 'selected' | 'notSelected' ,
  ): string {
    return [
      'button',
      state,
    ].filter(Boolean).join(' ');
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
