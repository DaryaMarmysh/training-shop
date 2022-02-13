
import './App.css';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home';
import Footer from '../Footer/Footer.jsx';
import {Route, Routes} from 'react-router-dom';
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
        <Route exact path='/women' element={Women()} />
        <Route exact path='/men' element={Men()} />
        {/* <div className='clothes' data-test-id='clothes-women'> <Route exact path='/Women' element={Women()} /></div> 
        <div className='clothes' data-test-id='clothes-men'> <Route exact path='/Men' element={Men()} /></div> */}
      
        <Route exact path='/ProductPage' element={ProductPage()} />
          </Routes>
        <Footer />
    
    </div>
  );
}

export default App;
