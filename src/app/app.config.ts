import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { lastValueFrom } from 'rxjs';

export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}

export function initApp(translate: TranslateService) {
  return () => {
    translate.addLangs(['en', 'el']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    const langToUse = browserLang?.match(/el/) ? 'el' : 'en';
    return lastValueFrom(translate.use(langToUse));
  };
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
