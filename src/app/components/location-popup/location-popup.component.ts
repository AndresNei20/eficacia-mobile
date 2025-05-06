import { Component } from '@angular/core';
import { MapCurrentPositionComponent } from '../map-current-position/map-current-position.component';
import { CaptionWarningComponent } from '../caption-warning/caption-warning.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-location-popup',
  standalone: true,
  imports: [MapCurrentPositionComponent, CaptionWarningComponent, DropdownMenuComponent],
  templateUrl: './location-popup.component.html',
  styleUrl: './location-popup.component.scss'
})
export class LocationPopupComponent {
  departments: string[] = ['Antioquia', 'Cundinamarca', 'Valle del Cauca', 'Santander'];
  cities: string[] = ['Medellín', 'Bogotá', 'Cali', 'Bucaramanga'];
}