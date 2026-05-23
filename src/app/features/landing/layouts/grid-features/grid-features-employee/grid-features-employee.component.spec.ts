import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFeaturesEmployeeComponent } from './grid-features-employee.component';

describe('GridFeaturesEmployeeComponent', () => {
  let component: GridFeaturesEmployeeComponent;
  let fixture: ComponentFixture<GridFeaturesEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFeaturesEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFeaturesEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
