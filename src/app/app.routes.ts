import { Routes } from '@angular/router';
import { SplashPage } from './pages/splash-page/splash.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    { path: '', component: SplashPage },
    { path: 'home', component: HomePage },
];
