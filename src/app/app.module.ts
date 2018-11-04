import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { PostConciseListComponent } from './post-concise/post-concise.component';

import { HttpClientModule } from '@angular/common/http';
import { PostsService  } from './posts.service';
import { AuthorService } from './author.service';
import { PostDetailedComponent } from './post-detailed/post-detailed.component';
import { EllipsisPipe } from './ellipsis.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostConciseListComponent,
    PostDetailedComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostsService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
