import React, { useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';

const AUTHOR_QUERY = getAuthorsQuery;

const ADD_BOOK = gql`
  mutation addAuthor($name: String!, $genre: String!, $authorId: ID!) {
    addAuthor( input : {name: $name, genre: $genre, authorId:$authorId}) {
      name
      genre
    }
  }
`;



function AddBook() {
    const { loading, error, data } = useQuery(AUTHOR_QUERY);
    const [AddBook] = useMutation(ADD_BOOK);
    const [name2, setName] = useState(null);
    const [genre2, setGenre] = useState(null);
    const [authorId2, setAuthorId] = useState(null);


    function displayAuthors() {
        // var data = this.props.data;
        if (error) return `Error! ${error.message}`;
        if (loading) {
            return (<option disabled>Loading authors</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }


    function submitForm(e) {
        e.preventDefault()
        console.log(e);
        // use the addBookMutation // adds a book, but with no values
        console.log(name2, genre2, authorId2);
        AddBook({ variables: { name: name2, genre: genre2, authorId: authorId2 } });
    }
    return (
        <form id="add-book" onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>

        </form>
    );
}

export default AddBook
