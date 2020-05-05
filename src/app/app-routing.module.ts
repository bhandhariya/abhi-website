import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LLCComponent } from './site/start-with-your-business/llc/llc.component';
import { CCorporationComponent } from './site/start-with-your-business/c-corporation/c-corporation.component';


const routes: Routes = [
  {path:'start-with-your-busness/LLC',component:LLCComponent},
  {path:'start-with-your-busness/c-Corp',component:CCorporationComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
