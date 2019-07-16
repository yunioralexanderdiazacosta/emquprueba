import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sites } from '../_datos/sites';
var InfoService = /** @class */ (function () {
    function InfoService(http) {
        this.http = http;
    }
    InfoService.prototype.obtenerInfo = function () {
        return this.http.get('./assets/info.json');
    };
    InfoService.prototype.guardarInfo = function (site) {
        return sites.push(site);
    };
    InfoService.prototype.obtenerSites = function () {
        return sites;
    };
    InfoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InfoService);
    return InfoService;
}());
export { InfoService };
//# sourceMappingURL=info.service.js.map