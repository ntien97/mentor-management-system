import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { UserFacade } from '../+state/user.facade';
import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly userFacade: UserFacade
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userFacade.isLogin$.pipe(
      switchMap((isLogin) => {
        if (!isLogin) {
          return fromPromise(
            this.router.navigate(['/login'], {
              queryParams: { returnUrl: state.url },
            })
          );
        }

        return of(true);
      })
    );
  }
}
