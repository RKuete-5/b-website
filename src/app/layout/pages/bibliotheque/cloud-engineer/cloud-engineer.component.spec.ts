import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudEngineerComponent } from './cloud-engineer.component';

describe('CloudEngineerComponent', () => {
  let component: CloudEngineerComponent;
  let fixture: ComponentFixture<CloudEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
