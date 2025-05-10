import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconComponent } from "../../icon-button/icon.component";
import { CheckboxComponent } from "../../Checkbox/checkbox/checkbox.component";

@Component({
  selector: "storybook-card-check",
  standalone: true,
  imports: [CommonModule, IconComponent, CheckboxComponent],
  templateUrl: "./CardCheck.component.html",
  styleUrls: ["./CardCheck.component.scss"],
})
export class CardCheckComponent {
  @Input() showIcon = true;
  @Input() iconName?:
    | "inicio"
    | "agenda"
    | "add"
    | "arrowRight"
    | "shop"
    | "gestion"
    | "portafolio"
    | "perfil"
    | "question"
    | "completed"
    | "error"
    | "started"
    | "finished"
    | "triangle"
    | "logout"
    | "mosaic";

  @Input() showTitle = true;
  @Input() title = "Categoría 1";

  @Input() showLabel = true;
  @Input() label = "TQ";

  @Input() showNumber = true;
  @Input() number: number = 2;

  @Input() showCheckbox = true;
  @Input() checked = false;

  @Input() disabled = false; // ✅ nuevo input
}
