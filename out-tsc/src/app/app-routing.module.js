import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaSitesComponent } from './componentes/lista-sites/lista-sites.component';
import { ListaSimulationComponent } from './componentes/lista-simulation/lista-simulation.component';
import { ListaHubsComponent } from './componentes/lista-hubs/lista-hubs.component';
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: ListaSitesComponent
    },
    {
        path: 'dashboard/simulation/:sit',
        component: ListaSimulationComponent
    },
    {
        path: 'dashboard/hubs/:sit/:sim',
        component: ListaHubsComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map