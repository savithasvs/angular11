import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = 'Financial Books';
  currentTab = 1;
  books: Array<any> = [ ];
  constructor(private booksvc: BooksdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }
  onbuy(book:any) {
    console.log('Book added to the Cart...'+ book.name+'  ' + book.price);
  }
  isTabselected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number){
    event.preventDefault();//To stop flicker
    this.currentTab = tabIndex;
    console.log('Tab selected: '+ this.currentTab);
  }
}
