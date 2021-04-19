import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuVisible = false;
  isUserMenuVisible = false;
  menuButtons!: string[];
  userMenuButtons!: string[];

  constructor() {}

  ngOnInit(): void {
    this.menuButtons = ['Dashboard', 'Team', 'Projects', 'Resume', 'Contact'];
    this.userMenuButtons = ['Your Profile', 'Settings', 'Sign out'];
  }

  pressMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  pressUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }
}
