import React from 'react'
import { useQuery, gql } from '@apollo/client';

const AUTHOR_QUERY = gql`
 {
    authors{
      name
      id
    }
  }
`;



function AddBook() {
    const { loading, error, data } = useQuery(AUTHOR_QUERY);
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
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>

        </form>
    );
}

export default AddBook
