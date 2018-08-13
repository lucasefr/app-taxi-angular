import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdrivesComponent } from './testdrives.component';

describe('TestdrivesComponent', () => {
  let component: TestdrivesComponent;
  let fixture: ComponentFixture<TestdrivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdrivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
