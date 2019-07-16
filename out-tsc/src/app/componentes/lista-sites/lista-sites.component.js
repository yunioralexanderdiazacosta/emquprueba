import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InfoService } from '../../servicios/info.service';
var ListaSitesComponent = /** @class */ (function () {
    function ListaSitesComponent(infoService) {
        this.infoService = infoService;
        this.sites = [];
    }
    ListaSitesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoService.obtenerInfo().subscribe(function (res) {
            _this.sites = res;
            console.log(_this.sites);
        }, function (err) {
            console.log(err);
        });
    };
    ListaSitesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-lista-sites',
            templateUrl: './lista-sites.component.html',
            styleUrls: ['./lista-sites.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InfoService])
    ], ListaSitesComponent);
    return ListaSitesComponent;
}());
export { ListaSitesComponent };
//# sourceMappingURL=lista-sites.component.js.map