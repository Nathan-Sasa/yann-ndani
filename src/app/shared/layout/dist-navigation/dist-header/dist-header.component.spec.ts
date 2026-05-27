import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistHeaderComponent } from './dist-header.component';

describe('DistHeaderComponent', () => {
  let component: DistHeaderComponent;
  let fixture: ComponentFixture<DistHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
