
import './App.css';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home';
import Footer from '../Footer/Footer.jsx';
import {Route, Routes,useMatch,useLocation} from 'react-router-dom';
import Men from '../Pages/Men/Men';
import ProductPage from '../Pages/ProductPage/Product'
import Women from '../Pages/Women/Women';
function App() {
  
  return (
    <div className='app' data-test-id="app">  
      <Header />
     
        <Routes>
        <Route index element={Home()}/>
        <Route exact path='/' element={Home()} />  
        <Route exact gender='women'  path={`/${'women'}`} element={Women()} />
        <Route exact gender='men'  path={`/${'men'}`} element={Men()} />
        <Route  path="/:gender/:id" element={<ProductPage  />} />
          </Routes>
        <Footer />
    
    </div>
  );
}

export default App;
