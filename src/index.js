import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import App from './App';
import  {ApolloClient , InMemoryCache , ApolloProvider ,HttpLink} from "@apollo/client"
import { BrowserRouter } from 'react-router-dom';


//defing apollo client

const client = new ApolloClient({
  cache :new InMemoryCache(),
  link : new HttpLink({
    uri : "/graphql"
  })
})

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

