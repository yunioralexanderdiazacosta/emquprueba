import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InfoService } from '../../servicios/info.service';
import { ActivatedRoute } from '@angular/router';
var ListaHubsComponent = /** @class */ (function () {
    function ListaHubsComponent(infoService, activatedRoute) {
        this.infoService = infoService;
        this.activatedRoute = activatedRoute;
        this.p = 1;
        this.order = "hub_name";
        this.campo1 = false;
        this.campo2 = false;
        this.campo3 = false;
        this.campo4 = false;
    }
    ListaHubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        this.id_site = params.sit;
        this.infoService.obtenerInfo().subscribe(function (res) {
            _this.info = res[_this.id_site].simulation[params.sim];
            _this.hubs = _this.info.hubs;
            _this.month = _this.info.month;
        });
    };
    /**
    * Ordena la lista de productos de acuerdo al estado actual
    *
    *@return  {Array}
    */
    ListaHubsComponent.prototype.ordenarAsc = function (campo) {
        this.hubs.sort(function (a, b) {
            if (a[campo] < b[campo]) {
                return -1;
            }
            else if (a[campo] > b[campo]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.hubs = this.hubs;
    };
    ListaHubsComponent.prototype.ordenarDesc = function (campo) {
        this.hubs.sort(function (a, b) {
            if (a[campo] > b[campo]) {
                return -1;
            }
            else if (a[campo] < b[campo]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.hubs = this.hubs;
    };
    ListaHubsComponent.prototype.ordenarNombreAsc = function () {
        this.campo1 = true;
        this.ordenarAsc("");
        this.hubs();
    };
    ListaHubsComponent.prototype.ordenarNombreDesc = function () {
        this.campo1 = false;
        this.ordenarDesc("forecasted_traffic");
        this.hubs();
    };
    ListaHubsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-lista-hubs',
            templateUrl: './lista-hubs.component.html',
            styleUrls: ['./lista-hubs.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InfoService,
            ActivatedRoute])
    ], ListaHubsComponent);
    return ListaHubsComponent;
}());
export { ListaHubsComponent };
//# sourceMappingURL=lista-hubs.component.js.map