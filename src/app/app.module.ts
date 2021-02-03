import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WaterSavingsIntroComponent }from './components/water-savings-intro/water-savings-intro.component';
import { RequestQuoteComponent } from './components/request-quote/request-quote.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SuppliersFaqsComponent } from './components/suppliers-faqs/suppliers-faqs.component';
import { BenefitsTabComponent } from './components/benefits-tab/benefits-tab.component';
import { SupplierLogoAnimComponent } from './components/supplier-logo-anim/supplier-logo-anim.component';
import { ReasonsToSwitchComponent } from './components/reasons-to-switch/reasons-to-switch.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, DashboardComponent, WaterSavingsIntroComponent, RequestQuoteComponent, 
    SuppliersComponent, SuppliersFaqsComponent, BenefitsTabComponent, SupplierLogoAnimComponent, 
    ReasonsToSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
