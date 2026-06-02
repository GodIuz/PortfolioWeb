import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { lastValueFrom, catchError, of } from 'rxjs';

export function initApp(translate: TranslateService) {
  return () => {
    translate.addLangs(['en', 'el']);
    translate.setDefaultLang('en');
    
    const browserLang = translate.getBrowserLang();
    const langToUse = browserLang?.match(/el/) ? 'el' : 'en';
    return lastValueFrom(
      translate.use(langToUse).pipe(catchError(() => of(null)))
    );
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), 
    provideTranslateService({
      fallbackLang: 'en'
    }),
    provideTranslateHttpLoader({
      prefix: './i18n/',
      suffix: '.json'
    }),

    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [TranslateService],
      multi: true
    }
  ]
};