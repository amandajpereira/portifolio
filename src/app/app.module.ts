import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { LinksComponent } from './components/links/links.component';
import { EstudosComponent } from './components/estudos/estudos.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CompetenciasComponent,
    LinksComponent,
    EstudosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
