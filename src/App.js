import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Middle from './pages/bodyMiddle/Middle';
import Bottom from './pages/bottom/Bottom';
import Footer from './components/footer/Footer';
import Header from './pages/header/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
