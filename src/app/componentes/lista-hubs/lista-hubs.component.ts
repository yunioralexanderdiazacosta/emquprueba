import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../servicios/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-hubs',
  templateUrl: './lista-hubs.component.html',
  styleUrls: ['./lista-hubs.component.scss']
})
export class ListaHubsComponent implements OnInit {
	info; 
    hubs;
    month;
    id_site:number;
    p: number = 1;
    campo1: boolean = false;
    campo2: boolean = false;
    campo3: boolean = false;
    campo4: boolean = false;

  	constructor(
  		public infoService: InfoService,
  		public activatedRoute: ActivatedRoute) { }

  	ngOnInit() {
  		const params = this.activatedRoute.snapshot.params;
  		this.id_site = params.sit;
  		this.infoService.obtenerInfo().subscribe(
  			(res: any) => {
  				this.info = res[this.id_site].simulation[params.sim];
  				this.hubs = this.info.hubs;
  				this.month = this.info.month;
  			}
  		)
  	}

    ordenarAsc(campo: string) {
      this.hubs.sort((a: any, b: any) => {
          if (a[campo] < b[campo]) {
              return -1;
          } else if (a[campo] > b[campo]) {
              return 1;
          } else {
              return 0;
          }
      });
      this.hubs = this.hubs;
   }

   ordenarDesc(campo: string){
       this.hubs.sort((a: any, b: any) => {
          if (a[campo] > b[campo]) {
              return -1;
          } else if (a[campo] < b[campo]) {
              return 1;
          } else {
              return 0;
          }
      });
      this.hubs = this.hubs;
   }

   ordenarCampo1Asc()
   {
       this.campo1 =true;
       this.ordenarAsc("hub_name");
       this.hubs();
   }

   ordenarCampo1Desc()
   {
       this.campo1 = false;
       this.ordenarDesc("hub_name");
       this.hubs();
   }

   ordenarCampo2Asc()
   {
       this.campo2 =true;
       this.ordenarAsc("forecasted_traffic");
       this.hubs();
   }

   ordenarCampo2Desc()
   {
       this.campo2 = false;
       this.ordenarDesc("forecasted_traffic");
       this.hubs();
   }

   ordenarCampo3Asc()
   {
       this.campo3 =true;
       this.ordenarAsc("max_port_size");
       this.hubs();
   }

   ordenarCampo3Desc()
   {
       this.campo3 = false;
       this.ordenarDesc("max_port_size");
       this.hubs();
   }

   ordenarCampo4Asc()
   {
       this.campo4 =true;
       this.ordenarAsc("provisioned_capacity");
       this.hubs();
   }

   ordenarCampo4Desc()
   {
       this.campo4 = false;
       this.ordenarDesc("provisioned_capacity");
       this.hubs();
   }
}
