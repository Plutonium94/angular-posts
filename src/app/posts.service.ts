import { Injectable } from '@angular/core';
import { Post } from './post';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class PostsService {

  selectedPostId:number;


  change: BehaviorSubject<number> = new BehaviorSubject(3);

  constructor(private httpClient : HttpClient) { 
    this.change.next(8);
    this.change.next(9);
  }

  getPosts() {
  	return this.httpClient.get('https://jsonplaceholder.typicode.com/posts',{observe: 'response'}).toPromise();
  }




  getPostsOrderedAlphabetically() {
    return this.getPosts().then((postsResponse)=> {
      let posts:any = postsResponse.body;
      return new Promise((res,rej)=>{
        posts.sort((p1,p2)=>{ return p1.title.localeCompare(p2.title); });
        res(posts);
      });
    });
  }

  private sortPostsAlphabetically(posts: Post[]) {
    return posts.sort((p1,p2)=>{
      return p1.title.localeCompare(p2.title);
    });
  }

  getPost(id :number) : Promise<HttpResponse<Post>> {
  	return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id,{observe:'response'})
  		.toPromise();
  }

  setDetailedPostId(id :number) {
  	if(id != this.selectedPostId) {

      this.selectedPostId = +id;
  		this.change.next(this.selectedPostId);
  	}
  }

}
