import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  menuAberto = false;

scrollSmooth(event: Event, sectionId: string) {
  event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    this.menuAberto = false; // se quiser fechar o menu mobile ao clicar
  }
}


  alternarTema() {
    document.body.classList.toggle('dark-mode');
  }
}
