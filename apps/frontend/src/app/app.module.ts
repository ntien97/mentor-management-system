import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from '@mentor-management-system/feature';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  AuthModule,
  IsLoggedInGuard,
  LoginComponent,
} from '@mentor-management-system/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardComponent],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiSvgModule,
    FeatureModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    // TODO: Remove this when in different environment
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [IsLoggedInGuard],
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
