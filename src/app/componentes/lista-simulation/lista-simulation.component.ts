import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../servicios/info.service';
import { Chart } from 'chart.js';
import { Simulation } from '../../modelos/Simulation'

@Component({
  selector: 'app-lista-simulation',
  templateUrl: './lista-simulation.component.html',
  styleUrls: ['./lista-simulation.component.scss']
})
export class ListaSimulationComponent implements OnInit {
	sites;
	site;
	simulations: Array<Simulation>;
  p: number = 1;
  id_site: number;
	months: any = [];
	hubs: any = [];
 	graficoSimulation = [];


	constructor(
		public infoService: InfoService,
		public activatedRoute: ActivatedRoute) { }

	ngOnInit() {
  		const params = this.activatedRoute.snapshot.params;
  		this.id_site = params.sit;
  		this.infoService.obtenerInfo().subscribe(
			(res: any) => {
        		this.sites = res;
        	 	this.site = this.sites[this.id_site];
        	 	this.simulations = this.site.simulation;
        	 	this.simulations.filter(dato => {
        	 		this.months.push(dato.month);
        	 		this.hubs.push(dato.hubs.length);
        	 	})
        	 	this.grafico();
			},
			err => 
			{
				console.log(err);
			}
		)
  	}

  	grafico()
  	{
  		this.graficoSimulation = new Chart('graficoSimulation', 
  		{
  			type: "bar",
  			data: 
  			{
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
  			options:{
  				tooltips: 
  				{
                    intersect: false,
                    titleFontSize: 15,
                    bodyFontSize: 15
                },

  				scales:
				{
					yAxes:[{
						ticks:{ beginAtZero: true }
					}]
				},

				legend: {
                    display: true,
                    labels: {
                      fontSize:15
                    }
                },
  			}	
  		})
  	}
}
