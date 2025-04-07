import { Component, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder: string = 'Buscar';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() ariaLabel: string = 'Search input';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  @Output() searchChange = new EventEmitter<string>();
  
  @ViewChild('searchInput') searchInput!: ElementRef;

  onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.searchChange.emit(value);
  }

  clearSearch(): void {
    this.value = '';
    this.searchChange.emit('');
    this.searchInput.nativeElement.focus();
  }

  get containerClasses(): string {
    return `search-container ${this.size} icon-${this.iconPosition}`;
  }
}