import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap } from "rxjs";
import { GoogleBooksService } from "src/app/book-list/book-list.service";
import { BooksApiActions } from "./books.actions";

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksApiActions.getBookInit),
      switchMap(() => {
        return this.bookService.getBooks().pipe(
          map(books => {
            return BooksApiActions.retrievedBookList({ books })
          }),
          catchError(() => EMPTY)
        )
      })
    )
  })
  constructor(private actions$: Actions, private bookService: GoogleBooksService) {

  }

}
