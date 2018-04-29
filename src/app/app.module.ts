import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { PostsService } from './services/posts.service';

const routes: Routes = [
  { path: 'posts', component: PostsViewComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostsViewComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    PostsViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
