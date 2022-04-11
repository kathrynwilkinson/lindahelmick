import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Philosophy from './pages/Philosophy';
import Blog from './pages/Blog';
import CV from './pages/CV';

import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);

	return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/research' element={<Research />} />
          <Route path='/teaching' element={<Teaching />} />
          <Route path='/philosophy' element={<Philosophy />} />
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/cv' element={<CV />} />
        </Routes>
      </Router>
      <Footer />
    </div>


	);
}

export default App;

// {(typeof backendData.users === 'undefined') ? (
//   <p>Loading...</p>
// ): (
//   backendData.users.map((user, i) => (
//     <p key={i}>{user}</p>
//   ))
// )}
