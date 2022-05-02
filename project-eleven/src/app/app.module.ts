import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, } from '@angular/router';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './tab/tab.component';
import { DisplayComponent } from './display/display.component';
import { BookComponent } from './book/book.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookformComponent } from './bookform/bookform.component';
import { PriceDiscountPipe } from './price-discount.pipe';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'news',component: NewsComponent},
  {path: 'books',component: BookCatlogComponent},
  {path: 'addbook',component: BookformComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BoxaComponent,
    CustomerFormComponent,
    HitButtonComponent,
    EmployeeFormComponent,
    MenuComponent,
    NewsComponent,
    HomeComponent,
    TabComponent,
    DisplayComponent,
    BookComponent,
    BookCatlogComponent,
    BookListComponent,
    BookformComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
