import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-profile',
  imports: [ CommonModule, IconComponent ],
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() name!: string;
  @Input() points!: string;
  @Input() image!: string;
  
}