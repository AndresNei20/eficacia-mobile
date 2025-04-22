import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deatil-card-comp',
  imports: [],
  templateUrl: './deatil-card-comp.component.html',
  styleUrl: './deatil-card-comp.component.scss'
})
export class DeatilCardCompComponent {

  @Input() tittle = 'C.C 1130618976 Gaiman, Argentina';

}
