import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaElEstadioComponent } from './adivina-el-estadio.component';

describe('AdivinaElEstadioComponent', () => {
  let component: AdivinaElEstadioComponent;
  let fixture: ComponentFixture<AdivinaElEstadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaElEstadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaElEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
