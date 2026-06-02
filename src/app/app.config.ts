import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'en'
    }),
    provideTranslateHttpLoader({
      prefix: './i18n/',
      suffix: '.json'
    })
  ]
};
