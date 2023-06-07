import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from 'src/store/books/books.actions';
import { selectBookCollection, selectBooks } from 'src/store/books/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(BooksApiActions.getBookInit())
  }
}
