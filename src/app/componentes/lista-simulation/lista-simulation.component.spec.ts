import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSimulationComponent } from './lista-simulation.component';

describe('ListaSimulationComponent', () => {
  let component: ListaSimulationComponent;
  let fixture: ComponentFixture<ListaSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
