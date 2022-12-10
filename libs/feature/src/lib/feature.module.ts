import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MentorListComponent],
  exports: [MentorListComponent],
})
export class FeatureModule {}
