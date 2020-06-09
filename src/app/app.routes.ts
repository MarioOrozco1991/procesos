import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/shared/content/content.component';
import { CrearProcesoComponent } from './components/crear-proceso/crear-proceso.component';


const ROUTES: Routes = [
    { path: 'content', component: ContentComponent },
    { path: 'crear-proceso', component: CrearProcesoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES, { useHash:true});