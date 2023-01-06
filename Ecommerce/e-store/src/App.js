import './App.css';
import { Header } from './components/header';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {Home} from './components/home';
import {Cart} from './components/cart';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
