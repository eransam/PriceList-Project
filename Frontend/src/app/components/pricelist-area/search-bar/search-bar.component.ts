import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

//כך אנו יכולים לקשר את המשתנה הזה לאלמנט מסויים בפורם שלנו ע''י הוספה של 
//[formControl]="myControl"
//לאלמנט
  myControl = new FormControl();

  filteredOptions: Observable<string[]>;
  allPosts: any[];
  autoCompleteList: any[]
  post: any[]


//htmlמייבא את ערך המשתנה הזה מקומפוננטה חיצונית שבמקרה שלנו היא בקובץ ה 
//ערך המשתנה הזה בפרוייקט שלנו יהיה הטקסט שנכתב בתיבת החיפוש
  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;

//מוציא את המשתנה הזה לקומפוננטת האב
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    private dataService: DataService
  ) { }
  public searchOptionArray: any[];
  //allPosts כך אנו מייבאים את כל האובייקטים שלנו למערך 


    
  async ngOnInit() {
    try {
    this.searchOptionArray = await this.dataService.searchOption;
//מאזין לכל שינוי  = .subscribe
//.getPosts() ערכו יהיה הקלט מהפונקציה  = posts
      this.post = await this.dataService.getPosts();        //allPosts כך נזין את כל האובייקטים הקיימים במערכת במערך
      this.allPosts = this.post;
      //(valueChanges) מאזין לכל שינוי אשר יתבצע בערך של המשתנה שהוא מקושר אליו  .subscribe
//valueChanges ערכו יהיה הערך של = userInput
//myControl זאת אומרת שבכל שינוי בערך של תיבת האינפוט בפורם אשר מקושרת למשתנה 
    this.myControl.valueChanges.subscribe(userInput => {

        //autoCompleteExpenseList אנו ניקח את הערך של התיבה ונשלח אותו בתור פרמטר לפונקציה
        this.autoCompleteExpenseList (userInput);
            })
    } 
    
    catch (err: any) {
        alert(err.message);
      }
    };

    



  


//במקרה שלנו פונ' זו מקבלת כפרמטר את הערך שהכניס המשתמש בתיבת החיפוש
//  autoCompleteList ובמידה ואכן קיים אובייקט עם ערך חיפוש כזה היא מכניסה את ערך האינדקס שלו למשתנה
//את כל האובייקטים autoCompleteList ובמידה ולא קיים אובייקט כזה היא מכניסה למשתנה
  private autoCompleteExpenseList(input:any) {

//אשר מחזירה את מספר האינדקס של האובייקט  filterCategoryList מחילים על ערך החיפוש פונ' 
//אשר ערכו שווה לערך החיפוש
//שווה למספר האינדקס או שבמידה ואין אובייקט כזה הוא יהיה שווה לכל האובייקטים categoryList כעת המשתנה 
    let categoryList = this.filterCategoryList(input)

//autoCompleteList לאחר מכן אנו נכניס את ערך זה לתוך המערך 
    this.autoCompleteList = categoryList;
  }



//פונ' שמקבלת ערך ובמידה וערך זה קיים במערך היא תחזיר את מס האינדקס שלו
//ובמידה וערך זה לא קיים במערכת היא תחזיר את כל מערך האובייקטים
  filterCategoryList(val: any) {
    console.log("val: " , val);
    

//יוצרים מערך
    var categoryList = []

//במידה והפרמטר שונה מסטרינג תחזיר מערך ריק
    if (typeof val != "string") {
      return [];
    }

//,תחזיר מערך ריק null במידה והפרמטר לא שווה כלום או שווה 
    if (val === '' || val === null) {
      return [];
    }

// allPosts במידה וקיים ערך בפרמטר אנו ניקח את המערך
// title ונחיל עליו את פונק הפילטר שהיא בעצם רצה על התאים שלו ובכל תא ניגשת לפרופרטי של האובייקט בתא 
//מורידה אותו לאותיות קטנות 
//ומחזירים את האינדקס של ערך הפרמטר שהתקבל בפונ' הראשית indexOf לאחר מכן אנו מחילים את פונק 
//*במידה והאינדקס לא קיים כי המשתנה לא קיים פונ' זו תחזיר מינוס 1
console.log("val2: " , val);
console.log("this.allPosts: " , this.allPosts);

    return val ? this.allPosts.filter(s => s.priceListName.toLowerCase().indexOf(val.toLowerCase()) != -1)

// allPosts\אנו נחזיר את על מערך  val במידה ולא קיים ערך במשתנה 
      : this.allPosts;
  }





//פונ' שמקבלת אובייקט מסוג פוסט ומחזירה את הכותרת שלו
  displayFn(post: any) {

//k של האובייקט למשתנה שלנו  titleבמידה וקיים ערך בפרמטר אנו נכניס את ערך ה
    let k = post ? post.priceListName : post;
    return k;
  }



  
  //פונ' שמקבלת פרמטר איבנט
  filterPostList(event: any) {

    //יוצרים משתנה שממכיל את ערך הפרמטר
    var posts= event.source.value;

        //במידה וקיים ערך
        if(!posts) {

          //יהיה מערך ריק searchOption אנו נזין שהמערך
          this.dataService.searchOption=[]
        }
        else {
          console.log("not")
            //ולאחר שנרוקן את המערך אנו נדחוף לו את ערך המשתנה שלנו
            this.dataService.searchOption.push(posts);

            //ובשל כך אנו יכולים לשלוח נתונים לקומפוננטת האב EventEmitter הוא משתנה מסוג  onSelectedOption
            //emit הדרך הפקודה 
            //כאשר בקומפוננטת האב אנו נשלח את הנתונים כך
            //<app-search-bar (onSelectedOption)="onSelectedOption($event)"></app-search-bar>
            //(onSelectedOption) אנו נירשום את שם המשתנה בתוך ייבוא הקומפוננטה
            //.emit מכיל את הנתונים שנישלחו אליו בפקודה ה $event וה
            this.onSelectedOption.emit(this.dataService.searchOption)
        }
        
        this.focusOnPlaceInput();

       
        
  }

//פונק אשר מוחקת את ערך החיפוש שהזין המשתמש
//מחוברת לכפתור מחיקה
  removeOption(option: any) {
    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
        this.dataService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.dataService.searchOption)
}

//לאחר שהמשתמש יבחר את מילת החיפוש שלו פונקציה זו תיכנס לפועל ותעשה פוקוס על תיבת החיפוש 
//ותנקה את ערך תיבת החיפוש כדי שהמשתמש יוכל לחפש עוד ערך במידת הצורך
focusOnPlaceInput() {
  this.autocompleteInput.nativeElement.focus();
  this.autocompleteInput.nativeElement.value = '';
}


}
