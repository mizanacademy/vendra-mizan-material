import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FagComponent } from './fag/fag.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FirstDialogComponent } from './dialogs/first-dialog/first-dialog.component';
import { ServicesComponent } from './services/services.component';
import { ExampleComponent } from './example/example.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableExampleComponent } from './table-example/table-example.component';
import { ApiService } from 'src/services/api-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    FagComponent,
    FirstDialogComponent,
    ServicesComponent,
    ExampleComponent,
    ContactUsComponent,
    TableExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [FirstDialogComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
