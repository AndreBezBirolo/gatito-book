import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalsService.getById(this.animalId);
  }

}
