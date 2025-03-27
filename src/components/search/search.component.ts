import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'storybook-search',
  standalone: true,
  imports: [IonInput],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() 
  placeholder: string = 'Buscar...';
  @Output() 
  ionInput = new EventEmitter<string>();

  private lastValue = '';

  handleChange(event: Event) {
    const customEvent = event as CustomEvent;
    const value = customEvent.detail.value || '';
    // Solo emitir si el valor realmente cambió
    if (value !== this.lastValue) {
      this.ionInput.emit(value);
      this.lastValue = value;
    }
  }
}