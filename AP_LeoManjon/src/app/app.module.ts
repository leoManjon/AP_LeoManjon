import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { LogoAPComponent } from './componets/logo-ap/logo-ap.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcerdaDeComponent } from './componets/acerda-de/acerda-de.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { EducacionComponent } from './componets/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componets/hys/hys.component';
import { ProyectosComponent } from './componets/proyectos/proyectos.component';
import { FooterComponent } from './componets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcerdaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
