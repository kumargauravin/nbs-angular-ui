import { ApplicationConfig } from '@angular/core';
import { ExtraOptions, Routes, provideRouter, withDebugTracing, withHashLocation } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('../pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: 'vbg/dashboard', redirectTo: 'pages/dashboard' },
  { path: '**', redirectTo: 'pages/404' },
];
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
// const config: ExtraOptions = {
//   useHash: false,
// };
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes/*, withDebugTracing()*/), provideClientHydration(), provideAnimations()]
};
