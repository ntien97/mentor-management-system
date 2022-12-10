import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorService } from './mentor/mentor.service';

@NgModule({
  imports: [CommonModule],
  providers: [MentorService],
})
export class DataAccessModule {}
