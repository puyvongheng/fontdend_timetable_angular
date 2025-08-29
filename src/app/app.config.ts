import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RoleGuard } from './role.guard';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideServiceWorker } from '@angular/service-worker';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [//added providers
    RoleGuard,
    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: Aura, // ប្រើ theme Aura
        options: {
          darkModeSelector: '.my-app-dark', // កំណត់ការបង្ហាញអោយផ្លាស់ប្តូរជារបៀបងងឹត
          ripple: true,             // បើកប្រសិទ្ធភាពរលក
          theme: 'aura',                 // កំណត់ពណ៌ស្បែកទៅ 'Aura' Nova  Bootstrap  
          prefix: 'p',               // កំណត់បុព្វបទទៅ 'p'
          cssLayer: false,  // បិទការប្រើប្រាស់ CSS layers
        }
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),//added provideZoneChangeDetection
    provideRouter(routes),//added provideRouter
    provideHttpClient(), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(), provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }), provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }) // Added HttpClientModule provider
  ]
};
