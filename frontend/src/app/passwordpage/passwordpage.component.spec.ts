import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordpageComponent } from './passwordpage.component';

describe('PasswordpageComponent', () => {
  let component: PasswordpageComponent;
  let fixture: ComponentFixture<PasswordpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
