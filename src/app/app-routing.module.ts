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
  DxCheckBoxModule} from 'devextreme-angular';

  import { RentContComponent } from './pages/rent-cont/rent-cont.component';
  import { RentGerComponent } from './pages/rent-ger/rent-ger.component';
  import { IngresosComponent } from './pages/ingresosAnuales/ingresos.component';
  import { GridCellDataPipe} from './pages/rent-ger/rent-ger.component';
  import { CotizadorComponent } from './pages/cotizador/cotizador.component';
  import { IngresosDetalladosComponent } from './pages/ingresos-detallados/ingresos-detallados.component';
  import { KilometrosComponent } from './pages/kilometros/kilometros.component';
  import { CostosComponent } from './pages/costos/costos.component';
  import { CostosAnualesComponent } from './pages/costos-anuales/costos-anuales.component'


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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxFormModule, DxSelectBoxModule, DxButtonModule, DxDropDownBoxModule, DxTreeViewModule,
    DxCalendarModule, DxPopupModule, DxTabPanelModule, DxDataGridModule, DxChartModule, DxPivotGridModule, DxResponsiveBoxModule, DxDateBoxModule,
    DxTagBoxModule, DxValidatorModule, DxLoadPanelModule, DxToastModule, CommonModule,  DxTemplateModule, DxToolbarModule, DxSpeedDialActionModule,
    DxRadioGroupModule, DxTabsModule, DxScrollViewModule, DxCheckBoxModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent, DetailGridComponent, RentContComponent, RentGerComponent, GridCellDataPipe,
    IngresosComponent, CotizadorComponent, IngresosDetalladosComponent, KilometrosComponent, CostosComponent, CostosAnualesComponent]
})
export class AppRoutingModule { }
