import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserdetailsSacalDirective } from './userdetails-sacal.directive';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserDetailsComponent,
    SpinnerComponent,
    UserdetailsSacalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,

    }),


  ],
  exports :[
    MatCardModule,
    MatIconModule,
    SpinnerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
