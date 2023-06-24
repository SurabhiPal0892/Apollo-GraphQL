import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Header } from "./components/common/Header";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

import { NotFound } from "./pages/NotFound";
const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming;
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming;
          }
        }
      }
    }
  }
})
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql", //server
  cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/project/:id" element={<ProjectDetails/>}/>
      <Route path="*" element={<NotFound/>}/>

      </Routes>
      </BrowserRouter>
      
    </ApolloProvider>
  );
}

export default App;
