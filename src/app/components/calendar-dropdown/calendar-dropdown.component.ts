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
import { CalendarComponent } from '../dropdown/Calendar.component';

@Component({
  selector: 'app-calendar-dropdown',
  standalone: true,
  imports: [CommonModule, IconComponent, CalendarComponent],
  templateUrl: './calendar-dropdown.component.html',
  styleUrls: ['./calendar-dropdown.component.scss'],
})
export class CalendarDropdownComponent implements OnInit, OnChanges {
  @Input() textField: string = 'Selecciona fecha';
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();

  isOpen = false;

  ngOnInit(): void {
    this.isOpen = this.expanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expanded'] && !changes['expanded'].firstChange) {
      this.isOpen = changes['expanded'].currentValue;
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.expandedChange.emit(this.isOpen);
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement): void {
    if (!target.closest('app-calendar-dropdown') && this.isOpen) {
      this.isOpen = false;
      this.expandedChange.emit(false);
    }
  }
}
