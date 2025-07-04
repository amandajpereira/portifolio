import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss']
})
export class CompetenciasComponent implements OnInit {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.getElementById('competencias');
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        this.isVisible = true;
      }
    }
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }
}
