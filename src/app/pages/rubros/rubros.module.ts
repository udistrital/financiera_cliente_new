import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { RubrosRoutingModule, routedComponents } from './rubros-routing.module';
import { NbTreeGridModule, NbSelectModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RubrosRoutingModule,
    NbTreeGridModule,
    NbSelectModule,
  ]
})
export class RubrosModule { }
