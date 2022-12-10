import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMentor from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import { DataAccessModule } from '@mentor-management-system/data-access';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    StoreModule.forFeature(fromMentor.userFeature),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [MentorListComponent],
  exports: [MentorListComponent],
  providers: [UserFacade],
})
export class FeatureModule {}
