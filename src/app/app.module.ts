import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/store/counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { BookListComponent } from './book-list/book-list.component';
import { booksReducer } from 'src/store/books/books.reducer';
import { collectionReducer } from 'src/store/books/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
