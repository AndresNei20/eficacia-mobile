import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  @Input() label: string = 'Label';
  @Input() options: string[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input() selected: string = '';
}
