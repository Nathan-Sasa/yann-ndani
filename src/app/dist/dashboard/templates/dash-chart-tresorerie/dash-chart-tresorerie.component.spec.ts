import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChartTresorerieComponent } from './dash-chart-tresorerie.component';

describe('DashChartTresorerieComponent', () => {
  let component: DashChartTresorerieComponent;
  let fixture: ComponentFixture<DashChartTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashChartTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashChartTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
