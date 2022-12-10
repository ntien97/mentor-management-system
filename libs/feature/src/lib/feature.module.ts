import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMentor from './+state/mentor.reducer';
import { MentorEffects } from './+state/mentor.effects';
import { MentorFacade } from './+state/mentor.facade';
import { DataAccessModule } from '@mentor-management-system/data-access';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    StoreModule.forFeature(fromMentor.mentorFeature),
    EffectsModule.forFeature([MentorEffects]),
  ],
  declarations: [MentorListComponent],
  exports: [MentorListComponent],
  providers: [MentorFacade],
})
export class FeatureModule {}
