import './App.css';
import BookList from './components/BookList';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div >
        <h1>List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
