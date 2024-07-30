import { Component, CSP_NONCE, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { navigations } from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  innerWidth: number = 0;
  title = 'Dashboard';
  isOn: boolean = true;
  isMobile: boolean = true;
  currPath: string = '';
  navigations: { name: string; link: string; icon: string }[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.isOn = window.innerWidth < 640;
    this.isMobile = window.innerWidth < 640;
    this.navigations = navigations;
  }
  toggleMenu = (e: boolean) => {
    this.isOn = e;
  };
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isOn = window.innerWidth < 640;
    this.isMobile = window.innerWidth < 640;
  }
}
