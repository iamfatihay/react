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
import CardDetails from './pages/CardDetails';
import TeacherDetails from './pages/TeacherDetails';

   {/* / (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         / başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
      // path e ":" koyarak bir degisken karsilamasi gerektigini soyluyoruz

const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/teacher/:id' element={<TeacherDetails />} />
          <Route path='/courses' element={<CourseCard />} />
          <Route path='/courses/:namee' element={<CardDetails />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App