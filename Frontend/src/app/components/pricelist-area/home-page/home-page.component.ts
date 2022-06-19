import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Post } from '../../../interfaces/post';
import { priceListService } from "../../../services/priceList.service";
import store from 'src/app/redux/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  post: any[]
  constructor(
    private dataService: DataService,
    private priceListService: priceListService
  ) { }

  async ngOnInit(): Promise<any> {
    try {
        if(store.getState().PriceListState.pricelist)
        {
            const unsubscribe = await store.subscribe(() => {
                this.post = store.getState().PriceListState.pricelist ;
                this.dataService.postsData = this.post;

              });
              return () => {
                unsubscribe();
              };

        }






   

    this.post = await this.dataService.getPosts();
      this.dataService.postsData = this.post;
      console.log("this.post: " , this.post);
    


    } catch (error) {
            
    }
    };
    

    @Output()
    public deleteMe = new EventEmitter<string>();
  
    public deletePriceList(_id: string) {
      this.deleteMe.emit(_id);
    }
    
  

  onSelectedOption(e:any) {
    this.getFilteredExpenseList();
  }

  async deleteThisCard(_id: string) {
    try {
      await this.priceListService.deletePriceList(_id);
      alert("pricelist has been deleted");
      const index = this.post.findIndex((g) => g._id === _id);
      this.post.splice(index, 1);
    } catch (err: any) {
      alert(err.message);
    }
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postsData;
    }

    console.log(this.post)
  }

}
