import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from 'src/app/book-list/book-list.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
    'Get Book Init': emptyProps()
  },
});

// export const bookAPIInit = createAction('[Book API] Init');
