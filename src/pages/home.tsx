import Navbar from '../components/navbar/navbar'
import '../index.css'

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
        <h1>OI</h1>


      </section>
    </>
  )
}

export default HomePage