
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { Routes , Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>



<Routes>

<Route path = '/' element = {<Home/>} />

<Route path = '/about' element = {<About/>} />

<Route path = '/contact' element = {<Contact/>} />

<Route path = '/cart' element = {<Cart/>} />

 </Routes>    


     </>
 )
}

export default App;