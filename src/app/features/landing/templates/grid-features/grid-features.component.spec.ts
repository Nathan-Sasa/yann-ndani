import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFeaturesComponent } from './grid-features.component';

describe('GridFeaturesComponent', () => {
  let component: GridFeaturesComponent;
  let fixture: ComponentFixture<GridFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
