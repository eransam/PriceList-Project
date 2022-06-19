import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PriceList } from "src/app/models/pricelist.model";
import { environment } from "src/environments/environment";
import { DataService } from '../../../services/data.service';

@Component({
  selector: "app-pricelist-card-copy",
  templateUrl: "./pricelist-card-copy.component.html",
  styleUrls: ["./pricelist-card-copy.component.css"],
})
export class pricelistCardCopyComponent {

    post: any[]
    constructor(
      private dataService: DataService
    ) { }
  
    async ngOnInit() {
      this.post = await this.dataService.getPosts();
        this.dataService.postsData = this.post;
        console.log("this.post: " , this.post);
  
      };
  
      @Output()
      public deleteMe = new EventEmitter<string>();
    
      public deletePriceList(_id: string) {
        this.deleteMe.emit(_id);
      }
      
    
  
    onSelectedOption(e:any) {
      this.getFilteredExpenseList();
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
