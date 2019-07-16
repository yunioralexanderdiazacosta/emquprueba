import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSimulationComponent } from './grafico-simulation.component';

describe('GraficoSimulationComponent', () => {
  let component: GraficoSimulationComponent;
  let fixture: ComponentFixture<GraficoSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
