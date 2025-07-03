import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { LinksComponent } from './components/links/links.component';
import { EstudosComponent } from './components/estudos/estudos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CompetenciasComponent,
    LinksComponent,
    EstudosComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
