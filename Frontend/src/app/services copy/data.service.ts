import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption: any=[]
  public postsData: any[]
  postUrl : string = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(
    private http: HttpClient
  ) { }


  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(this.postUrl);
    
  }

  filteredListOptions() {
    let posts = this.postsData;
        let filteredPostsList = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.title === post.title) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}
