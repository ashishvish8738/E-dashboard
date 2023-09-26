import './App.css';
import Nav from './Components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent'
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>Product Listing Components</h1>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update" element={<h1>Update Listing Components</h1>} />
        <Route path="/logout" element={<h1>Logout Listing Components</h1>} />
        <Route path="/profile" element={<h1>Profile Listing Components</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
