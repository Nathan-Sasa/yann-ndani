import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFeaturesAuditComponent } from './grid-features-audit.component';

describe('GridFeaturesAuditComponent', () => {
  let component: GridFeaturesAuditComponent;
  let fixture: ComponentFixture<GridFeaturesAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFeaturesAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFeaturesAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
