import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.getElementById('projetos');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    // Quando o topo do elemento está dentro da tela, mostra a seção
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      this.isVisible = true;
    }
  }

  ngOnInit() {
    this.onWindowScroll(); // Verifica ao iniciar
  }
}
