import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userFeature } from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

@NgModule({
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    StoreModule.forFeature(userFeature),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [UserFacade, IsLoggedInGuard],
})
export class AuthModule {}
