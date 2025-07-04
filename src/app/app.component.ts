import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  anoAtual = new Date().getFullYear();

  ngAfterViewInit(): void {
    const sections = this.el.nativeElement.querySelectorAll('section.container');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section: any) => {
      observer.observe(section);
    });
  }
}
