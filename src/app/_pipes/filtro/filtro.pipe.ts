import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], textoBuscar: string,  prop?: any): any {
    if(!value){
    	return [];
    }

    if(!textoBuscar || !prop){
    	return value;
    }

    const _textoBuscar = textoBuscar.toLowerCase(),
    _isArr = Array.isArray(value),
    _flag = _isArr && typeof value[0] === 'object' ? true : _isArr

    return value.filter(ele => {
    	let val = _flag ? ele[prop]:ele;
    	return val.toString().toLowerCase().includes(_textoBuscar);
    });
  }

}
