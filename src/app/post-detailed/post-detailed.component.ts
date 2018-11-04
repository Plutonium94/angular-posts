import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostsService } from '../posts.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.css']
})
export class PostDetailedComponent implements OnInit {

	post:any= {userId:2, id:3,title: 'Epic',body:'excellently'};

  constructor(private postsService :PostsService, private authorService :AuthorService) {
  }

  ngOnInit() {
    this.postsService.getPost(3).then((p)=>{
      console.log(p);
    });

  	this.postsService.change.subscribe((id)=>{
      console.log('isaac');
  		console.log('received subscribed event');
  		this.postsService.getPost(id).then((p)=>{
  			console.log(p);
  			this.post = p.body;

        this.authorService.getAuthorNameForPostId(this.post.id).then((an)=> {
          this.post.authorName = an;
        });
  		}); 
  	});
    /*this.postsService.change.subscribe((id)=>{ console.log('received ' + id);});
    console.log('after subscribe');
    console.log(this.postsService.change);*/
  	
  }

}
