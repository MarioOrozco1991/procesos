import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';




//rutas
import { APPROUTING } from './app.routes';


//servicios


//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { CrearProcesoComponent } from './components/crear-proceso/crear-proceso.component';
import { AprobacionComponent } from './components/aprobacion/aprobacion.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    CrearProcesoComponent,
    AprobacionComponent,
    ReportesComponent,
    FormularioComponent
],
imports: [
    BrowserModule,
    APPROUTING,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
