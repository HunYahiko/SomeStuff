import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlbumsComponent } from './show-albums.component';

describe('ShowAlbumsComponent', () => {
  let component: ShowAlbumsComponent;
  let fixture: ComponentFixture<ShowAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
