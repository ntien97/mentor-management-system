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
import { DataAccessModule } from '@mentor-management-system/data-access';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from '@mentor-management-system/feature';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // TODO: maybe remove & use store instead
    DataAccessModule,
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiSvgModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
