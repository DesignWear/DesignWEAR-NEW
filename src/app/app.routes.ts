import { Routes } from '@angular/router';
import { SplashPage } from './pages/splash-page/splash.page';
import { HomePage } from './pages/home/home.page';
import { SaiasPage } from './pages/creation/saias/saias.page';
import { Saia1Page } from './pages/creation/saia-1/saia-1.page';

export const routes: Routes = [
    { path: '', component: SplashPage },
    { path: 'home', component: HomePage },
    { path: 'criacao/saias', component: SaiasPage },
    { path: 'criacao/saia-1', component: Saia1Page },
];
