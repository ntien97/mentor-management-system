import { filter, map, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const httpError =
  () =>
  (
    $input: Observable<{ error: Error | null }>
  ): Observable<HttpErrorResponse> =>
    $input.pipe(
      map(({ error }) => error),
      filter(
        (error: Error | null) => !!error && error instanceof HttpErrorResponse
      ),
      map((error) => error as HttpErrorResponse)
    );
