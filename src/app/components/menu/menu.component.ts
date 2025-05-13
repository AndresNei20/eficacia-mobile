import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { IconComponent } from '../icon-button/icon.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  imports: [SearchComponent, IconComponent, AvatarComponent, MenuItemComponent, CommonModule], // Agrega el SearchComponent aquí
  standalone: true, // Esto indica que es un componente standalone
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  defaultImage = new URL('../../../assets/images/avatar-default-img.png', import.meta.url).href;

  @Input() content!: 'image' | 'text';
  @Input() showBadge!: boolean;
  @Input() avatarText?: string = 'AA';
  @Input() image?: string = this.defaultImage;
  @Input() width: string = '375px'; // Valor por defecto
  @Input() height: string = '67px'; // Valor por defecto

  @Output() searchChange = new EventEmitter<string>();
  @Output() onClickBell = new EventEmitter<Event>();
  @Output() onClickProfile = new EventEmitter<Event>();

  @ViewChild('formElement') formElement!: ElementRef;

  menuItems = [
    { text: 'Paranguaricutirimicuaro', isActive: 'false', icons: 'arrowFile'},
    { text: 'text', isActive: 'true', icons: 'list'},
    { text: 'text', isActive: 'false', icons: 'list'},
    { text: 'text', isActive: 'false', icons: 'list'},
    { text: 'text', isActive: 'false', icons: 'list'},
    { text: 'text', isActive: 'true', icons: 'document'} 
  ];

  searchValue: string = ''; 
  isSidebarOpen = false;

  onSearchChange(value: string): void {
    this.searchValue = value;
    this.searchChange.emit(this.searchValue);
  }

  ngOnChanges(): void {
    if (this.formElement) {
      this.applyCustomDimensions();
    } 
  }

  ngAfterViewInit(): void {
    this.applyCustomDimensions();
  }

  private applyCustomDimensions(): void {
    if (this.formElement?.nativeElement) {
      this.formElement.nativeElement.style.setProperty('--width', this.width);
      this.formElement.nativeElement.style.setProperty('--height', this.height);


      console.log('Applying dimensions:', this.width, this.height);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleBellClick(event: Event) {
    this.onClickBell.emit(event);
  }

  handleProfile(event: Event) {
    this.onClickProfile.emit(event);
  }

}
