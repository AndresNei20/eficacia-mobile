import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() subtitle: string = '';
  @Input() altText: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonLabel: string = 'Learn More';
  @Input() isAlternateState: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}