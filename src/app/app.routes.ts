import { Routes } from '@angular/router';
import { SplashPage } from './pages/splash-page/splash.page';
import { HomePage } from './pages/home/home.page';
import { SaiasPage } from './pages/creation/saias/saias.page';
import { Saia1Page } from './pages/creation/saia-1/saia-1.page';
import { CreationPage } from './pages/creation/creation.page';
import { Saia2Page } from './pages/creation/saia-2/saia-2.page';
import { Saia3Page } from './pages/creation/saia-3/saia-3.page';
import { Saia4Page } from './pages/creation/saia-4/saia-4.page';
import { BasePage } from './pages/base/base.page';
import { ModelingPage } from './pages/modeling/modeling.page';
import { CuttingPage } from './pages/cutting/cutting.page';
import { MakingPage } from './pages/making/making.page';
import { AppLayoutComponent } from './layout/app-layout-component/app-layout.component';
import { FrankensteinsPage } from './pages/creation/frankensteins/frankenstein.page';
import { ModelingMenuPage } from './pages/modeling/modeling-menu/modeling-menu.page';
import { ModelingAcabamento1Page } from './pages/modeling/modeling-acabamento-1/modeling-acabamento-1.page';
import { ModelingAmplitude1Page } from './pages/modeling/modeling-amplitude-1/modeling-amplitude-1.page';
import { ModelingComprimentoPage } from './pages/modeling/modeling-comprimento/modeling-comprimento.page';
import { ModelingRecortePage } from './pages/modeling/modeling-recorte/modeling-recorte.page';
import { ModelingMoldes1Page } from './pages/modeling/modeling-models-1/modeling-moldes-1.page';
import { ModelingAmplitude2Page } from './pages/modeling/modeling-amplitude-2/modeling-amplitude-2.page';
import { ModelingAcabamento2Page } from './pages/modeling/modeling-acabamento-2/modeling-acabamento-2.page';
import { ModelingMoldes2Page } from './pages/modeling/modeling-models-2/modeling-moldes-2.page';

export const routes: Routes = [
    { path: '', component: SplashPage },
    {
        path: 'app',
        component: AppLayoutComponent,
        children: [
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
                    { path: 'frankensteins', component: FrankensteinsPage },
                    { path: '', redirectTo: 'saias', pathMatch: 'full' },
                ],
            },
            { path: 'base', component: BasePage },
            {
                path: 'modeling',
                component: ModelingPage,
                children: [
                    { path: 'menu', component: ModelingMenuPage },
                    { path: 'comprimento', component: ModelingComprimentoPage },
                    { path: 'recorte', component: ModelingRecortePage },
                    { path: 'amplitude-1', component: ModelingAmplitude1Page },
                    { path: 'amplitude-2', component: ModelingAmplitude2Page },
                    { path: 'acabamento-1', component: ModelingAcabamento1Page },
                    { path: 'acabamento-2', component: ModelingAcabamento2Page },
                    { path: 'moldes-1', component: ModelingMoldes1Page },
                    { path: 'moldes-2', component: ModelingMoldes2Page },
                    { path: '', redirectTo: 'menu', pathMatch: 'full' },
                ],
            },
            { path: 'cutting', component: CuttingPage },
            { path: 'making', component: MakingPage },
        ],
    },
    { path: '**', redirectTo: 'app/home' },
];
