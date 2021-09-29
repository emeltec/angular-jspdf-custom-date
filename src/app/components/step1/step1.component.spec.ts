/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Step1Component } from './step1.component';
import { CommonsService } from 'src/app/services/commons.service';
import { Observable, of } from 'rxjs';

describe('Step1Component', () => {
  let component: Step1Component;
  let fixture: ComponentFixture<Step1Component>;
  let service: CommonsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1Component ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CommonsService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(CommonsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'unit-test'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-test');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unit-test app is running!');
  });

  it('Llamar metodo getComments', () => {
    const spy = spyOn(service, 'getComments').and.returnValue(of([]))
    component.getComments();
    expect(spy).toHaveBeenCalled();
  });

});
