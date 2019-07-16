import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { ListaSitesComponent } from './componentes/lista-sites/lista-sites.component';
import { HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ListaSimulationComponent } from './componentes/lista-simulation/lista-simulation.component';
import { ListaHubsComponent } from './componentes/lista-hubs/lista-hubs.component';
import { GraficoSimulationComponent } from './componentes/grafico-simulation/grafico-simulation.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ListaSitesComponent,
                NavegacionComponent,
                ListaSimulationComponent,
                ListaHubsComponent,
                GraficoSimulationComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                NgxPaginationModule,
                OrderModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map