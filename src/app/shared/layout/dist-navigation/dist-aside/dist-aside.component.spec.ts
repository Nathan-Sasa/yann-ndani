import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistAsideComponent } from './dist-aside.component';

describe('DistAsideComponent', () => {
  let component: DistAsideComponent;
  let fixture: ComponentFixture<DistAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
