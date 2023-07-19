import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { EditComponent } from './components/edit/edit.component';
import { FormInfluComponent } from './components/form-influ/form-influ.component';
import { FilterTextComponent } from './components/filter-text/filter-text/filter-text.component';
import { FilterNumberComponent } from './components/filter-number/filter-number/filter-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegisterComponent,
    LoginComponent,
    DashboardNavComponent,
    EditComponent,
    FormInfluComponent,
    FilterTextComponent,
    FilterNumberComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
