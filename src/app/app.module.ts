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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    FagComponent,
    FirstDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  entryComponents: [FirstDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
