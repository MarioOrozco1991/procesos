import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/shared/home/home.component';
import { CrearProcesoComponent } from './components/crear-proceso/crear-proceso.component';
import { AprobacionComponent } from './components/aprobacion/aprobacion.component';
import { ReportesComponent } from './components/reportes/reportes.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'crear-proceso', component: CrearProcesoComponent },
    { path: 'aprobacion', component: AprobacionComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES, { useHash:true});

