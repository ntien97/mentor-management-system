import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMentor from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import { DataAccessModule } from '@mentor-management-system/data-access';
import { UserCardComponent } from './components/dumb/user-card/user-card.component';
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiColorModule,
  TuiErrorModule,
  TuiHintControllerModule,
  TuiLinkModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { StudentListComponent } from './components/student-list/student-list.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AddNewButtonComponent } from './components/dumb/add-new-button/add-new-button.component';
import { UserDialogComponent } from './components/dumb/user-dialog/user-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    StoreModule.forFeature(fromMentor.userFeature),
    EffectsModule.forFeature([UserEffects]),
    TuiIslandModule,
    TuiLinkModule,
    TuiButtonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
    ]),
    TuiSvgModule,
    TuiInputModule,
    TuiErrorModule,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipeModule,
  ],
  declarations: [
    MentorListComponent,
    UserCardComponent,
    StudentListComponent,
    DashboardComponent,
    AddNewButtonComponent,
    UserDialogComponent,
  ],
  exports: [MentorListComponent],
  providers: [UserFacade],
})
export class FeatureModule {}
