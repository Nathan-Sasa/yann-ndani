import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFeaturesChartComponent } from './grid-features-chart.component';

describe('GridFeaturesChartComponent', () => {
  let component: GridFeaturesChartComponent;
  let fixture: ComponentFixture<GridFeaturesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFeaturesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFeaturesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
