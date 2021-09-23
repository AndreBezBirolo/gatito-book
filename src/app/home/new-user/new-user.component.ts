import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { NewUser } from './new-user';
import { lowercaseValidator } from './lowercase.validator';
import { UserExistService } from './user-exist.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  userName: string = '';
  fullName: string = '';
  password: string = '';
  email: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistService: UserExistService
  ) {
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowercaseValidator
        ],
        [
          this.userExistService.userExist()
        ]
      ],
      password: ['',
        [
          Validators.required
        ]
      ],
    });
  }

  register() {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser)
  }
}
