import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListaSitesComponent } from './componentes/lista-sites/lista-sites.component';
import { HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ListaSimulationComponent } from './componentes/lista-simulation/lista-simulation.component';
import { ListaHubsComponent } from './componentes/lista-hubs/lista-hubs.component';
import { GraficoSimulationComponent } from './componentes/grafico-simulation/grafico-simulation.component';
import { FiltroPipe } from './_pipes/filtro/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaSitesComponent,
    NavegacionComponent,
    ListaSimulationComponent,
    ListaHubsComponent,
    GraficoSimulationComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
