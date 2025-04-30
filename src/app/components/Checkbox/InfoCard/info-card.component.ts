import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { IconComponent } from '../../icon-button/icon.component';
import { IconName } from '../../icon-button/icon.types';

@Component({
  selector: 'storybook-info-card',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, IconComponent],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() title: string = 'Nombre Categoría';
  @Input() subtitle: string = '# Marca | # Propias';
  @Input() iconSrc:IconName = 'mosaic' ;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
