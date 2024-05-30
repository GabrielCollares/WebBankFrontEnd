import Navbar from '../components/navbar/navbar'
import '../index.css'


function HomePage() {

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-text">
          <h1 className="text-h1">Your <span className="text-h12">Financial Future,</span><br /> Right at Your Fingertips.</h1>
          <p>Your trusted partner, providing innovative and secure digital banking solutions for your business to thrive.</p>
          <a href="#" className="home-btn">Create your account</a>
          <a href="#" className="home-btn2">Get your card  </a>
        </div>
        <div className="home-img">
          <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/eef05933-bd97-4d3c-aa17-01dea5c381e0/DallEGeneratedImages/dalle-914ec1f0-caac-42b0-bfc4-2dd9d8eb28ea0251685272853636570200.jpg&dcHint=BrazilSouth&fileToken=60f0c532-13f7-4c43-a65d-d3412f9d31e7" alt=""></img>
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
    </>
  )
}

export default HomePage