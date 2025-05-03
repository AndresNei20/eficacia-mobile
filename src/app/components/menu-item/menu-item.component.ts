import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';
import { MenuName } from './menu-item.types';

@Component({
  selector: 'app-item-menu',
  imports: [ CommonModule, IconComponent],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() name!: MenuName;
  @Input() selected!: true | false;

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    state: true | false ,
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
