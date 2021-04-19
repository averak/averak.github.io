import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuVisible = false;
  isUserMenuVisible = false;

  constructor() {}

  ngOnInit(): void {}

  pressMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  pressUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }
}
