import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreanceDetteComponent } from './creance-dette.component';

describe('CreanceDetteComponent', () => {
  let component: CreanceDetteComponent;
  let fixture: ComponentFixture<CreanceDetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreanceDetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreanceDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
