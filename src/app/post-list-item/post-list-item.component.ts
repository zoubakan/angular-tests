import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: Post;

  constructor() { }

  ngOnInit() {
  }

  onLikeIt() {
    this.postItem.loveIts = this.postItem.loveIts + 1;
  }

  onUnlikeIt() {
    this.postItem.loveIts = this.postItem.loveIts - 1;
  }

}
