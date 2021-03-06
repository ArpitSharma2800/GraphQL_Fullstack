import React from 'react'
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

const BOOK_QUERY = getBooksQuery;

function BookList() {
  const { loading, error, data } = useQuery(BOOK_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      <ul id="book-list">
        {data.books.map(book => (
          <li key={book.id}>
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList
