import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvelectricalComponent } from './avelectrical.component';

describe('AvelectricalComponent', () => {
  let component: AvelectricalComponent;
  let fixture: ComponentFixture<AvelectricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvelectricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvelectricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
