import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: "storybook-button",
  standalone: true,
  imports: [CommonModule, IonButton],
  template: `
    <ion-button
      type="button"
      [ngClass]="{
        'storybook-button--primary': primary,
        'storybook-button--secondary': !primary,
        'storybook-button--small': size === 'small',
        'storybook-button--medium': size === 'medium',
        'storybook-button--large': size === 'large'
      }"
      (click)="onClick.emit($event)"
      [color]="getColor()"
      [fill]="fill"
      [size]="size"
    >
      {{ label }}
    </ion-button>
  `,
  styleUrls: ["./button.css"],
  encapsulation: ViewEncapsulation.None, // o ViewEncapsulation.Emulated según tus necesidades
})
export class ButtonComponent {
  /**
   * Color del botón (primary, secondary, danger, etc.)
   * Si no se especifica, usará 'primary' o 'secondary' según la propiedad primary
   */
  @Input()
  color?: string;

  /** Estilo de relleno (solid, outline, clear) */
  @Input()
  fill: "solid" | "outline" | "clear" = "solid";

  /** Tamaño del botón */
  @Input()
  size: "small" | "medium" | "large" = "medium";

  /** Texto del botón */
  @Input()
  label: string = "Button";

  /** Indica si es el botón principal */
  @Input()
  primary: boolean = false;

  /** Evento al hacer clic */
  @Output()
  onClick = new EventEmitter<Event>();

  /** Determina el color basado en las propiedades */
  getColor(): string {
    return this.color || (this.primary ? "primary" : "secondary");
  }
}
