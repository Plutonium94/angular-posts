import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './posts.service';

@Injectable()
export class AuthorService {

 	constructor(private httpClient : HttpClient, private postsService : PostsService) {

 	}

 	getAuthors() {
 		this.httpClient.get('https://jsonplaceholder.typicode.com/users',{observe:'response'})
 			.toPromise();
 	}

 	getAuthorNameForPostId(postId : number) {
 		return this.postsService.getPost(postId).then((p)=>{
 			return this.getAuthorById(p.body.userId);
 		}).then((aut)=>{
 			return new Promise((resolve,reject)=>{
 				resolve(aut.body['username']);
 			}); 
 		});

 	}

 	getAuthorById(id: number) {
 		return this.httpClient.get('https://jsonplaceholder.typicode.com/users/'+id, {observe:'response'})
 			.toPromise();
 	}

}
