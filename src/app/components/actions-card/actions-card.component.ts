import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCardComponent } from '../progress-card/progress-card.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon-button/icon.component';

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
  @Input() showTitle: boolean = true;
  @Input() showProgressCard: boolean = true;
  @Input() showForms: boolean = true;
  @Input() showImage: boolean = true;
  @Input() showButton2: boolean = true;
  @Input() showLink: boolean = true;
}
