import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { priceListService } from "../services/priceList.service";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption: any[]=[]
  public postsData: any[]
  postUrl : string = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(
    private http: HttpClient,
    private priceListService: priceListService
  ) { }


  async getPosts(): Promise<any[]>{
    return await this.priceListService.getAllPriceList();
    
  }

  filteredListOptions() {
    let posts = this.postsData;
        let filteredPostsList = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.priceListName === post.priceListName) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log("filteredPostsList: " , filteredPostsList);
        return filteredPostsList;
  }
}
