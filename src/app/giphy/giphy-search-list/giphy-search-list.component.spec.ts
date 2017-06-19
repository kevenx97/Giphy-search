import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchListComponent } from './giphy-search-list.component';

describe('GifSearchListComponent', () => {
  let component: GifSearchListComponent;
  let fixture: ComponentFixture<GifSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
