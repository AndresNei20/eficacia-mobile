import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';
import { ButtonComponent } from '../button/button.component';
import { ProgressCardComponent } from '../progress-card/progress-card.component';

@Component({
  selector: 'app-image-popup',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent, ProgressCardComponent],
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss'],
})
export class ImagePopupComponent {

  @Input() groupDescription: string = 'Debes completar las preguntas (*)';
  @Input() showGroupDescription: boolean = true;

  @Input() percentValue: number = 65;
  @Input() activitiesText: string = 'Faltan 2 actividades';
  @Input() goalsText: string = 'Meta 34';

  @Input() title: string = 'Página incompleta';
  @Input() showTitle: boolean = true;
  @Input() description: string = 'La página está incompleta, debes llenar todas las preguntas obligatorias *.';
  @Input() showDescription: boolean = true;

  @Input() mobileButton1Label: string = 'button';
  @Input() showMobileButtons1: boolean = true;
  @Input() mobileButton2Label: string = 'button';
  @Input() showMobileButtons2: boolean = true;

  @Input() linkMessageText: string = 'Continuar sin complementar';
  @Input() showLinkMessage: boolean = true;
}