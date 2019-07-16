import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../servicios/info.service';
import { Chart } from 'chart.js';
var ListaSimulationComponent = /** @class */ (function () {
    function ListaSimulationComponent(infoService, activatedRoute) {
        this.infoService = infoService;
        this.activatedRoute = activatedRoute;
        this.p = 1;
        /**
        * Almacena el array con el total de months
        *
        *@property {Array}
        */
        this.months = [];
        /**
        * Almacena el array con el total de hubs
        *
        *@property {Array}
        */
        this.hubs = [];
        /**
        * Almacena el array con las propiedades requeridas para inicializar el gráfico
        *
        *@property {Array}
        */
        this.graficoSimulation = [];
    }
    ListaSimulationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        this.id_site = params.sit;
        this.infoService.obtenerInfo().subscribe(function (res) {
            _this.sites = res;
            _this.site = _this.sites[_this.id_site];
            _this.simulations = _this.site.simulation;
            _this.simulations.filter(function (dato) {
                _this.months.push(dato.month);
                _this.hubs.push(dato.hubs.length);
            });
            _this.grafico();
        }, function (err) {
            console.log(err);
        });
    };
    /**
    * Grafico que muestra el total de hubs por dia
    *
    *@return {void}
    */
    ListaSimulationComponent.prototype.grafico = function () {
        this.graficoSimulation = new Chart('graficoSimulation', {
            type: "bar",
            data: {
                labels: this.months,
                datasets: [
                    {
                        label: 'Hubs',
                        data: this.hubs,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgb(75, 192, 192)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                tooltips: {
                    intersect: false,
                    titleFontSize: 15,
                    bodyFontSize: 15
                },
                scales: {
                    yAxes: [{
                            ticks: { beginAtZero: true }
                        }]
                },
                legend: {
                    display: true,
                    labels: {
                        fontSize: 15
                    }
                },
            }
        });
    };
    ListaSimulationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-lista-simulation',
            templateUrl: './lista-simulation.component.html',
            styleUrls: ['./lista-simulation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InfoService,
            ActivatedRoute])
    ], ListaSimulationComponent);
    return ListaSimulationComponent;
}());
export { ListaSimulationComponent };
//# sourceMappingURL=lista-simulation.component.js.map