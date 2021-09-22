import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userName: string = '';
  fullName: string = '';
  password: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
