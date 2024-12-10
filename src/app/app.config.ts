import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {NbThemeModule} from '@nebular/theme'
import { routes } from './app.routes';
import { BASE_PATH } from './core/openapi/variables';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(NbThemeModule.forRoot({ name: 'default' })),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: BASE_PATH, useValue: environment.apiUrl },
  ]
};
