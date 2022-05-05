import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import SignUp from './Pages/Login/SignUp/SignUp';
import SignIn from './Pages/Login/SignIn/SignIn';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ManageItems from './Pages/Home/ManageInventories/ManageInventories';
import AddProduct from './Pages/AddProduct/AddProduct';
import Myproduct from './Pages/MyProduct/Myproduct';
import Auth from './Pages/Login/Auth/Auth';
function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>

          <Route path='/inventory/:productId' element={
            <Auth>
              <ProductDetails></ProductDetails>
            </Auth>

          }></Route>
          {/* <Route path='/inventory/:productId' element={<Pdetail></Pdetail>}></Route> */}
          <Route path='/manageinventories' element={
            <Auth>
              <ManageItems></ManageItems>
            </Auth>

          }></Route>
          <Route path='/addproduct' element={
            <Auth>
              <AddProduct></AddProduct>
            </Auth>

          }></Route>
          <Route path='/myproduct' element={
            <Auth>
              <Myproduct></Myproduct>
            </Auth>

          }></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
