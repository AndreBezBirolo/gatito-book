import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$ = this.userService.getUserObservable();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
