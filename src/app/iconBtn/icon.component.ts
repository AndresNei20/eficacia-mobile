import { Component, Input, OnChanges } from '@angular/core';
import { IconComponents } from '../../utils/icons';
import { IconName, IconProps } from './icon.types';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: [ './icon.component.scss']
})

export class IconComponent implements OnChanges {
  @Input() name!: IconName;
  @Input() fill: string = 'currentColor';
  safeSvg!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.updateIcon();
  }

  private updateIcon() {
    const iconGenerator = IconComponents[this.name];
    if (!iconGenerator) {
      console.warn(`Icon '${this.name}' not found`);
      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml('');
      return;
    }

    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(
      iconGenerator({ fill: this.fill })
    );
  }
}