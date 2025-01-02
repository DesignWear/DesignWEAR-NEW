import { Routes } from '@angular/router';
import { SplashPage } from './pages/splash-page/splash.page';
import { HomePage } from './pages/home/home.page';
import { SaiasPage } from './pages/creation/saias/saias.page';
import { Saia1Page } from './pages/creation/saia-1/saia-1.page';
import { CreationPage } from './pages/creation/creation.page';
import { Saia2Page } from './pages/creation/saia-2/saia-2.page';
import { Saia3Page } from './pages/creation/saia-3/saia-3.page';
import { Saia4Page } from './pages/creation/saia-4/saia-4.page';

export const routes: Routes = [
    { path: '', component: SplashPage },
    { path: 'home', component: HomePage },
    {
        path: 'creation',
        component: CreationPage,
        children: [
            { path: 'saias', component: SaiasPage },
            { path: 'saia-1', component: Saia1Page },
            { path: 'saia-2', component: Saia2Page },
            { path: 'saia-3', component: Saia3Page },
            { path: 'saia-4', component: Saia4Page },
        ],
    },
];
