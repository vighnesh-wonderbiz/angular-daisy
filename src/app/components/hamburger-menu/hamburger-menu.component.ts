import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css',
})
export class HamburgerMenuComponent {
  isOn: boolean = true;

  toggleMenu = (e: boolean) => {
    this.isOn = !this.isOn;
  };
}
