import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCustomComponent } from './loader-custom.component';

describe('LoaderCustomComponent', () => {
  let component: LoaderCustomComponent;
  let fixture: ComponentFixture<LoaderCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
