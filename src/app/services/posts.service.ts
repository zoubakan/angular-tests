import { Post } from '../shared/post';
import { Subject } from 'rxjs/Subject';
import { NewPostComponent } from '../new-post/new-post.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

    postsSubject = new Subject<Post[]>();
    private posts = [
        {
          title: 'Le PSG et le désert économique français',
          // tslint:disable-next-line:max-line-length
          content: 'Le gendarme financier du football français, la DNCG, vient de publier son dernier rapport. Sans surprise, il indique que le PSG n’évolue pas sur la même planète que les autres clubs de Ligue 1.',
          loveIts: 1,
          created_at : new Date('2018-03-25T17:06:00Z')
        }, {
          title: 'Une allergie d’origine extraterrestre',
          // tslint:disable-next-line:max-line-length
          content: 'Une rougeur accompagnée de démangeaisons s’est manifestée sur le doigt d’un homme portant une alliance qui contenait de petits éclats de météorite.',
          loveIts: 0,
          created_at : new Date('2018-03-28T09:17:00Z')
        }, {
          title: 'Il donne de l’argent à son auxiliaire de vie',
          // tslint:disable-next-line:max-line-length
          content: 'Au cours des trois années qui précèdent son décès, Marcel verse 30 000 euros à Corinne, son auxiliaire de vie. Ses héritiers demandent que Corinne rapporte la somme à la succession, du fait qu’une « clause de probité » lui interdisait de la recevoir.',
          loveIts: -1,
          created_at : new Date('2018-04-08T13:54:00Z')
        }
    ];

    constructor(private httpClient: HttpClient) { }

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    likeIt(post: Post) {
        this.posts[this.getPostIndex(post)].loveIts ++;
        this.emitPostSubject();
        /*this.savePostsToServer();*/
    }

    unlikeIt(post: Post) {
        this.posts[this.getPostIndex(post)].loveIts --;
        this.emitPostSubject();
        /*this.savePostsToServer();*/
    }

    addNewPost(title: string, content: string) {
        const newPost = new Post(title, content, 0, new Date());
        this.posts.push(newPost);
        this.emitPostSubject();
        /*this.savePostsToServer();*/
    }

    deletePost(post: Post) {
        this.posts.splice(this.getPostIndex(post), 1);
        this.emitPostSubject();
        /*this.savePostsToServer();*/
    }

    getPostIndex(post: Post): number {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
              if (postEl === post) {
                return true;
              }
            }
        );
        return postIndexToRemove;
    }

    savePostsToServer() {
        this.httpClient
            .put('https://my-blog-test-3db3d.firebaseio.com/posts.json', this.posts)
            .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }

    getPostsFromServer() {
        this.httpClient
          .get<Post[]>('https://my-blog-test-3db3d.firebaseio.com/posts.json')
          .subscribe(
            (response) => {
                if (response !== null) {
                    this.posts = response;
                    this.emitPostSubject();
                }
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }
}
