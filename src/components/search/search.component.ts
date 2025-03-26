import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'storybook-search',
  standalone: true,
  imports: [IonSearchbar],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() 
  placeholder: string = 'Buscar...';
  @Output() 
  onChange = new EventEmitter<string>();
  @Output() 
  onCancel = new EventEmitter<void>();

  private lastValue = '';

  handleChange(event: Event) {
    const customEvent = event as CustomEvent;
    const value = customEvent.detail.value || '';
    // Solo emitir si el valor realmente cambió
    if (value !== this.lastValue) {
      this.onChange.emit(value);
      this.lastValue = value;
    }
  }

  handleCancel() {
    this.onCancel.emit();
  }
}