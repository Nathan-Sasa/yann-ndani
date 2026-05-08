import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueCounterComponent } from './statistique-counter.component';

describe('StatistiqueCounterComponent', () => {
  let component: StatistiqueCounterComponent;
  let fixture: ComponentFixture<StatistiqueCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiqueCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
