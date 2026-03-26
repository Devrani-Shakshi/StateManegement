import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DepartmentService } from '../service/department';
import { map, mergeMap } from 'rxjs';
import { loadDepartment, loadDepartmentSuccess } from './action';

@Injectable()
export class DepartmentEffects {
  action$ = inject(Actions);
  constructor(private departmentService: DepartmentService) {}

  loadDeapartment$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadDepartment),
      mergeMap(() =>
        this.departmentService
          .getDept()
          .pipe(map((departments: any) => loadDepartmentSuccess({ departments }))
        )
      )
    )
  );
}
