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
          <h1 className="text-h1">Your Financial Future,<br /> Right at Your Fingertips.</h1>
          <p>Your trusted partner, providing innovative and secure digital banking solutions for your business to thrive.</p>
          <a href="#" className="home-btn">Get it now</a>
          <a href="#" className="home-btn">Get it now</a>
        </div>
        <div className="home-img">
          <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/eef05933-bd97-4d3c-aa17-01dea5c381e0/DallEGeneratedImages/dalle-914ec1f0-caac-42b0-bfc4-2dd9d8eb28ea0251685272853636570200.jpg&dcHint=BrazilSouth&fileToken=60f0c532-13f7-4c43-a65d-d3412f9d31e7" alt=""></img>
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