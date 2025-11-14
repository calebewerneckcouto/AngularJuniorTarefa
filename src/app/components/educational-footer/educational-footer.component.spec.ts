import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalFooterComponent } from './educational-footer.component';

describe('EducationalFooterComponent', () => {
  let component: EducationalFooterComponent;
  let fixture: ComponentFixture<EducationalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
