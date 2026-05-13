import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFeatureComponent } from './network-feature.component';

describe('NetworkFeatureComponent', () => {
  let component: NetworkFeatureComponent;
  let fixture: ComponentFixture<NetworkFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
