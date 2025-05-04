import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-menu-item',
  imports: [IconComponent],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() text: string = 'Text';
  @Input() isActive: boolean = true;
  @Input() icons?: 'arrowFile' | 'diagonalFile' | 'document' | 'list' = "list";
}