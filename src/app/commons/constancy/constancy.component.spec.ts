/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConstancyComponent } from './constancy.component';

describe('ConstancyComponent', () => {
  let component: ConstancyComponent;
  let fixture: ComponentFixture<ConstancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
