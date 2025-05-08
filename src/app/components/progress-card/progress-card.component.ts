import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { IconComponent } from '../../components/icon-button/icon.component';

@Component({
  selector: 'app-progress-card',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent, IconComponent],
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss'],
})
export class ProgressCardComponent {
  @Input() headLeftText: string = '';
  @Input() headRightText: string = '';
  @Input() showHeadText: boolean = true;

  @Input() title: string = '';
  @Input() showTitle: boolean = true;
  @Input() showCheck: boolean = false;

  @Input() percentValue: number = 0;
  @Input() showPercent: boolean = true;

  @Input() activitiesText: string = '';
  @Input() goalsText: string = '';

  @Input() showArrow: boolean = true;
}
