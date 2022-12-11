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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeatureModule } from '@mentor-management-system/feature';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import {
  AuthModule,
  IsLoggedInGuard,
  LoginComponent,
  LoginRedirectInterceptor,
  TokenInterceptor,
} from '@mentor-management-system/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
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
        path: 'mentor-management',
        loadChildren: () =>
          import('@mentor-management-system/feature').then(
            (module) => module.FeatureModule
          ),
        canActivate: [IsLoggedInGuard],
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/mentor-management', pathMatch: 'full' },
      { path: '', redirectTo: '/mentor-management', pathMatch: 'full' },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginRedirectInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
