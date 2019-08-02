import { Component, OnInit, ViewChild } from '@angular/core';
import { FORM_INFO_FUENTE } from './form_info_fuente';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { FuenteFinanciamiento } from '../../../@core/data/models/fuente_financiamiento';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { NbStepperComponent } from '@nebular/theme/components/stepper/stepper.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})
export class FuentesComponent implements OnInit {
  formInfoFuente: any;
  rubroSeleccionado: any;
  optionView: string;
  info_fuente: FuenteFinanciamiento;
  clean = false;
  rubrosAsignados: any = [];
  dependencias: any = [];
  dependenciasAsociadas: any = {};
  entrarEditar: boolean;
  // dependenciaSeleccionada: any = [];
  rubrosAsociados: any = {};
  @ViewChild('steep') steep: NbStepperComponent;

  constructor(
    // private renderer: Renderer2,
    private translate: TranslateService,
    private dependenciaHelper: DependenciaHelper
  ) {
    var myMap = {};
    this.entrarEditar = false;
    this.optionView = 'Apropiaciones';
    this.formInfoFuente = FORM_INFO_FUENTE;
    this.construirForm();
    this.dependenciaHelper.get().subscribe((res: any) => {
      console.info(res);
      this.dependencias = res;
    });
    // this.dependenciaSeleccionada = {
    //   Id: '',
    //   ValorDependencia: 0
    // };
  }

  ngOnInit() {}

  validarForm(event) {
    // console.info('event', event);
    this.info_fuente = event.data.FuenteFinanciamiento;
    // console.info('info', this.info_fuente);
    // debugger;
    this.steep.next();
  }

  validarFormDependencias(event) {
    // console.info('event2', event);
    // console.info('info', this.info_fuente);
    // debugger;
  }

  asignarDependencia($event: any, rubro: Rubro, dependencias: any) {
    console.info(dependencias)
   this.rubrosAsociados[rubro.Codigo].Dependencias.push({Id:dependencias.Id, ValorDependencia:dependencias.ValorDependencia});
console.info(this.rubrosAsociados);
this.entrarEditar = true;
  }


  agregarDependencia($event, rubro: Rubro) {
    this.rubrosAsignados.filter(data => {
      data === rubro;
      data['Dependencias'].push(-1);
    });
  }

  quitarDependencia($event, rubro: Rubro) {
    this.rubrosAsignados.filter(data => {
      data === rubro;
      data['Dependencias'].pop(-1);
    });
  }
  quitarRubro(rubro: Rubro) {
    this.rubrosAsignados = this.rubrosAsignados.filter(p => {
      return JSON.stringify(p) !== JSON.stringify(rubro);
    });

    let prop = rubro.Codigo;
    // console.info(prop);
    delete this.rubrosAsociados[prop];
    // console.info(this.rubrosAsociados);
  }

  receiveMessage($event) {
    if (
      this.rubrosAsignados.filter(data => data.Codigo === $event.Codigo)
        .length === 0
    ) {
      $event['Dependencias'] = [{Id:0,ValorDependencia:0}];  
      // console.info($event);
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
      this.rubrosAsociados[$event.Codigo] = {
        Dependencias: [],
        Productos: []
      };
      // console.info(this.rubrosAsociados);
    }
  }

  registrar() {}

  cleanForm() {}

  aniadirNodo() {}

  construirForm() {
    this.formInfoFuente.btn = this.translate.instant('GLOBAL.continuar');

    for (let i = 0; i < this.formInfoFuente.campos.length; i++) {
      this.formInfoFuente.campos[i].label = this.formInfoFuente.campos[
        i
      ].label_i18n;
      this.formInfoFuente.campos[i].placeholder = this.formInfoFuente.campos[
        i
      ].placeholder_i18n;
    }
  }
}
