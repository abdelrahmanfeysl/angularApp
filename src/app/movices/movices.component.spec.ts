import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovicesComponent } from './movices.component';

describe('MovicesComponent', () => {
  let component: MovicesComponent;
  let fixture: ComponentFixture<MovicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
