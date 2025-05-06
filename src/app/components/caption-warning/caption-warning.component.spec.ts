import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionWarningComponent } from './caption-warning.component';

describe('CaptionWarningComponent', () => {
  let component: CaptionWarningComponent;
  let fixture: ComponentFixture<CaptionWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptionWarningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
