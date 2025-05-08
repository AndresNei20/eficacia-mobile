import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItemProps } from '../menu-item/menu-item.types';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  @Input() buttons: MenuItemProps[] = []; 
  selectedIndex: number = 0;

  handleButtonClick(index: number): void {
    this.selectedIndex = index;
  }
}