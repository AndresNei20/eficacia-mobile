import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilCardCompComponent } from './deatil-card-comp.component';

describe('DeatilCardCompComponent', () => {
  let component: DeatilCardCompComponent;
  let fixture: ComponentFixture<DeatilCardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeatilCardCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatilCardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
