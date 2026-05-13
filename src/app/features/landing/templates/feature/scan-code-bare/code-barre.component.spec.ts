import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBarreComponent } from './code-barre.component';

describe('CodeBarreComponent', () => {
  let component: CodeBarreComponent;
  let fixture: ComponentFixture<CodeBarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBarreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
