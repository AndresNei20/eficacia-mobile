import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caption-warning',
  imports: [],
  templateUrl: './caption-warning.component.html',
  styleUrl: './caption-warning.component.scss'
})
export class CaptionWarningComponent {

  @Input() message: string = 'Debes completar las preguntas (*)';
  
}
