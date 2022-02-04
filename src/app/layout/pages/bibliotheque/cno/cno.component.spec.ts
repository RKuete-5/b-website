import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnoComponent } from './cno.component';

describe('CnoComponent', () => {
  let component: CnoComponent;
  let fixture: ComponentFixture<CnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
