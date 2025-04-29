import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-profile',
  imports: [ CommonModule, AvatarComponent ],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name?: string;
  @Input() showName?: true | false = true;
  @Input() points?: string;
  @Input() showPoints?: true | false = true;
  @Input() image?: string;
}