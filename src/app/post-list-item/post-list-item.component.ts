import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostsService } from '../services/posts.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  onLikeIt() {
    this.postService.likeIt(this.postItem);
  }

  onUnlikeIt() {
    this.postService.unlikeIt(this.postItem);
  }

  onDeletePost() {
    this.postService.deletePost(this.postItem);
  }
}
