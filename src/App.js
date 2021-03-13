
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description/Description';
import Panier from './Components/Panier/Panier';
import Blog from './Components/Blogs/Blog';
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState('')
  const handelChange=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div className="container-fluid">
      <BrowserRouter>
     <Navbar handelChange={handelChange} search={search} />
     <Route exact path='/' render={(props)=><Home search={search} {...props} />} />
    <Route exact path='/products'  render={(props)=><Products search={search} {...props} />}/>
    <Route exact path='/' component= {Contact} /> 
    <Route exact path='/blog' component= {Blog} /> 
    <Route exact path='/description/:name' component={Description}/>
    <Route exact path='/panier' component={Panier}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
