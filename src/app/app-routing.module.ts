import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DetailGridComponent } from './pages/profile/detail-grid/detail-grid.component';

import { DxDataGridModule, DxFormModule, DxSelectBoxModule, DxButtonModule, DxDropDownBoxModule, DxTreeViewModule, DxCalendarModule,
  DxPopupModule, DxTabPanelModule, DxChartModule, DxPivotGridModule, DxResponsiveBoxModule, DxDateBoxModule, DxTagBoxModule,
  DxValidatorModule, DxLoadPanelModule, DxToastModule, DxTemplateModule, DxSpeedDialActionModule, DxRadioGroupModule, DxTabsModule, DxScrollViewModule,
  DxCheckBoxModule, DxPivotGridFieldChooserModule, DxNumberBoxModule, DxAutocompleteModule} from 'devextreme-angular';

  import { RentContComponent } from './pages/rent-cont/rent-cont.component';
  import { RentGerComponent } from './pages/rent-ger/rent-ger.component';
  import { IngresosComponent } from './pages/ingresosAnuales/ingresos.component';
  import { GridCellDataPipe} from './pages/rent-ger/rent-ger.component';
  import { CotizadorComponent } from './pages/cotizador/cotizador.component';
  import { IngresosDetalladosComponent } from './pages/ingresos-detallados/ingresos-detallados.component';
  import { KilometrosComponent } from './pages/kilometros/kilometros.component';
  import { CostosComponent } from './pages/costos/costos.component';
  import { CostosAnualesComponent } from './pages/costos-anuales/costos-anuales.component';
  import { PermisoBitacoraComponent } from './pages/persmiso-bitacora/permiso-bitacora.component';
  import { BalanzaComponent } from './pages/balanza/balanza.component';
  import { CicloViajeComponent } from './pages/ciclo-viaje/ciclo-viaje.component';
  import { RentaComponent } from './pages/renta/renta.component';
  import { CostosAnualesNewComponent } from './pages/costos-anuales copy/costos-anuales.component';
  import { IndicadoresComponent } from './pages/indicadores/indicadores.component'; 
  import { CarteraClientesComponent } from './pages/carteraClientes/carteraClientes.component';
  import { ValidacionIngresoComponent } from './pages/validacionIngreso/validacionIngreso.component';
  import { ProyeccionCostosComponent } from './pages/proyeccionCostos/proyeccionCostos.component';
  import { RentabilidadViajesComponent } from './pages/rentabilidadViajes/rentabilidadViajes.component';
  import { RendimientoDieselComponent } from './pages/rendimientoDiesel/rendimientoDiesel.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'ingresos',
    component: IngresosDetalladosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },

  {
    path: 'rentabilidadcontable',
    component: RentContComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'rentabilidadgerencial',
    component: RentGerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'cotizador',
    component: CotizadorComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'ingresosAnuales',
    component: IngresosComponent,
    canActivate: [ AuthGuardService ]
  }
  ,
  {
    path: 'kilometros',
    component: KilometrosComponent,
    canActivate: [ AuthGuardService ]
  },
  
  {
    path: 'costos',
    component: CostosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'costos-anuales',
    component: CostosAnualesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'permiso-bitacora',
    component: PermisoBitacoraComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'balanza',
    component: BalanzaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'ciclo-viaje',
    component: CicloViajeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'renta',
    component: RentaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'costos-anuales-new',
    component: CostosAnualesNewComponent,
    canActivate: [ AuthGuardService ]
  },{
    path: 'indicadores',
    component: IndicadoresComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'cartera-clientes',
    component: CarteraClientesComponent,
    canActivate: [ AuthGuardService]
  },
  {
    path: 'validacion-ingreso',
    component: ValidacionIngresoComponent,
    canActivate: [ AuthGuardService]
  },
  {
    path: 'proyeccion-costos',
    component: ProyeccionCostosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'rentabilidad-viajes',
    component: RentabilidadViajesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'rendimiento-diesel',
    component: RendimientoDieselComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }), 
    DxFormModule, 
    DxSelectBoxModule, 
    DxButtonModule, 
    DxDropDownBoxModule, 
    DxTreeViewModule,
    DxCalendarModule, 
    DxPopupModule, 
    DxTabPanelModule, 
    DxDataGridModule, 
    DxChartModule, 
    DxPivotGridModule, 
    DxResponsiveBoxModule, 
    DxDateBoxModule,
    DxTagBoxModule, 
    DxValidatorModule, 
    DxLoadPanelModule, 
    DxToastModule, 
    CommonModule,  
    DxTemplateModule, 
    DxToolbarModule, 
    DxSpeedDialActionModule,
    DxRadioGroupModule, 
    DxTabsModule, 
    DxScrollViewModule, 
    DxCheckBoxModule,
    DxPivotGridFieldChooserModule,
    DxNumberBoxModule,
    DxAutocompleteModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent, 
    ProfileComponent, 
    TasksComponent, 
    DetailGridComponent, 
    RentContComponent, 
    RentGerComponent, 
    GridCellDataPipe,
    IngresosComponent, 
    CotizadorComponent, 
    IngresosDetalladosComponent, 
    KilometrosComponent, 
    CostosComponent, 
    CostosAnualesComponent,
    PermisoBitacoraComponent,
    BalanzaComponent,
    CicloViajeComponent,
    RentaComponent,
    CostosAnualesNewComponent,
    IndicadoresComponent,
    CarteraClientesComponent,
    ValidacionIngresoComponent,
    ProyeccionCostosComponent,
    RentabilidadViajesComponent,
    RendimientoDieselComponent
  ]
})
export class AppRoutingModule { }
