import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {CustomerOrderComponent} from './customer-order/customer-order.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',//canActivate: [AuthGuardUser],
        component: DashBoardComponent,
      },
      {
        path: 'orders',//canActivate: [AuthGuardUser],
        component: CustomerOrderComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
