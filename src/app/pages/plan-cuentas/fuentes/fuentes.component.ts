import { Component, OnInit } from '@angular/core';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})

export class FuentesComponent implements OnInit {
  formInfoRubro: any;
  rubroSeleccionado: any;
  info_rubro: Rubro;
  clean = false;
  rubrosAsignados :any =[];

  constructor(private translate: TranslateService, private dependenciaHelper: DependenciaHelper) { 
    this.formInfoRubro = FORM_INFO_RUBRO;
    this.construirForm();
    this.dependenciaHelper.get().subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit() {}

  receiveMessage($event){

    if ( this.rubrosAsignados.filter((data)=>(data.Codigo === $event.Codigo)).length === 0 ) {
      $event["dependencias"] = [
        {"nombre": "Prueba"},
        {"nombre": "Prueba2"},
        {"nombre": "Prueba3"},
        {"nombre": "Prueba4"}];
      console.log($event)
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
    }
  }


  validarForm($event){}
  aniadirNodo(){

  }
  cleanForm(){
    
  }

  construirForm() {
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

}
