import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikibediaComponent } from './wikibedia.component';

describe('WikibediaComponent', () => {
  let component: WikibediaComponent;
  let fixture: ComponentFixture<WikibediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikibediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikibediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
