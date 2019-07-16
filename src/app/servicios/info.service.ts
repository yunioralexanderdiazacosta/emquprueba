import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sites } from '../_datos/sites';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  public obtenerInfo()
  {
  	return this.http.get('./assets/info.json');
  }

  public guardarInfo(site)
  {
  	return sites.push(site);
  }

  public obtenerSites()
  {
    return sites;
  }
}
