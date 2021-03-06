import React, { useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client';
import { getAuthorsQuery, getBooksQuery } from '../queries/queries';

const AUTHOR_QUERY = getAuthorsQuery;

const ADD_BOOK = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;



function AddBook() {
    const { loading, error, data } = useQuery(AUTHOR_QUERY);
    const [AddBook] = useMutation(ADD_BOOK);
    const [name, setName] = useState(null);
    const [genre, setGenre] = useState(null);
    const [authorId, setAuthorId] = useState(null);


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
        console.log(name, genre, authorId);
        AddBook({ variables: { name: name, genre: genre, authorId: authorId }, refetchQueries: [{ query: getBooksQuery }] });


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
