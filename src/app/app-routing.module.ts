import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FagComponent } from './fag/fag.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ExampleComponent } from './example/example.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TableExampleComponent } from './table-example/table-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fag', component: FagComponent },
  { path: 'table-ex', component: TableExampleComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
