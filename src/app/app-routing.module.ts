import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
  path: 'menu', loadChildren: './shared/shared.module#SharedModule'
},
  {
    path: 'customer', loadChildren: './customer/customer.module#CustomerModule'
  },
  {
    path: 'product', loadChildren: './product/product.module#ProductModule'
  }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
