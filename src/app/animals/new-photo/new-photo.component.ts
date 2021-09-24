import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalsService } from '../animals.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.scss']
})
export class NewPhotoComponent implements OnInit {

  formPhoto!: FormGroup;
  file!: File;
  preview!: string;
  percent: number = 0

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formPhoto = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  submit() {
    const allowComments = this.formPhoto
      .get('allowComments')?.value ?? false;
    const description = this.formPhoto
      .get('description')?.value ?? '';

    this.animalsService.uploadPhoto(description, allowComments, this.file)
      .pipe(
        finalize(() => this.router.navigate(['animals'])))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total ?? 1;
          this.percent = Math.round(100 * (event.loaded / total))
        }
      }, (error => console.log(error)))
  }

  uploadFile(fileInput: any): void {
    const [file] = fileInput?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.results
    reader.readAsDataURL(file);
  }

}
