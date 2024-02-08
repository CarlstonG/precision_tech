import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './pages/routes';

import './App.css';
import Footer from './components/Footer';

const App: React.FC = () => {
 
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />}/>
          ))}
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;