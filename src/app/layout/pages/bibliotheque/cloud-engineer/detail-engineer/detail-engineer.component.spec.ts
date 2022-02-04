import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEngineerComponent } from './detail-engineer.component';

describe('DetailEngineerComponent', () => {
  let component: DetailEngineerComponent;
  let fixture: ComponentFixture<DetailEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
