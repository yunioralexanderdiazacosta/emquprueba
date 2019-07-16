import { Component, OnInit, Input } from '@angular/core';
import { InfoService  } from '../../servicios/info.service';
import { Site } from '../../modelos/Site';

@Component({
  selector: 'app-lista-sites',
  templateUrl: './lista-sites.component.html',
  styleUrls: ['./lista-sites.component.scss']
})
export class ListaSitesComponent implements OnInit {
 sites: Array<Site> = [];

  constructor(public infoService: InfoService) { }

  	ngOnInit() {

  		this.infoService.obtenerInfo().subscribe(
			(res: any) => {
        		this.sites = res;
        		console.log(this.sites);
			},
			err => {
				console.log(err);
			}
		)
  	}
}
