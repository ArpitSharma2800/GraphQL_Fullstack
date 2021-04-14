import React from 'react'
import { useQuery, gql } from '@apollo/client';

const BOOK_QUERY = gql`
 {
    books{
      name
      genre
      id
    }
  }
`;

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
            {book.name}, {book.authorId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList
