import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportFilesComponent } from './import-export-files.component';

describe('ImportExportFilesComponent', () => {
  let component: ImportExportFilesComponent;
  let fixture: ComponentFixture<ImportExportFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportExportFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportExportFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
