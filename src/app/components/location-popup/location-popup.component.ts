import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MapCurrentPositionComponent } from '../map-current-position/map-current-position.component';
import { CaptionWarningComponent } from '../caption-warning/caption-warning.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-location-popup',
  standalone: true,
  imports: [MapCurrentPositionComponent, CaptionWarningComponent, DropdownMenuComponent, ButtonComponent, InputComponent],
  templateUrl: './location-popup.component.html',
  styleUrl: './location-popup.component.scss'
})
export class LocationPopupComponent {
  @Input() buttonText: string = 'Continuar';
  @Output() buttonClick = new EventEmitter<void>();


  departments: string[] = ['Antioquia', 'Cundinamarca', 'Valle del Cauca', 'Santander'];
  cities: string[] = ['Medellín', 'Bogotá', 'Cali', 'Bucaramanga'];


  onButtonClick(): void {
    this.buttonClick.emit();
  }
}