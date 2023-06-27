import './App.css';
import HomePage from './components/pages/homePage/HomePage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import {Routes , Route, BrowserRouter } from "react-router-dom" 
import NotFound from './components/pages/notFoundPage/NotFound';
import Login from './components/pages/loginPage/Login';
import Forms from './components/pages/formsPage/Forms';
import Singup from './components/pages/singup/Singup';
import List from './components/pages/listPage/List';
import Product from './components/pages/product/Product';
// import {BrowserRouter} from "react-router-dom" 

function App() {
  return (
    <div className="App">
       <BrowserRouter forceRefresh={true}>
          <Header />

        <Routes>
          
          <Route path ="*" element= {<NotFound />}/> 
          <Route path="/" element={ <HomePage /> } />   
          <Route path="/product" element={ <Product /> } />   
          <Route index path="/About" element={<h1>About Page</h1> } />   
          <Route path="/forms" element={<Forms /> } />   
          <Route path="/list" element={<List /> } />   
          
          <Route path="/login" element={<Login /> } />   
          <Route path="/singup" element={<Singup /> } />   
        </Routes> 
        {/* <Button type="primary">Primary Button</Button> */}
        
        <Footer />
       </BrowserRouter>
        
    </div>
  );
}

export default App;
