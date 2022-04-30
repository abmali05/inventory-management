import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import SignUp from './Pages/Login/SignUp/SignUp';
import SignIn from './Pages/Login/SignIn/SignIn';
function App() {
  return (
    <div>
      <Header></Header>
      <h2>React Client</h2>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
