import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home'

function ErrorPage() {
  return (
    <>
      <Header/>
      <div className='error-page'>
        <span className='error404'>404</span>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <a href= '/'>Retourner sur la page d'acceuil</a>
      </div>
      <Footer/>
    </>
  );
}

export default ErrorPage;




