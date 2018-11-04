import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-post-concise-list',
  templateUrl: './post-concise.component.html',
  styleUrls: ['./post-concise.component.css']
})
export class PostConciseListComponent implements OnInit {

  posts:any;
  postIsMaximized:boolean = false;
  maxPostId:number;

  constructor(private postsService : PostsService, private authorService : AuthorService ) { }

  ngOnInit() {
  	this.postsService.getPostsOrderedAlphabetically().then((posts)=>{
      this.posts = posts;

      this.associatePostsWithAuthorName();
      console.log('maximum : ' + this.getMaxPostId());
    });
  }

  getMaxPostId() {
    return this.posts.reduce((accumulator, currentValue, currentIndex, sourceArray)=> {
      return (currentValue.id > accumulator)? currentValue.id: accumulator;  
    }, -1);
  }

  private associatePostsWithAuthorName() {
    this.posts.forEach((p,i)=>{
        this.authorService.getAuthorNameForPostId(p.id).then((an)=>{
          p.authorName = an;
        });
    });
  }

  changeDetailed(event : any) {
    let postId = +event.target.getAttribute('data-id');
    this.postsService.setDetailedPostId(postId);
  }

}
