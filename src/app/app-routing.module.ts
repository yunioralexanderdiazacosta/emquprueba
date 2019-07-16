import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaSitesComponent } from './componentes/lista-sites/lista-sites.component';
import { ListaSimulationComponent } from './componentes/lista-simulation/lista-simulation.component';
import { ListaHubsComponent } from './componentes/lista-hubs/lista-hubs.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},

	{
		path: 'dashboard',
		component: ListaSitesComponent,
		data: { animation: 'Dashboard'}
	},

	{
		path: 'dashboard/simulation/:sit',
		component: ListaSimulationComponent,
		data: { animation: 'Simulations'}
	},

	{
		path: 'dashboard/hubs/:sit/:sim',
		component: ListaHubsComponent,
		data: { animation: 'Hubs' }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
