import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mentor-management-system-add-new-button',
  templateUrl: './add-new-button.component.html',
  styleUrls: ['./add-new-button.component.less'],
})
export class AddNewButtonComponent {
  @Output() new = new EventEmitter<void>();
}
