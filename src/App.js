import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 


import Personil from './component/Personil';
// import Header from './component/Header';
// import About from './component/About';
import Home from './component/Home';
import AddPersonil from './component/AddPersonil';
import Login from './component/Login';
import Register from './component/Register';
import ProtectedRoutes from './component/TokenAuth';
// import UserTable from './component/User';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Header title="Testing header" />
    //     <nav>
    //       <ul>
    //         <li><a><Link to="/">Home</Link></a></li>
    //         <li><a><Link to="/about">About</Link></a></li>
    //         <li><a><Link to="/user">User Table</Link></a></li>
    //       </ul>
    //     </nav>
    //   </div>

    //   <Routes>
    //     <Route path='/about' element={<About />} />
    //     <Route path='/user' element={<UserTable />} />
    //     <Route path='/' element={<Home />} />
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route 

        path='/personil' 
        element={
        <ProtectedRoutes>
          <Personil />
        </ProtectedRoutes>
        } 

        />
        <Route path='/' element={<Home />} />
        <Route path='/tambah_personil' element={<AddPersonil />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
