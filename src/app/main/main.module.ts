import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {MainRoutingModule} from './main-routing.module';
import {FormsModule} from '@angular/forms';
import { OrdersComponent } from './dash-board/orders/orders.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CreateItemsComponent } from './dash-board/create-items/create-items.component';
import { EditItemsComponent } from './dash-board/edit-items/edit-items.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CreateCustomerComponent } from './customer-order/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer-order/edit-customer/edit-customer.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    MainComponent,
    DashBoardComponent,
    OrdersComponent,
    CreateItemsComponent,
    EditItemsComponent,
    CustomerOrderComponent,
    CreateCustomerComponent,
    EditCustomerComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
})
export class MainModule {
}
