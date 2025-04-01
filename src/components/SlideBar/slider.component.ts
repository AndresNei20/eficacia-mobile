import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { IonRange } from '@ionic/angular/standalone';
  
  @Component({
    selector: 'storybook-slider',
    standalone: true,
    imports: [CommonModule, IonRange],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
  })
  export class SliderComponent {
    @Input() label: string = 'Escala (Slider Título)';
    @Input() value: number = 0;
    @Output() valueChange = new EventEmitter<number>();
  
    @ViewChild('hiddenRange', { static: true }) hiddenRange!: ElementRef;
  
    marks: number[] = [0, 1, 2, 3, 4, 5];
    dragging = false;
  
    updateValue(newValue: number) {
      this.value = newValue;
      this.valueChange.emit(this.value);
  
      const ionRangeEl = this.hiddenRange.nativeElement as HTMLIonRangeElement;
      ionRangeEl.value = newValue;
    }
  
    isDragging = false;

    startDrag(event: MouseEvent | TouchEvent) {
      event.preventDefault();
      this.dragging = true;
      this.isDragging = true;
    }
    
    stopDrag() {
      this.dragging = false;
      this.isDragging = false;
    }
    
  
    drag(event: MouseEvent | Touch) {
      if (!this.dragging) return;
  
      const slider = document.querySelector('.custom-slider') as HTMLElement;
      if (!slider) return;
  
      const rect = slider.getBoundingClientRect();
      const pos = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
      const percentage = pos / rect.width;
      const value = Math.round(percentage * 5);
  
      this.updateValue(value);
    }
  
    onIonChange(event: any) {
      this.value = event.detail.value;
      this.valueChange.emit(this.value);
    }
  }
  