import { ApplicationConfig, provideAppInitializer } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideMarkdown } from 'ngx-markdown';
import { initializeApp } from './config/app.initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideMarkdown(),
    provideAppInitializer(initializeApp)
  ]
};
