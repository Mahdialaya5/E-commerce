
import './App.css';

import {useEffect} from "react"
import CardList from './compenent/cardList/cardList';
import { useDispatch } from 'react-redux';
import { addProduct, getAllProduct, getProductsbyUser } from './redux/actions';
import Signup from './compenent/signup/Signup';
import {Routes,Route} from "react-router-dom"
import Home from './compenent/Home/Home';
import Login from './compenent/Login/Login';
import Products from './compenent/Products/Products';
import SideBar from './compenent/SideBar/SideBar';
import Cards from './compenent/cards/Cards';
import Profile from './compenent/Profile/Profile';
import { getCurrent } from './redux/action_user';
import EditUser from './compenent/EditUser/EditUser';
import EditProduct from './compenent/EditProduct/EditProduct'
import Addproduct from './compenent/Addproduct/Addproduct';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
  dispatch(getAllProduct())
  dispatch(getCurrent())
 
}, )

 return (
    <div >
    <Routes>
  <Route  path='/' element={<Home />}/>
  <Route  path='/login' element={<Login/>}/>
  <Route  path='/register' element={<Signup/>}/>
  <Route  path='/products' element={<><SideBar/> <Products/></>}/>
  <Route  path='/profile' element={<><SideBar/><Profile/></>}/>
  <Route  path='/profileSettings' element={<><SideBar/><EditUser/></>}/>
   <Route path='/addproduct' element={<Addproduct/>}  />
  <Route  path='/editproduct:id' element={<EditProduct/>} />
    </Routes>
  </div>
  );
}

export default App;
