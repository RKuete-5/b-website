import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWikiComponent } from './detail-wiki.component';

describe('DetailWikiComponent', () => {
  let component: DetailWikiComponent;
  let fixture: ComponentFixture<DetailWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
