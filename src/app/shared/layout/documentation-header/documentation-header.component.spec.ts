import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationHeaderComponent } from './documentation-header.component';

describe('DocumentationHeaderComponent', () => {
  let component: DocumentationHeaderComponent;
  let fixture: ComponentFixture<DocumentationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
