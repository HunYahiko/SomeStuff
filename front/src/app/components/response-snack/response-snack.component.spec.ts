import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSnackComponent } from './response-snack.component';

describe('ResponseSnackComponent', () => {
  let component: ResponseSnackComponent;
  let fixture: ComponentFixture<ResponseSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
