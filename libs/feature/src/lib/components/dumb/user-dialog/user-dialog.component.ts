import { Component, Inject } from "@angular/core";
import { TuiDialogContext, TuiDialogService } from "@taiga-ui/core";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus";
import { UserDialogInputType, UserDialogOutputType } from "./user-dialog.type";
import { IUser, UserRole } from "@mentor-management-system/util";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "mentor-management-system-user-dialog",
  templateUrl: "./user-dialog.component.html",
  styleUrls: ["./user-dialog.component.scss"]
})
export class UserDialogComponent {
  userForm = new FormGroup({
    email: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required]
    }),
    firstName: new FormControl("", {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    }),
    lastName: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)
      ]
    })
  });

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<
      UserDialogOutputType,
      UserDialogInputType
    >
  ) {
  }

  get data(): UserDialogInputType {
    return this.context.data;
  }

  get user(): IUser | undefined {
    if (this.data.type === "edit") {
      return this.data.user;
    }
    return undefined;
  }

  get role(): UserRole {
    switch (this.data.type) {
      case "create":
        return this.data.role;
      case "edit":
        return this.data.user.role;
    }
  }

  submit(): void {
    if (!this.userForm.valid) return;

    this.context.completeWith({
      user: this.userForm.value
    });
  }

  cancel() {
    this.context.completeWith(false);
  }
}
