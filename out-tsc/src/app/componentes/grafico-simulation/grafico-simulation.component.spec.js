import { async, TestBed } from '@angular/core/testing';
import { GraficoSimulationComponent } from './grafico-simulation.component';
describe('GraficoSimulationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GraficoSimulationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GraficoSimulationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=grafico-simulation.component.spec.js.map