import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPhotos() {
  	
  }

}
