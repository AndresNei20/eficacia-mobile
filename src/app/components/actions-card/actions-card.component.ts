import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCardComponent } from '../progress-card/progress-card.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-actions-card',
  standalone: true,
  imports: [
    CommonModule,
    ProgressCardComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './actions-card.component.html',
  styleUrls: ['./actions-card.component.scss'],
})
export class ActionsCardComponent {
  @Input() showImage: boolean = true;

  @Input() showTitle: boolean = true;

  @Input() titleText: string = 'Pendiente';

  @Input() showProgressCard: boolean = true;

  @Input() progressValue: number = 32;

  @Input() activitiesText: string = 'Faltan 2 actividades';

  @Input() goalsText: string = 'Meta 34';

  @Input() progressStatus: 'green' | 'yellow' | 'red' = 'yellow';

  @Input() showForms: boolean = true;

  @Input() showButton2: boolean = true;

  @Input() showLink: boolean = true;
}
