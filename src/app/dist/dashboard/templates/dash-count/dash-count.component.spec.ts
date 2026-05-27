import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCountComponent } from './dash-count.component';

describe('DashCountComponent', () => {
  let component: DashCountComponent;
  let fixture: ComponentFixture<DashCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
