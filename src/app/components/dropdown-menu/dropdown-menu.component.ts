import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit, OnChanges {

  @Input() textField: string = 'Selecciona una opción';
  
  @Input() options: string[] = [];

  
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();

  
  @Input() error: boolean = false;
  @Input() errorText: string = 'Campo requerido';

  isOpen = false;
  selectedOption = '';

  ngOnInit(): void {
    this.isOpen = this.expanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expanded'] && !changes['expanded'].firstChange) {
      this.isOpen = changes['expanded'].currentValue;
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.expandedChange.emit(this.isOpen);
  }

  selectOption(opt: string): void {
    this.selectedOption = opt;
    this.toggleDropdown();
  }

  
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement): void {
    if (!target.closest('app-dropdown-menu') && this.isOpen) {
      this.isOpen = false;
      this.expandedChange.emit(false);
    }
  }
}
