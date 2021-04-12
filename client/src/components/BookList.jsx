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
                <li>Book name</li>
            </ul>
        </div>
    );
}

export default BookList
