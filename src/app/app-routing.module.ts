import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FagComponent } from './fag/fag.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fag', component: FagComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
