import { Component, OnInit } from '@angular/core';
import { Animals } from '../animal';
import { UserService } from '../../auth/user/user.service';
import { AnimalsService } from '../animals.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  animals!: Animals;

  constructor(
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.animals = this.activateRoute.snapshot.data['animals']
    })
  }

}
