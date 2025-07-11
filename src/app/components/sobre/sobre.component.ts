import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.getElementById('sobre');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      this.isVisible = true;
    }
  }

  ngOnInit() {
    this.onWindowScroll();
  }
}
