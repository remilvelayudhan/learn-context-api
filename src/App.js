import Header from './Component/Header/Header';
import Home from './Page/Home';
import './App.css';
import Cart from './Context/Cart/cartContext';

function App() {
  return (<div>
    <Cart>
      <Header/>
      <Home/>
    </Cart>
   
    </div>
  );
}

export default App;
