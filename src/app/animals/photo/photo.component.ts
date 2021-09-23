import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

const API =  environment.API_URL

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  private original_url: string = '';
  @Input() set image_url(url: string) {
    if(url.startsWith('data')) {
      this.original_url = url
    } else {
      this.original_url = `${API}/imgs/${url}`;
    }
  };
  get image_url(): string {
    return this.original_url
  }
  @Input() alternative_text: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
