import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { departmentReducer } from './store/reducers';
import { DepartmentEffects } from './store/effect';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({eventCoalescing : true}),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ departments : departmentReducer }),
    provideEffects([ 
      DepartmentEffects

     ])
  ]
};
