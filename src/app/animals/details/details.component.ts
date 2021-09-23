import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalsService.getById(this.animalId);
  }

  like() {
    this.animalsService.likePhoto(this.animalId)
      .subscribe(boolLike => {
        if(boolLike) {
          this.animal$ = this.animalsService.getById(this.animalId)
        }
      })
  }

  delete() {
    this.animalsService.deletePhoto(this.animalId)
      .subscribe(() => {
          this.router.navigate(['/animals/'])
        },
        error => console.log(error)
      )
  }

}
