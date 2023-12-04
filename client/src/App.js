import './App.css'
import {useEffect} from "react"
import { useDispatch } from 'react-redux';
import {  getAllProduct } from './redux/actions';
import Signup from './compenent/signup/Signup';
import {Routes,Route} from "react-router-dom"
import Home from './compenent/Home/Home';
import Login from './compenent/Login/Login';
import Products from './compenent/Products/Products';
import SideBar from './compenent/SideBar/SideBar';
import { getCurrent } from './redux/action_user';
import EditProduct from './compenent/EditProduct/EditProduct'
import Addproduct from './compenent/Addproduct/Addproduct';
import Dashboard from './compenent/Dashboard/Dashboard';
import PrivateRoute from './compenent/Routes/PrivateRoute';
import Settings from './compenent/Settings/Settings';
import CompanyRoute from './compenent/Routes/CompanyRoute';
import AdminRoute from './compenent/Routes/AdminRoute';
import DashboardAdmin from './compenent/DashboardAdmin/DashboardAdmin';
import PrivateHome from './compenent/PrivateHome/PrivateHome';


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
  <Route  path='/products' element={<PrivateRoute><PrivateHome/></PrivateRoute>}/>
  <Route  path='/profile' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
  <Route  path='/profileSettings' element={<PrivateRoute><Settings/></PrivateRoute>}/>
  <Route  path='/addproduct' element={<CompanyRoute><Addproduct/></CompanyRoute>}  />
  <Route  path={'/editproduct/:id'} element={<CompanyRoute><EditProduct/></CompanyRoute>} />
  <Route  path='/admin' element={<AdminRoute><DashboardAdmin/></AdminRoute>} />
    </Routes>
  </div>
  );
}

export default App;
