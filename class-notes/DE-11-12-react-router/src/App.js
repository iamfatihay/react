import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
import ContactForm from './pages/ContactForm';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/courses' element={<CourseCard />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App