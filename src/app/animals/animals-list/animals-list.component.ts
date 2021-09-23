import { Component, OnInit } from '@angular/core';
import { Animals } from '../animal';
import { UserService } from '../../auth/user/user.service';
import { AnimalsService } from '../animals.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.animals$ = this.userService.getUserObservable()?.pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.listImagesByUser(userName);
      }))
  }

}
