import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../../Checkbox/checkbox/checkbox.component';
import { IconComponent } from '../../icon-button/icon.component';

type ProductCardType = 'product' | 'floating' | 'little' | 'price';

@Component({
  selector: 'storybook-product-card',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, IconComponent],
  templateUrl: './ProductCard.component.html',
  styleUrls: ['./ProductCard.component.scss'],
})
export class ProductCardComponent {
  @Input() type: ProductCardType = 'product';

  // Product
  @Input() showCheckbox: boolean = true;
  @Input() showNumbers: boolean = true;

  // Floating
  @Input() showIcon: boolean = true;
  @Input() text: string = 'Precio descuento';

  // Little Card
  @Input() title: string = 'Reporte de agotados';
  @Input() caption: string = '8:15 AM';
  @Input() showIcon1: boolean = true;
  @Input() showIcon2: boolean = true;
  @Input() showIcon3: boolean = true;
  @Input() information1: string = '50';
  @Input() information2: string = '2';
  @Input() information3: string = '4';
  @Input() showArrow: boolean = true;

  // Price Card
  @Input() product: string = 'Adhesivo Aquence';
  @Input() price: string = '$120.000';
}
