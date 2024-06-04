import Navbar from '../components/navbar/navbar'
import '../index.css'
import imgnews from "../assets/document.jpg"



function HomePage() {

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-text">
          <h1 className="text-h1">Your <span className="text-h12">Financial Future,</span><br /> Right at Your Fingertips.</h1>
          <p>Your trusted partner, providing innovative and secure digital banking solutions for your business to thrive.</p>
          <a href="/register" className="home-btn">Create your account</a>
          <a href="/credit-card" className="home-btn2">Get your card  </a>
        </div>
        <div className="home-img">
          <img src="https://cdn.leonardo.ai/users/aba68ed0-97f6-43c8-a27d-eec56f4ac41d/generations/602bd46c-0e34-4d6c-b58d-7b8ae637edd1/Default_crie_uma_logo_de_um_app_de_banco_virtual_com_dinheiro_0.jpg" alt=""></img>
        </div>
      </section>

      <section className="home2">
       
      <h1 className="text-h2">A complete bank for</h1>
      <h1 className="text-h2">You and yours</h1>
      <h1 className="text-h2-2">Company</h1>
      
<div className="Cards-all">

      <div className="card">
 <div className="image2">
<img className='image2' src="https://cdn.leonardo.ai/users/aba68ed0-97f6-43c8-a27d-eec56f4ac41d/generations/63047e91-8c03-4d6a-9132-0744e1a7c6af/Default_aplicativo_de_banco_em_preto_e_branco_chamado_SharpBan_2.jpg" alt="" />
 </div>
  <div className="content">
    <a href="/register">
      <h1 className="title1">
      For you
      </h1>
    </a>

    <p className="desc">
Complete account, with card and investments in Brazil and abroad
    </p>

    <a className="action" href="/register">
      More
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div className="card">
 <div className="image1">
  <img className='image1' src="https://cdn.leonardo.ai/users/aba68ed0-97f6-43c8-a27d-eec56f4ac41d/generations/d862fd5a-a16d-4ee2-8a59-06eecfd80dfc/Default_crie_uma_logo_de_um_bando_bem_detalhada_chamada_SharpB_2.jpg?w=512" alt="" />
 </div>
  <div className="content">
    <a href="/register">
      <h1 className="title2">
For businesses
      </h1>
    </a>

    <p className="desc">
    Agile and uncomplicated account, with card, machine and free Pix
    </p>

    <a className="action" href="/register">
      More
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div className="card">
 <div className="image">
  <img className="image" src="https://cdn.leonardo.ai/users/aba68ed0-97f6-43c8-a27d-eec56f4ac41d/generations/d862fd5a-a16d-4ee2-8a59-06eecfd80dfc/Default_crie_uma_logo_de_um_bando_bem_detalhada_chamada_SharpB_3.jpg"></img>
 </div>
  <div className="content">
    <a href="/register">
      <h1 className="title3">
      For all
      </h1>
    </a>

    <p className="desc">
    Complete account with free Pix and solutions for your business. Close service and credit to grow (subject to analysis)
    </p>

    <a className="action" href="/register">
      More
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
</div>    
      </section>

      <section className='home3'>
<div className='divhome3'>
<h1 className='h1home3'>Chosen by more than</h1>
<h1 className='h1-2home3'>80.000.000</h1>
<h1 className='h2home3'>People who decided to have a lighter, more transparent and</h1>
<h1 className='h2home3'>uncomplicated, with the best that a bank can offer in Brazil and abroad</h1>
<h1 className='h2home3'>World</h1>
</div>

      </section>

      <section className='home4'>
        <div className='CONTEINER-home4'>
        <div className='title-home4'>
<h1 className='h1-home4'>SharpBank Blog: Education</h1>
<h1 className='h1-home4'> financial, news and more!</h1>
</div>
</div>
<div className="Cards-all">

      <div className="card-home4">
 <div className="image2">
<img className='image2' src="https://cdn.leonardo.ai/users/aba68ed0-97f6-43c8-a27d-eec56f4ac41d/generations/7aad80a7-d60f-46d9-96b0-d53b56f02319/Default_Crie_um_predio_bigtech_em_preto_e_branco_com_uma_logo_3.jpg" alt="" />
 </div>
  <div className="content1">

    <a className="action1" href="/register">
      Macro Review
      <span aria-hidden="true">
        →
      </span>

    </a>
    <p className="desc1">
    Stay up to date with what’s happening in the economy with our content

    </p>

  </div>
</div>

<div className="card-home4">
 <div className="image1">
  <img className='image1' src={imgnews} alt="" />
 </div>
  <div className="content">




    <a className="action1" href="/register">
    News
      <span aria-hidden="true">
        →
      </span>
    </a>
    <p className="desc1">
   
SharpBank records monthly profit for the 2st time
    </p>
  </div>
</div>

<div className="card-home4">
 <div className="image">
  <img className="image" src="https://cdn.leonardo.ai/users/aba68ed0-97f6-43c8-a27d-eec56f4ac41d/generations/11c13930-291a-4a9b-b9fa-6649eaae16dc/Default_ameaa_virtual_como_hacker_em_preto_e_branco_com_uma_lo_3.jpg"></img>
 </div>
  <div className="content">
    <a className="action1" href="/register">
Security
      <span aria-hidden="true">
        →
      </span>
    </a>
    <p className="desc1">
False Central: what you need to know to protect yourself against this scam
    </p>
  </div>
</div>  
</div>  
<div className="footer">&copy;<span id="year"> </span><span> SharpBank. All rights reserved.</span></div>
      </section>
    </>
  )
}

export default HomePage