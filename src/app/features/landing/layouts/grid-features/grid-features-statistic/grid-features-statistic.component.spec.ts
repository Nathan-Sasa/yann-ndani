import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFeaturesStatisticComponent } from './grid-features-statistic.component';

describe('GridFeaturesStatisticComponent', () => {
  let component: GridFeaturesStatisticComponent;
  let fixture: ComponentFixture<GridFeaturesStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFeaturesStatisticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFeaturesStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
