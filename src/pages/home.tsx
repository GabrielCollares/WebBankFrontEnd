import Navbar from '../components/navbar/navbar'
import '../index.css'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function HomePage() {

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-text">
          <h1 className="text-h1">Your Financial Future, Right at Your Fingertips.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error veniam in voluptatem magni quisquam</p>
          <a href="#" className="home-btn">Get it now</a>
        </div>
        <div className="home-img">
          <img src="https://cdn.dribbble.com/users/697179/screenshots/17078664/media/e6651a82c7867d2a977a29c42a65fe9b.png?resize=1000x750&vertical=center" alt=""></img>
        </div>
      </section>

      <section className="home2">
        
      <div className="container">
        <div className="card1">
            <div className="card-body">
                <h1 className="textcard1">Sharpbank</h1>
                
                <a href="#" className="btn2">Faça sua Conta</a>
            </div>
        </div>

        <div className="card2">
            <div className="card-body">
                <h1 className="textcard2">Credit Card</h1>
                <img className="imgcard2" src="https://cdn.dribbble.com/userupload/7357224/file/original-02fbbd3cc8d9d871b176360e7e7de371.png?resize=1024x771" alt="Nubank logo"></img>
                <a href="#" className="btn1">Solicitar cartão</a>
            </div>
        </div>
    </div>

      </section>
    </>
  )
}

export default HomePage