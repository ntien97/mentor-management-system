import { Component } from '@angular/core';
import { MentorService } from '@mentor-management-system/data-access';

@Component({
  selector: 'mentor-management-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public readonly mentorService: MentorService) {
    this.mentorService.getMentors().subscribe();
  }
}
