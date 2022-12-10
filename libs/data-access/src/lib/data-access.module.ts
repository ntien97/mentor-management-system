import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorService } from './mentor/mentor.service';
import { StudentService } from './student/student.service';

@NgModule({
  imports: [CommonModule],
  providers: [MentorService, StudentService],
})
export class DataAccessModule {}
