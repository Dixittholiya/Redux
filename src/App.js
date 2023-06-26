import './App.css';
import HomePage from './components/pages/homePage/HomePage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import {Routes , Route } from "react-router-dom" 
import NotFound from './components/pages/notFoundPage/NotFound';
import Login from './components/pages/loginPage/Login';
import Forms from './components/pages/formsPage/Forms';
import Singup from './components/pages/singup/Singup';
import List from './components/pages/listPage/List';
import Product from './components/pages/product/Product';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/Home" element={ <h1>Home Page</h1> } />    */}
          <Route path ="*" element= {<NotFound />}/> 
          <Route path="/" element={ <HomePage /> } />   
          <Route path="/product" element={ <Product /> } />   
          <Route path="/About" element={<h1>About Page</h1> } />   
          <Route path="/login" element={<Login /> } />   
          <Route path="/forms" element={<Forms /> } />   
          <Route path="/singup" element={<Singup /> } />   
          <Route path="/list" element={<List /> } />   
        </Routes> 
        {/* <Button type="primary">Primary Button</Button> */}
        
        <Footer />
        
    </div>
  );
}

export default App;
