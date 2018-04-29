import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit, OnDestroy {


  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService ) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostSubject();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
