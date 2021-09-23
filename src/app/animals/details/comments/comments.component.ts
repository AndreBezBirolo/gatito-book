import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comments';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from './comments.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentService: CommentsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.comments$ = this.commentService.getComment(this.id);
    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.maxLength(300)]
    })
  }

  submitComment(): void {
    const comment = this.commentForm.get('commentText')?.value ?? '';
    this.comments$ = this.commentService.appendComment(this.id, comment)
      .pipe(
        switchMap(() => this.commentService.getComment(this.id)),
        tap(() => this.commentForm.reset())
      )
  }

}
